import { PlantToString } from "./PlantToString";
import CustomImage from "../components/CustomImage";

export const ColumnsTemplate = [
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
  {
    id: "danish_name",
    Header: "Dansk navn",
    accessor: (d) => {
      return PlantToString(d, "danish_name");
    },
  },
  {
    Header: "Frugt",
    id: "fruit",
    accessor: (d) => {
      return PlantToString(d, "fruit");
    },
  },
  {
    id: "salt_tolerance",
    Header: "Salt tolerance",
    accessor: (d) => {
      return PlantToString(d, "salt_tolerance");
    },
  },
  {
    id: "flowers",
    Header: "Blomster",
    accessor: (d) => {
      return PlantToString(d, "flowers");
    },
  },
  {
    id: "foliage",
    Header: "Foliage",
    accessor: (d) => {
      return PlantToString(d, "foliage");
    },
  },
  {
    id: "soil_types",
    Header: "Jord typer",
    accessor: (d) => {
      return PlantToString(d, "soil_types");
    },
  },
  {
    id: "poisonous",
    Header: "Giftig",
    accessor: (d) => {
      return PlantToString(d, "poisonous");
    },
  },
  {
    id: "site",
    Header: "Sollys",
    accessor: (d) => {
      return PlantToString(d, "site");
    },
  },
  {
    id: "wind_tolerance",
    Header: "Vind tolerance",
    accessor: (d) => {
      return PlantToString(d, "wind_tolerance");
    },
  },
  {
    id: "plant_type",
    Header: "Type",
    accessor: (d) => {
      return PlantToString(d, "plant_type");
    },
  },
  {
    id: "ph_tolerance",
    Header: "ph tolerance",
    accessor: (d) => {
      return PlantToString(d, "ph_tolerance");
    },
  },
  {
    id: "size_height",
    Header: "Højde",
    accessor: (d) => {
      return PlantToString(d, "size_height");
    },
  },
  {
    id: "size_spread",
    Header: "Spredning",
    accessor: (d) => {
      return PlantToString(d, "size_spread");
    },
  },
  {
    id: "root_system",
    Header: "Rødder",
    accessor: (d) => {
      return PlantToString(d, "root_system");
    },
  },
  {
    id: "water_prefferences",
    Header: "Vand",
    accessor: (d) => {
      return PlantToString(d, "water_prefferences");
    },
  },
];
