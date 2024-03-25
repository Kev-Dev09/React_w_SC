import React, { useState } from "react";

import useTable from "../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./tableFooter";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
            <div>
                <table className={styles.table}>
                    <thead className={styles.tableRowHeader}>
                        <tr>
                            <th className={styles.tableHeader}>Country</th>
                            <th className={styles.tableHeader}>Capital</th>
                            <th className={styles.tableHeader}>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slice.map((el) => (
                            <tr className={styles.tableRowItems} key={el.id}>
                                <td className={styles.tableCell}>{el.id}</td>
                                <td className={styles.tableCell}>{el.firstname}</td>
                                <td className={styles.tableCell}>{el.lastname}</td>
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