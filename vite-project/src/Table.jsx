import React from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

export default function Table() {

  const data = [
    { id: 1, name: 'Ada', age: 28 },
    { id: 2, name: 'Alan', age: 30 }]
  const columns = [
    { accessorKey: 'name',
      header:'FullName', },
    {
      accessorKey: 'age',
      header: <i>Age (Years)</i>,  },
  ]
  const table =useReactTable({
    data,
    columns,
    getCoreRowModel:getCoreRowModel(),
  })
  return (
    <table border="1">
      <thead>
        {table.getHeaderGroups().map((hg) => (
        <tr key={hg.id}>
          {hg.headers.map((header) => (
          <th key={header.id}>
          {flexRender(header.column.columnDef.header,header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
          <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
            ))}
          </tr>
        ))}
    </tbody>
    </table>
  )
}
