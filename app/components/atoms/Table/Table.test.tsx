import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Table from './Table'

describe('<Table />', () => {
  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Role', accessor: 'role', headerClassName: 'custom-header-class' }
  ]
  const data = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' }
  ]

  it('renders the table with data', () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
  })

  it('applies custom class names', () => {
    const customHeaderRowClass = 'custom-header-row-class'
    const customBodyRowClass = 'custom-body-row-class'
    const customCellClass = 'custom-cell-class'
    const customTheadClass = 'custom-thead-class'
    const customTbodyClass = 'custom-tbody-class'

    render(
      <Table
        columns={columns}
        data={data}
        headerRowClassName={customHeaderRowClass}
        bodyRowClassName={customBodyRowClass}
        cellClassName={customCellClass}
        theadClassName={customTheadClass}
        tbodyClassName={customTbodyClass}
      />
    )

    const rowgroups = screen.getAllByRole('rowgroup')
    const thead = rowgroups[0]
    const tbody = rowgroups[1]

    expect(thead).toHaveClass(customTheadClass)
    expect(tbody).toHaveClass(customTbodyClass)

    const headerRow = screen.getAllByRole('row')[0]
    expect(headerRow).toHaveClass(customHeaderRowClass)

    const bodyRows = screen.getAllByRole('row').slice(1)
    bodyRows.forEach(row => expect(row).toHaveClass(customBodyRowClass))

    const cells = screen.getAllByRole('cell')
    cells.forEach(cell => expect(cell).toHaveClass(customCellClass))
  })
})
