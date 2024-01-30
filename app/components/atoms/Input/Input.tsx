import { InputHTMLAttributes, useEffect } from 'react'

import { RegisterOptions } from 'react-hook-form'

import { TCommonAdditionalProps } from '@/types/common'

export type TInputProps = InputHTMLAttributes<HTMLInputElement> &
  TCommonAdditionalProps & {
    name: string
    options?: RegisterOptions
  }

/**
 * Renders a generic input component.
 * @param name - The name for the input.
 * @param className - The CSS class name for the input.
 * @param options - The options for the input.
 * @param rest - Additional input props.
 * @returns The rendered generic input component.
 */
const Input = ({
  name,
  className,
  register,
  errors,
  setFocus,
  ...rest
}: TInputProps): JSX.Element => {
  const defaultErrorMessage: string = 'Required Field'

  // Set focus on the input if `rest.autoFocus` is present and set to `true`.
  useEffect(() => {
    if (rest.autoFocus) {
      setFocus(name)
    }
  }, [name, rest, setFocus])

  // Separate handler for file inputs
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file change logic here
  }

  // Check if input type is 'file'
  const isFileType = rest.type === 'file'

  return (
    <>
      {isFileType ? (
        <input
          className={className}
          aria-invalid={errors[name] ? 'true' : 'false'}
          onChange={handleFileChange}
          {...rest}
        />
      ) : (
        <input
          className={className}
          aria-invalid={errors[name] ? 'true' : 'false'}
          {...register(name, { ...rest })}
          {...rest}
        />
      )}
      {errors[name] && (
        <p role="alert">{errors[name].message || defaultErrorMessage}</p>
      )}
    </>
  )
}

export default Input
