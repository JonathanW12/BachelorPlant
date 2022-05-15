import { PlantToString } from "./PlantToString";
import CustomImage from "../components/CustomImage";
import { returnFields } from "./QueryData";

export function getColumnsTemplate() {
  const columns = [
    {
      id: "pictures",
      Header: "Photo",
      accessor: (d) => {
        return d.pictures[0];
      },
      Cell: (props) => {
        const { value, cell } = props;
        return <CustomImage props={value} />;
      },
    },
    {
      id: "botanical_name",
      Header: "Botanisk navn",
      accessor: (d) => {
        return PlantToString(d, "botanical_name");
      },
      Cell: (props) => {
        const { value, cell } = props;
        return (
          <span className="longWordContainer">
            <p>{value}</p>
          </span>
        );
      },
    },
  ];

  Object.keys(returnFields).forEach((field) => {
    if (
      field === "description" ||
      field === "_id" ||
      field === "pictures" ||
      field === "botanical_name"
    ) {
      return;
    }
    columns.push({
      id: field,
      Header: returnFields[field].ref,
      accessor: (d) => {
        return PlantToString(d, field);
      },
    });
  });
  return columns;
}