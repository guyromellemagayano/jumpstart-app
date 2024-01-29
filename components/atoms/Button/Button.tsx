import type { ButtonHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { TCommonAdditionalProps, TCommonChildrenProps } from '@/types/common'

import styles from './Button.module.css'

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TCommonChildrenProps &
  TCommonAdditionalProps

/**
 * Renders a generic button component.
 * @param className - The CSS class name of the button.
 * @param children - The content of the button.
 * @param rest - Additional props for the button element.
 * @returns The rendered generic button element.
 */
const Button = ({
  className,
  children,
  ...rest
}: TButtonProps): JSX.Element => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
