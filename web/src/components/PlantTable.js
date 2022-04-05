import React, { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { ColumnsTemplate } from "./ColumnsTemplate";
import { acer_dividii } from "../testData";
import { PlantToString } from "./PlantToString";
import "../css/PlantTable.css";

function PlantTable(props) {
  const columns = useMemo(() => ColumnsTemplate, []);
  const data = useMemo(() => props.tData, [props.tData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
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
                <tr {...row.getRowProps()}>
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

/*
 */
export default PlantTable;
