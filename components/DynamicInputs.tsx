import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface DynamicInputProps {
  id: string;
}

const DynamicInput = forwardRef<HTMLInputElement, DynamicInputProps>(
  ({ id }, ref) => {
    const [fields, setFields] = useState<string[]>([""]);

    const addField = () => {
      setFields([...fields, ""]);
    };

    const removeField = (index: number) => {
      const updatedFields = [...fields];
      updatedFields.splice(index, 1);
      setFields(updatedFields);
    };

    const handleFieldChange = (index: number, value: string) => {
      const updatedFields = [...fields];
      updatedFields[index] = value;
      setFields(updatedFields);
    };

    return (
      <div>
        {fields.map((value, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              className={twMerge(`
                flex
                w-full
                rounded-md
                bg-neutral-700
                border
                border-transparent
                px-3
                py-3
                text-sm
                file:border-0
                file:bg-transparent
                file:text-sm
                file:font-medium
                placeholder:text-neutral-400
                disabled:cursor-not-allowed
                disabled:opacity-50
                focus:outline-none
              `)}
              value={value}
              onChange={(e) => handleFieldChange(index, e.target.value)}
              ref={index === 0 ? ref : undefined}
              id={`${id}-${index}`}
            />
            {index === fields.length - 1 && (
              <button
                type="button"
                onClick={addField}
                className="ml-2 text-sm text-blue-500"
              >
                + Add Field
              </button>
            )}
            {index !== fields.length - 1 && (
              <button
                type="button"
                onClick={() => removeField(index)}
                className="ml-2 text-sm text-red-500"
              >
                - Remove Field
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
);

DynamicInput.displayName = "DynamicInput";

export default DynamicInput;
