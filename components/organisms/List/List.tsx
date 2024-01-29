import { HTMLAttributes, ReactNode, useMemo } from 'react'

import { clsx } from 'clsx'

import ListItem from '@/components/molecules/ListItem/ListItem'

import { TCommonAdditionalProps, TCommonClassNameProps } from '@/types/common'

import styles from './List.module.css'

export type TListProps = HTMLAttributes<HTMLUListElement> &
  TCommonClassNameProps &
  TCommonAdditionalProps & {
    items: ReactNode[]
    isOrdered?: boolean
  }

/**
 * Renders a generic list component.
 * @param className - The CSS class name of the list.
 * @param items - The items of the list.
 * @param rest - Additional props for the list element.
 * @returns The rendered generic list component.
 */
const List = ({
  className,
  items = [],
  isOrdered,
  ...rest
}: TListProps): JSX.Element => {
  // Memoize the list items to prevent unnecessary re-renders.
  const listItems = useMemo(
    () =>
      items.map((item, index) => (
        <ListItem key={`item-${index}`}>{item}</ListItem>
      )),
    [items]
  )

  // Select the list tag based on the `isOrdered` prop.
  const ListTag = isOrdered ? 'ol' : 'ul'

  return (
    <ListTag className={clsx(styles.list, className)} {...rest}>
      {listItems}
    </ListTag>
  )
}

export default List
