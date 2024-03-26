import React, { useState } from "react";

import useTable from "../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./tableFooter";
import { Button } from "@material-ui/core";

const Table = ({ data, rowsPerPage}: {data: any, rowsPerPage: number}) => {
    const [page, setPage] = useState(1);
    const [sortKey, setSortKey] = useState('');
    const { slice, range } = useTable(data, page, rowsPerPage, sortKey);    

    return (
        <>
            <div>
                <table className={styles.table}>
                    <thead className={styles.tableRowHeader}>
                        <tr>
                            {Object.keys(data[1]).map((entry, index) => (
                                <th onClick={() => setSortKey(entry)} key={index}>{entry}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {slice.map((row, index) => (
                            <tr className={styles.tableRowItems} key={index}>
                                {Object.values(row).map((entry, columnIndex) => (
                                    <td key={columnIndex}>{entry}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
            </div>
        </>
    );
};

export default Table;