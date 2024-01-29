import { ReactNode } from 'react'

import Input, { TInputProps } from '@/components/atoms/Input/Input'
import Label, { TLabelProps } from '@/components/atoms/Label/Label'

import { TCommonAdditionalProps, TCommonClassNameProps } from '@/types/common'

export type TInputFieldProps = TCommonClassNameProps &
  TCommonAdditionalProps & {
    inputProps: TInputProps
    labelProps?: TLabelProps
    labelContent: ReactNode
  }

/**
 * Renders a generic input field component.
 * @param className - The CSS class name for the input field.
 * @param inputProps - The options for the input.
 * @param labelProps - The options for the label.
 * @param labelContent - The content of the label.
 * @param rest - Additional props for the input field.
 * @returns The rendered generic input field component.
 */
const InputField = ({
  className,
  inputProps,
  labelProps,
  labelContent,
  ...rest
}: TInputFieldProps): JSX.Element => {
  return (
    <div className={className} data-testid="input-field-container" {...rest}>
      {labelProps && labelContent && (
        <Label {...labelProps}>{labelContent}</Label>
      )}
      <Input {...inputProps} />
    </div>
  )
}

export default InputField
