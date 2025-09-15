import { Component, HasOne, SugaredRelativeSingleField } from '@contember/interface'
import { FormFieldScope, FormInputProps } from '@contember/react-form'
import { ClipboardIcon, ExternalLinkIcon } from 'lucide-react'
import { ComponentProps, ReactNode, forwardRef } from 'react'
import defaultSlugify from 'slugify'
import { FormContainer, FormContainerProps } from '~/lib/form'
import { Input, InputBare, InputLike } from '~/lib/ui/input'
import { cn } from '~/lib/utils'
import { FormSlugInput, SlugInputOwnProps } from './FormSlugInput'

export type SlugFieldProps = Omit<FormInputProps, 'children'> &
	Omit<FormContainerProps, 'children'> &
	Omit<SlugInputOwnProps, 'slugify'> & {
		required?: boolean
		inputProps?: ComponentProps<typeof Input>
		slugify?: (value: string) => string
		children?: ReactNode
		baseField?: SugaredRelativeSingleField['field']
		/**
		 * Tvůj logický prefix (např. "products" nebo "blog").
		 * Lomeníky neřeš – o ty se postará komponenta.
		 */
		prefix?: string
		/**
		 * Když zapneš, doplní se před prefix i aktivní locale z Environmentu.
		 * Locale bere z proměnné prostředí (viz `localeEnvKey`).
		 */
		withLocalePrefix?: boolean
		/**
		 * Název proměnné v Environmentu, kde je uložen kód jazyka.
		 * V praxi u SideDimensions bývá "currentLocale". Nechávám i fallbacky.
		 */
		localeEnvKey?: string
	}

type SlugFieldPropsWithChildren = SlugFieldProps & {
	children: ReactNode
	baseField: SugaredRelativeSingleField['field']
}

const hasChildrenButNoBaseField = (props: SlugFieldProps): props is SlugFieldProps & { children: ReactNode; baseField?: undefined } => {
	return props.children !== undefined && props.baseField === undefined
}

const defaultSlugRegex = /[*+~.()`'"!:@?#%&=^|\\\/[\]{}<>,;]/g

const trimSlashes = (s?: string) => (s ? s.replace(/^\/+|\/+$/g, '') : '')

export const SlugField = Component((props: SlugFieldProps | SlugFieldPropsWithChildren) => {
	const { baseField, field, label, description, inputProps, required, slugify, children, prefix, withLocalePrefix, localeEnvKey, ...restProps } = props

	if (hasChildrenButNoBaseField(props)) {
		throw new Error('baseField is required when children are provided')
	}

	// ✅ Sestavíme persistedHardPrefix – buď čistý string (jen prefix),
	// nebo funkci závislou na Environmentu (locale + prefix).
	const persistedHardPrefix =
		withLocalePrefix
			? ((env: any) => {
					// Zkusíme několik klíčů, podle toho, co ve tvém projektu používáš
					const key = localeEnvKey ?? 'currentLocale'
					const code =
						(env.getVariableOrElse?.(key, undefined)) ??
						(env.getVariableOrElse?.('currentLocaleCode', undefined)) ??
						(env.getVariable?.(key)) ??
						''

					const p = trimSlashes(prefix)
					// /cs/products/  nebo /cs/
					if (code) return p ? `/${code}/${p}/` : `/${code}/`
					// fallback bez locale, ať UI úplně nespadne:
					return p ? `/${p}/` : ''
			  })
			: (prefix ? `/${trimSlashes(prefix)}/` : '') // původní chování bez locale

	return (
		<>
			<FormFieldScope field={baseField ? `${baseField}.${field}` : field}>
				<FormContainer description={description} label={label}>
					<FormSlugInput
						baseField={baseField}
						field={field}
						slugify={value => slugify?.(value) ?? defaultSlugify(value, { remove: defaultSlugRegex })}
						// 🔑 klíčové: přepošleme náš computed prefix
						persistedHardPrefix={persistedHardPrefix}
						{...restProps}
					>
						<SlugInput required={required} {...(inputProps ?? {})} className={cn(inputProps?.className)} />
					</FormSlugInput>
				</FormContainer>
			</FormFieldScope>
			{baseField && children ? <HasOne field={baseField}>{children}</HasOne> : null}
		</>
	)
})

export type SlugInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
	prefix?: ReactNode
	href?: string
}

// todo: get website public url from global site context
const WEBSITE_PUBLIC_URL = ''

export const SlugInput = forwardRef<HTMLInputElement, SlugInputProps>(({ prefix, href, className, ...props }, ref) => {
	const targetUrl = `${WEBSITE_PUBLIC_URL}${href}`

	const copyToClipboard = () => {
		if (targetUrl) {
			navigator.clipboard.writeText(targetUrl)
		}
	}

	return (
		<InputLike className="relative w-full max-w-full">
			{prefix && <span className="-my-2 -ml-2 text-gray-400 self-stretch py-1 pl-2 flex items-center">{prefix}</span>}
			<InputBare className={cn('pr-1 w-full max-w-full', className)} {...props} ref={ref} />

			{targetUrl && (
				<div className="ml-auto self-stretch flex items-center bg-gray-50 -my-2 -mr-2 ">
					<a
						className="px-2 text-gray-600 rounded-r-md border-l hover:bg-gray-100 h-full flex items-center"
						href={targetUrl}
						target="_blank"
						rel="noreferrer"
					>
						<ExternalLinkIcon className="h-4 w-4" />
					</a>
					<button
						type="button"
						className="px-2 text-gray-600 bg-gray-50 rounded-r-md border-l hover:bg-gray-100 h-full flex items-center"
						onClick={copyToClipboard}
					>
						<ClipboardIcon className="h-4 w-4" />
					</button>
				</div>
			)}
		</InputLike>
	)
})
