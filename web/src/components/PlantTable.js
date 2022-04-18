import React, { useMemo, useEffect, useReducer } from "react";
import { useTable } from "react-table";
import { ColumnsTemplate } from "../data/ColumnsTemplate";
import "../css/PlantTable.css";
import { getActiveHeaders } from "../data/QueryData";

function PlantTable({ _hiddenColumns, activeP, tData }) {
  const columns = useMemo(() => ColumnsTemplate, []);
  const data = useMemo(() => tData, [tData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns,
  } = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: getActiveHeaders(),
    },
  });

  useEffect(() => {
    setHiddenColumns(getActiveHeaders());
  }, [_hiddenColumns]);

  return (
    <>
      <div></div>
      <div className="tableDiv">
        <table
          className="--table-container"
          cellSpacing="0"
          cellPadding="0"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => {
                    activeP(row.original);
                    console.log(JSON.stringify(row.original));
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PlantTable;
