import { clsx } from 'clsx'

import { TCommonAdditionalProps, TCommonClassNameProps } from '@/types/common'

export type TTableColumn = {
  header: string
  accessor: string
  headerClassName?: string
}

export type TTableProps = TCommonClassNameProps &
  TCommonAdditionalProps & {
    columns: TTableColumn[]
    data: Record<string, any>[]
    headerRowClassName?: string
    bodyRowClassName?: string
    cellClassName?: string
    theadClassName?: string
    tbodyClassName?: string
  }

/**
 * Renders a generic table component.
 * @param columns - The columns of the table.
 * @param data - The data of the table.
 * @param className - The CSS class name of the table.
 * @param headerRowClassName - The CSS class name of the header row.
 * @param bodyRowClassName - The CSS class name of the body row.
 * @param cellClassName - The CSS class name of the cell.
 * @param theadClassName - The CSS class name of the thead.
 * @param tbodyClassName - The CSS class name of the tbody.
 * @param rest - Additional props for the table element.
 * @returns The rendered generic table component.
 */
const Table = ({
  columns,
  data,
  className,
  headerRowClassName,
  bodyRowClassName,
  cellClassName,
  theadClassName,
  tbodyClassName,
  ...rest
}: TTableProps): JSX.Element => {
  return (
    <table className={className} {...rest}>
      <thead className={theadClassName}>
        <tr className={headerRowClassName}>
          {columns.map((col, index) => (
            <th
              key={index}
              scope="col"
              className={clsx(
                'py-3.5 pl-4 pr-3 text-left text-sm font-semibold',
                col.headerClassName
              )}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={tbodyClassName}>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={bodyRowClassName}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                className={clsx('px-3 py-4 text-sm', cellClassName)}
              >
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
