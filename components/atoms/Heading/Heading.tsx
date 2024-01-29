import { clsx } from 'clsx'

import {
  TCommonAdditionalProps,
  TCommonChildrenProps,
  TCommonClassNameProps
} from '@/types/common'

import styles from './Heading.module.css'

export type THeadingProps = TCommonClassNameProps &
  TCommonChildrenProps &
  TCommonAdditionalProps & {
    level: 1 | 2 | 3 | 4 | 5 | 6
  }

/**
 * Renders a generic heading component.
 * @param level - The heading level.
 * @param children - The content of the heading.
 * @param className - The CSS class name for the heading.
 * @param rest - Additional props for the heading element.
 * @returns The rendered generic heading component.
 */
const Heading = ({
  level,
  children,
  className,
  ...rest
}: THeadingProps): JSX.Element => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={clsx(styles.heading, className)} {...rest}>
      {children}
    </Tag>
  )
}

export default Heading
