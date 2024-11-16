"use client";

import type { PropsWithChildren } from "react";

import { Button } from "./button";
import { DialogFullPageContent } from "./dialog";
import { DialogTitle } from "./dialog";

interface FullScreenModalProps extends PropsWithChildren {
	title: string;
	buttonText?: string;
	formId: string;
}
export function FullScreenModal(props: FullScreenModalProps) {
	return (
		<DialogFullPageContent
			aria-description={props.title}
			aria-describedby={props.title}
		>
			<DialogTitle />
			<span className="fixed right-4 top-4">
				<Button form={props.formId} type="submit">
					{props.buttonText || "Save changes"}
				</Button>
			</span>

			<div className="mt-20 max-w-xl w-full mx-auto pb-20">
				<h1 className="mb-10 text-xl font-semibold leading-none tracking-tight">
					{props.title}
				</h1>
				{props.children}
			</div>
		</DialogFullPageContent>
	);
}
