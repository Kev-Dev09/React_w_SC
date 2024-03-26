import { useState, useEffect } from "react";

const calculateRange = (sortedRows, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(sortedRows.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (sortedRows, page, rowsPerPage) => {
  //data = sort(sortKey,sortOrder)
  return sortedRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage, sortKey) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);
  const [sortedRows, setRows] = useState(data)
  const [order, setOrder] = useState('asc')
  
  const sort = (value, order: string) => {
    console.log(value);
    const returnValue = order === 'desc' ? 1 : -1
    setRows([...sortedRows.sort((a, b) => {
      updateOrder();
      return a[value] > b[value] ? returnValue * -1 : returnValue
    })
    ])
  }

  const updateOrder = () => {
    const updatedOrder = order === 'asc' ? 'desc' : 'asc'
    setOrder(updatedOrder)
  }

  useEffect(() => {
    if (sortKey) {
      sort(sortKey, order);
    }
    const range = calculateRange(sortedRows, rowsPerPage);
    setTableRange([...range]);
    const slice = sliceData(sortedRows, page, rowsPerPage);
    setSlice([...slice]);
  }, [ setTableRange, page, setSlice, sortKey]);

  return { slice, range: tableRange };
};

export default useTable;