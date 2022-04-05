import React, { useMemo } from "react";
import { useTable } from "react-table";
import { ColumnsTemplate } from "./ColumnsTemplate";
import { acer_dividii } from "../testData";
import { PlantToString } from "./PlantToString";

function PlantTable() {
  const loadData = () => {
    //Creating temp data
    let loadedData = [];
    for (var i = 0; i < 10; i++) {
      loadedData.push(acer_dividii);
    }
    return loadedData;
  };
  const lData = loadData();
  const columns = useMemo(() => ColumnsTemplate, []);
  const data = useMemo(() => lData, []);

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
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
    </>
  );
}

/*
 */
export default PlantTable;
