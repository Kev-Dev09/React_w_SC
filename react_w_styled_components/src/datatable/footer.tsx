import React, { useEffect } from "react";

import styles from "./TableFooter.module.css";

const calculateRange = (dataLength: number, rowsPerPage: number) => {
    const range = [];
    const num = Math.ceil(dataLength / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

const Footer = ({ changePage, dataLength, pageLength }: { changePage: any, dataLength: number, pageLength: number }) => {
    let range = calculateRange(dataLength, pageLength);
    return (
        <div className={styles.tableFooter}>
            {range.map((el, index) => (
                <button key={index} onClick={() => changePage(el-1)}>
                    {el}
                </button>
            ))}
        </div>
    );
}
export default Footer