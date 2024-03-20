import { useState } from 'react'
import { Data } from './types'
import {styled, css} from 'styled-components';

const DataTable = styled.table`
width:100%;
border-collapse:collapse;
`

const DataTableHead = styled.thead`
text-align: left;
color: #939393;
background: #2f2f2f;
`

const TableTR = styled.tr`
&:hover{
    background: #2f2f2f;
}
`
const THandTDstyle = css`
padding: 4px 6px;
border: 1px solid #505050;
`

const TableTH = styled.th`
${THandTDstyle}
`

const TableTD = styled.td`
${THandTDstyle}
`

const inputStyle = css`
flex: 1;
padding: 5px 10px;
border: 0;
`

const Input = styled.input`
${inputStyle}
`
const Select = styled.select`
${inputStyle}
`

const ButtonStyle = styled.button`
background: #2f2f2f;
color: #FFF;
border: 0;
cursor: pointer;
padding: 5px 10px;
`

export type TableProps = {
    rows: Data
}

const Table = ({ rows }: TableProps) => {
    const [sortedRows, setRows] = useState(rows)
    const [order, setOrder] = useState('asc')
    const [sortKey, setSortKey] = useState(Object.keys(rows[0])[0])

    const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (value) {
            setRows([...rows.filter(row => {
                return Object.values(row).join('').toLowerCase().includes(value)
            })
            ])
        } else {
            setRows(rows)
        }
    }

    const sort = (value: keyof Data[0], order: string) => {
        const returnValue = order === 'desc' ? 1 : -1
        setSortKey(value)
        setRows([...sortedRows.sort((a, b) => {
            return a[value] > b[value] ? returnValue * -1 : returnValue
        })
        ])
    }

    const updateOrder = () => {
        const updatedOrder = order === 'asc' ? 'desc' : 'asc'
        setOrder(updatedOrder)
        sort(sortKey as keyof Data[0], updatedOrder)
    }

    return (
        <>
            <div>
                <Input type="text" placeholder="Filter items" onChange={filter} />
                <Select onChange={(event) => sort(event.target.value as keyof Data[0], order)}>
                    {Object.keys(rows[0]).map((entry, index) => (
                        <option value={entry} key={index}>
                            Order by {entry}
                        </option>
                    ))}
                </Select>
                <ButtonStyle onClick={updateOrder}>Change order ({order})</ButtonStyle>
            </div>
            <DataTable>
                <DataTableHead>
                    <TableTR>
                        {Object.keys(rows[0]).map((entry, index) => (
                            <TableTH key={index}>{entry}</TableTH>
                        ))}
                    </TableTR>
                </DataTableHead>
                <tbody>
                    {sortedRows.map((row, index) => (
                        <TableTR key={index}>
                            {Object.values(row).map((entry, columnIndex) => (
                                <TableTD key={columnIndex}>{entry}</TableTD>
                            ))}
                        </TableTR>
                    ))}
                </tbody>
            </DataTable>
            {sortedRows.length === 0 && (
                <h1>No results found...</h1>
            )}
        </>
    )
}

export default Table