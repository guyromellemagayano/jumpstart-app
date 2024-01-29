import { LabelHTMLAttributes } from 'react'

import { TCommonAdditionalProps, TCommonChildrenProps } from '@/types/common'

export type TLabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  TCommonChildrenProps &
  TCommonAdditionalProps

/**
 * Renders a generic label component.
 * @param className - The CSS class name for the label.
 * @param children - The content of the label.
 * @param rest - Additional props for the label element.
 * @returns The rendered generic label component.
 */
const Label = ({ className, children, ...rest }: TLabelProps): JSX.Element => {
  return (
    <label className={className} {...rest}>
      {children}
    </label>
  )
}

export default Label
