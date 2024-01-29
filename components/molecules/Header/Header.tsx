import {
  TCommonAdditionalProps,
  TCommonChildrenProps,
  TCommonClassNameProps
} from '@/types/common'

import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'
import styles from './Header.module.css'

export type THeaderProps = HTMLAttributes<HTMLElement> &
  TCommonClassNameProps &
  TCommonChildrenProps &
  TCommonAdditionalProps

/**
 * Renders a generic header component.
 * @param children - The children of the header.
 * @param className - The CSS class name of the header.
 * @param rest - Additional props for the header element.
 * @returns The rendered generic header component.
 */
const Header = ({
  className,
  children,
  ...rest
}: THeaderProps): JSX.Element => {
  return (
    <header className={clsx(styles.header, className)} {...rest}>
      {children}
    </header>
  )
}

export default Header
