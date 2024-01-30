import { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import {
  TCommonAdditionalProps,
  TCommonChildrenProps,
  TCommonClassNameProps
} from '@/types/common'

import styles from './Article.module.css'

export type TArticleProps = HTMLAttributes<HTMLElement> &
  TCommonChildrenProps &
  TCommonClassNameProps &
  TCommonAdditionalProps

/**
 * Renders a generic article component.
 * @param children - The children of the article.
 * @param className - The CSS class name of the article.
 * @param rest - Additional props for the article element.
 * @returns The rendered generic article component.
 */
const Article = ({
  children,
  className,
  ...rest
}: TArticleProps): JSX.Element => {
  return (
    <article
      className={clsx(styles.article, className)}
      data-testid="article-container"
      {...rest}
    >
      {children}
    </article>
  )
}

export default Article
