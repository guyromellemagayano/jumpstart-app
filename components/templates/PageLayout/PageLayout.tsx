import { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { TCommonAdditionalProps, TCommonChildrenProps } from '@/types/common'

import styles from './PageLayout.module.css'

export type TPageLayoutProps = HTMLAttributes<HTMLElement> &
  TCommonChildrenProps &
  TCommonAdditionalProps

/**
 * Renders a generic page layout component.
 * @param className - The CSS class name of the layout.
 * @param children - The content of the layout.
 * @param rest - Additional props for the layout element.
 * @returns The rendered generic page layout component.
 */
const PageLayout = ({
  className,
  children,
  ...rest
}: TPageLayoutProps): JSX.Element => {
  return (
    <main className={clsx(styles.pageLayout, className)} {...rest}>
      {children}
    </main>
  )
}

export default PageLayout
