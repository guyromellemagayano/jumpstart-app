import { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { TCommonAdditionalProps, TCommonChildrenProps } from '@/types/common'

import styles from './ListItem.module.css'

export type TListItemProps = HTMLAttributes<HTMLLIElement> &
  TCommonChildrenProps &
  TCommonAdditionalProps

/**
 * Renders a generic list item component.
 * @param className - The CSS class name of the list item.
 * @param children - The content of the list item.
 * @param rest - Additional props for the list item element.
 * @returns The rendered list item.
 */
const ListItem = ({
  className,
  children,
  ...rest
}: TListItemProps): JSX.Element => {
  return (
    <li className={clsx(styles.listItem, className)} {...rest}>
      {children}
    </li>
  )
}

export default ListItem
