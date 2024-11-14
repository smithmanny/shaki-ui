import * as React from "react";

import { cn } from "@/lib/utils.js";
import { Label } from "./label";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

interface InputFieldProps extends InputProps {
	label: string
	parentClassName?: string
	error: string | undefined | any
}
const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
	({ className, type, error, parentClassName, ...props }, ref) => {
		return (
			<div className={cn("space-y-2", parentClassName)}>
				<Label htmlFor={props.id}>{props.label}</Label>
				<Input
					type={type}
					className={className}
					ref={ref}
					aria-errormessage={error}
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
Input.displayName = "InputField";

export { Input, InputField };
