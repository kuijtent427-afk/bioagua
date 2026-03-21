import { useRef, useState, useEffect } from "react";
import { useEditMode } from "@/contexts/EditModeContext";

interface EditableTextProps {
  /** Key format: "page__section__content_key" */
  contentKey: string;
  /** Default/fallback text shown when no DB value exists */
  defaultValue: string;
  /** HTML tag to render */
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** For multiline editing */
  multiline?: boolean;
}

const EditableText = ({
  contentKey,
  defaultValue,
  as: Tag = "span",
  className = "",
  multiline = false,
}: EditableTextProps) => {
  const { isEditMode, contentMap, updateContent } = useEditMode();
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const value = contentMap[contentKey] ?? defaultValue;

  // When switching to edit mode and clicking, focus
  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
      // Place cursor at end
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [editing]);

  if (!isEditMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      ref={ref as any}
      className={`${className} cursor-pointer transition-all duration-200 ${
        editing
          ? "outline outline-2 outline-primary rounded-md bg-primary/5 px-1 -mx-1"
          : "hover:outline hover:outline-2 hover:outline-dashed hover:outline-primary/40 hover:rounded-md hover:bg-primary/5 hover:px-1 hover:-mx-1"
      }`}
      contentEditable={editing}
      suppressContentEditableWarning
      onClick={() => {
        if (!editing) setEditing(true);
      }}
      onBlur={(e: any) => {
        const newValue = e.target.innerText?.trim();
        if (newValue && newValue !== value) {
          updateContent(contentKey, newValue);
        }
        setEditing(false);
      }}
      onKeyDown={(e: any) => {
        if (e.key === "Enter" && !multiline) {
          e.preventDefault();
          e.target.blur();
        }
        if (e.key === "Escape") {
          e.target.innerText = value;
          setEditing(false);
        }
      }}
      title="Haz clic para editar"
    >
      {value}
    </Tag>
  );
};

export default EditableText;
