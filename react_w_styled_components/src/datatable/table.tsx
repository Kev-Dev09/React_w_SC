import { useState } from 'react'
import { Data } from './types'
import { styled, css } from 'styled-components';
import { Button } from '@material-ui/core';
import Footer from './footer';
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

const PaginationButtonContainer = styled.div`
display: 'flex';
justifyContent: 'flex-end'
`

export type TableProps = {
    rows: Data
}

const Table = ({ rows }: TableProps) => {
    if (rows.length > 0) {
        const [take, setTake] = useState(10);
        const [page, setPage] = useState(1);
        const [sortedRows, setRows] = useState(rows)
        const [visibleRows, setVisibleRows] = useState(rows.slice(0, take));
        const [order, setOrder] = useState('asc')
        const [sortKey, setSortKey] = useState(Object.keys(rows[0])[0])

        const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
            if (value) {
                setVisibleRows([...sortedRows.filter(row => {
                    return Object.values(row).join('').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(value)
                })
                ])
            } else {
                setVisibleRows(sortedRows.slice(0, take))
            }
        }

        const changePage = (page: number) => {
            setPage(page)
            setVisibleRows(sortedRows.slice(page * take, (page * take) + 10));
        }

        const sort = (value, order: string) => {
            console.log(value);
            const returnValue = order === 'desc' ? 1 : -1
            setRows([...sortedRows.sort((a, b) => {
                updateOrder();
                return a[value] > b[value] ? returnValue * -1 : returnValue
            })
            ])
            changePage(0)
        }

        const updateOrder = () => {
            const updatedOrder = order === 'asc' ? 'desc' : 'asc'
            setOrder(updatedOrder)
        }

        return (
            <>
                <div>
                    <Input type="text" placeholder="Filter items" onChange={filter} />
                    {/*<Select onChange={(event) => sort(event.target.value as keyof Data[0], order)}>
                    {Object.keys(rows[0]).map((entry, index) => (
                        <option value={entry} key={index}>
                            Order by {entry}
                        </option>
                    ))}
                </Select>
                    <ButtonStyle onClick={updateOrder}>Change order ({order})</ButtonStyle>*/}
                    <hr />
                    <DataTable>
                        <DataTableHead>
                            <TableTR>
                                {Object.keys(rows[1]).map((entry, index) => (
                                    <th onClick={() => sort(entry, order)} key={index}>{entry}</th>
                                ))}
                            </TableTR>
                        </DataTableHead>
                        <tbody>
                            {visibleRows.map((row, index) => (
                                <TableTR key={index}>
                                    {Object.values(row).map((entry, columnIndex) => (
                                        <TableTD key={columnIndex}>{entry}</TableTD>
                                    ))}
                                </TableTR>
                            ))}
                        </tbody>
                    </DataTable>
                    <Footer changePage={changePage} dataLength={rows.length} pageLength={take} />
                    {sortedRows.length === 0 && (
                        <h1>No results found...</h1>
                    )}
                </div>

            </>
        )
    } else {
        return (
            <h1>No data in table</h1>
        )
    }
}

export default Table