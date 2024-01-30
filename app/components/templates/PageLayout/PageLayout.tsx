import { HTMLAttributes } from 'react'

import { TCommonAdditionalProps, TCommonChildrenProps } from '@/types/common'

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
    <main className={className} {...rest}>
      {children}
    </main>
  )
}

export default PageLayout
