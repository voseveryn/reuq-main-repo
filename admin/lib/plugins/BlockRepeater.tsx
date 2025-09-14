import { Component } from '@contember/interface'
import { DefaultBlockRepeater } from '../block-repeater'
import { ReactNode } from 'react'

interface BlockRepeaterProps {
	field: string
	children: ReactNode
}

export const BlockRepeater = Component<BlockRepeaterProps>(({ field, children }) => (
	<DefaultBlockRepeater field={`${field}.items`} sortableBy="order" discriminationField="type">
		{children}
	</DefaultBlockRepeater>
))