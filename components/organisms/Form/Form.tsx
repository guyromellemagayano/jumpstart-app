import { FormHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { TCommonAdditionalProps, TCommonChildrenProps } from '@/types/common'

import styles from './Form.module.css'

export type TFormProps = FormHTMLAttributes<HTMLFormElement> &
  TCommonChildrenProps &
  TCommonAdditionalProps

/**
 * Renders a generic form component.
 * @param className - The CSS class name for the form.
 * @param children - The content of the form.
 * @param rest - Additional props for the form element.
 * @returns The rendered generic form component.
 */
const Form = ({
  className,
  children,
  onSubmit,
  ...rest
}: TFormProps): JSX.Element => {
  return (
    <form
      className={clsx(styles.form, className)}
      onSubmit={onSubmit}
      data-testid="form-element"
      {...rest}
    >
      {children}
    </form>
  )
}

export default Form
