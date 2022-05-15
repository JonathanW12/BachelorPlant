import React, { useMemo, useEffect, useReducer } from "react";
import { useTable } from "react-table";
import { getColumnsTemplate } from "../data/ColumnsTemplate";
import "../css/PlantTable.css";
import { getActiveHeaders } from "../data/QueryData";
import useWindowDimensions from "./WindowSize";
import CustomImage from "./CustomImage";
import { PlantToString } from "../data/PlantToString";
import { returnFields } from "../data/QueryData";

function PlantTable({ _hiddenColumns, _updateActivePlant, tData }) {
  const CTemplate = getColumnsTemplate();
  const columns = useMemo(() => CTemplate, []);
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

  const renderAttribute = (key, data) => {
    if (key === "description" || key === "_id" || key === "pictures") return;
    if (_hiddenColumns.includes(key)) return;
    return (
      <div className="keyValueText" key={key}>
        {" "}
        <span key={key} className="plantHeader">
          {returnFields[key].ref}:
        </span>
        <span className="plantValue">{PlantToString(data, key)}</span>
      </div>
    );
  };

  const SinglePlantView = (plant) => {
    return (
      <div
        onClick={() => _updateActivePlant(plant.plant._id)}
        className="ptInnerPlantShowcaseContainer"
      >
        <div className="ptFirstPictureContainer">
          <CustomImage props={plant.plant.pictures[0]} />
        </div>
        <h1 className="botanicalName">
          {PlantToString(plant.plant, "botanical_name")}
        </h1>
        <h1>{PlantToString(plant.plant, "danish_name")}</h1>
        <div className="plantAtt">
          {Object.keys(plant.plant).map((key, value) =>
            renderAttribute(key, plant.plant)
          )}
        </div>
      </div>
    );
  };

  const RenderPlants = (d) => {
    let plants = [];
    for (let index = 0; index < d.length; index++) {
      plants.push(
        <SinglePlantView key={d[index].botanical_name} plant={d[index]} />
      );
    }
    return plants;
  };

  if (useWindowDimensions().width > 600) {
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
                      _updateActivePlant(row.original._id);
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
  } else {
    return <div className="ptOuterDiv">{RenderPlants(tData)}</div>;
  }
}

export default PlantTable;
