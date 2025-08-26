import { EditorInlineToolbar, RichTextField } from '~/lib/editor'
import { Component } from '@contember/interface'
import {
	anchorElementType,
	boldMark,
	EditorElementTrigger,
	EditorMarkTrigger,
	italicMark,
	underlineMark,
} from '@contember/react-slate-editor-base'
import { Toggle } from '@radix-ui/react-toggle'
import { BoldIcon, ItalicIcon, LinkIcon, UnderlineIcon } from 'lucide-react'

type RichTextProps = {
	field: string
	label: string
}

export const RichText = Component(({ field, label }: RichTextProps) => (
	<RichTextField field={field} label={label}>
		<EditorInlineToolbar>
			<EditorMarkTrigger mark={boldMark}>
				<Toggle>
					<BoldIcon className="h-3 w-3" />
				</Toggle>
			</EditorMarkTrigger>
			<EditorMarkTrigger mark={italicMark}>
				<Toggle>
					<ItalicIcon className="h-3 w-3" />
				</Toggle>
			</EditorMarkTrigger>
			<EditorMarkTrigger mark={underlineMark}>
				<Toggle>
					<UnderlineIcon className="h-3 w-3" />
				</Toggle>
			</EditorMarkTrigger>
			<EditorElementTrigger elementType={anchorElementType}>
				<Toggle>
					<LinkIcon className="h-3 w-3" />
				</Toggle>
			</EditorElementTrigger>
		</EditorInlineToolbar>
	</RichTextField>
))