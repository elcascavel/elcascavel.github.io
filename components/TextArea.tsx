import { forwardRef, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          `
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
            resize-vertical
            focus:outline-none
            `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "Textarea";

export default TextArea;
