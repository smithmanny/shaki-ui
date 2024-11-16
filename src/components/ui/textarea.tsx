import * as React from "react";

import { cn } from "../../lib/utils";
import { Label } from "./label";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

interface InputFieldProps extends TextareaProps {
	label: string
	error: string | undefined | any
}
const TextareaField = React.forwardRef<HTMLTextAreaElement, InputFieldProps>(
	({ className, error, ...props }, ref) => {
		return (
			<div className="space-y-2">
				<Label htmlFor={props.id}>{props.label}</Label>
				<textarea
					className={cn(
						"flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					ref={ref}
					{...props}
				/>
				{error ? (
					<p
						className="text-[0.8rem] font-medium text-destructive"
					>
						{error}
					</p>
				) : null}
			</div>
		);
	},
);
TextareaField.displayName = "InputField";

export { Textarea, TextareaField };
