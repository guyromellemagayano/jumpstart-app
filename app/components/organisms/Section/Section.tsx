import { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import {
  TCommonAdditionalProps,
  TCommonChildrenProps,
  TCommonClassNameProps
} from '@/types/common'

import styles from './Section.module.css'

export type TSectionProps = HTMLAttributes<HTMLElement> &
  TCommonChildrenProps &
  TCommonClassNameProps &
  TCommonAdditionalProps

/**
 * Renders a generic section component.
 * @param children - The children of the section.
 * @param className - The CSS class name of the section.
 * @param rest - Additional props for the section element.
 * @returns The rendered generic section component.
 */
const Section = ({
  children,
  className,
  ...rest
}: TSectionProps): JSX.Element => {
  return (
    <section
      className={clsx(styles.section, className)}
      data-testid="section-container"
      {...rest}
    >
      {children}
    </section>
  )
}

export default Section
