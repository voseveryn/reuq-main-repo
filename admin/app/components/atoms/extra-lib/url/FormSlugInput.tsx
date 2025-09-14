import { Component, Environment, Field, FieldAccessor, HasOne, SugaredRelativeSingleField } from '@contember/interface'
import { FormInput, FormInputProps } from '@contember/react-form'
import { Slot } from '@radix-ui/react-slot'
import { ComponentType } from 'react'
import { useSlugInput } from './useSlugInput'

export type FormSlugInputProps = FormInputProps & SlugInputOwnProps

export type SlugPrefix = string | ((environment: Environment) => string)

export type SlugInputDerivedFrom = SugaredRelativeSingleField['field'] | FieldAccessor.GetFieldAccessor

export interface SlugInputOwnProps {
	baseField?: SugaredRelativeSingleField['field']
	slugify: (value: string) => string
	derivedFrom: SlugInputDerivedFrom[] | SlugInputDerivedFrom
	format?: (accessors: FieldAccessor[]) => string | null
	unpersistedHardPrefix?: SlugPrefix
	persistedHardPrefix?: SlugPrefix
	persistedSoftPrefix?: SlugPrefix
}

type InputProps = React.JSX.IntrinsicElements['input'] & {
	prefix?: string
	href?: string
}
const SlotInput = Slot as ComponentType<InputProps>

export const FormSlugInput = Component<FormSlugInputProps>(
	({ derivedFrom, baseField, unpersistedHardPrefix, persistedHardPrefix, persistedSoftPrefix, format, children, field, slugify, ...props }, env) => {
		const { parseValue, formatValue, onBlur, hardPrefix, fullValue } = useSlugInput({
			field: baseField ? `${baseField}.${field}` : field,
			slugify,
			derivedFrom,
			format,
			unpersistedHardPrefix,
			persistedHardPrefix,
			persistedSoftPrefix,
		})

		return (
			<>
				{baseField ? (
					<HasOne field={baseField}>
						<FormInput field={field} parseValue={parseValue} formatValue={formatValue} {...props}>
							<SlotInput onBlur={onBlur} prefix={hardPrefix} href={fullValue ?? undefined}>
								{children}
							</SlotInput>
						</FormInput>
					</HasOne>
				) : (
					<FormInput field={field} parseValue={parseValue} formatValue={formatValue} {...props}>
						<SlotInput onBlur={onBlur} prefix={hardPrefix} href={fullValue ?? undefined}>
							{children}
						</SlotInput>
					</FormInput>
				)}
			</>
		)
	},
	({ field, isNonbearing, baseField, defaultValue, derivedFrom }) => {
		const derivedFromArray = Array.isArray(derivedFrom) ? derivedFrom : [derivedFrom]
		return (
			<>
				{baseField ? (
					<HasOne field={baseField}>
						<Field field={baseField} isNonbearing={isNonbearing} defaultValue={defaultValue} />
					</HasOne>
				) : (
					<Field field={field} isNonbearing={isNonbearing} defaultValue={defaultValue} />
				)}

				{derivedFromArray.map((it, index) => {
					if (typeof it === 'function') {
						return
					}
					return <Field field={it} key={index} />
				})}
			</>
		)
	},
)
