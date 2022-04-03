import React, { useMemo } from "react";
import { useTable } from "react-table";
import { ColumnsTemplate } from "./ColumnsTemplate";
import { acer_dividii } from "../testData";

function PlantTable() {
  //TEMPORARY
  const mockData = [acer_dividii];
  for (var i = 0; i < 10; i++) {
    mockData.push(acer_dividii);
    console.log(i);
  }
  //-------------
  console.log("test1: " + mockData[0].botanical_name);
  const columns = useMemo(() => ColumnsTemplate, []);
  const data = useMemo(() => mockData, []);

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

  console.log("data: " + data);
  //console.log("columns: " + columns);

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
