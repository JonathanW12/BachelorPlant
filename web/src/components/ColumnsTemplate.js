import aesculus2 from "../aesculus_hippocastanum_2.jpg";

export const ColumnsTemplate = [
  {
    id: "picture",
    Header: "Photo",
    Cell: (props) => (
      <div className="imageHolder">
        <img src={aesculus2} width={60} alt="Billede utilgængeligt" />
      </div>
    ),
  },
  {
    id: "botanical_name",
    Header: "Botanisk navn",
    accessor: "botanical_name",
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
    accessor: "danish_name",
  },
  {
    Header: "Frugt",
    id: "fruit",
    accessor: (d) => {
      return d.fruit ? "Ja" : "Nej";
    },
  },
  {
    id: "salt_tolerance",
    Header: "Salt tolerance",
    accessor: (d) => {
      return d.salt_tolerance ? "Robust" : "Sensitiv";
    },
  },
  {
    id: "flowers",
    Header: "Blomster",
    accessor: (d) => {
      return d.flowers ? "Ja" : "Nej";
    },
  },
  {
    id: "foliage",
    Header: "Foliage",
    accessor: "foliage",
  },
  {
    id: "soil_types",
    Header: "Jord typer",
    accessor: "soil_types",
  },
  {
    id: "poisonous",
    Header: "Giftig",
    accessor: (d) => {
      return d.poisonous ? "Giftig" : "Ikke";
    },
  },
  {
    id: "site",
    Header: "Sollys",
    accessor: (d) => {
      return d.site + "/5";
    },
  },
  {
    id: "wind_tolerance",
    Header: "Vind tolerance",
    accessor: (d) => {
      return d.wind_tolerance + "/3";
    },
  },
  {
    id: "plant_type",
    Header: "Type",
    accessor: "plant_type",
  },
  {
    id: "ph_tolerance",
    Header: "ph tolerance",
    accessor: (d) => {
      return d.ph_tolerance.ph_min + " - " + d.ph_tolerance.ph_max + " ph";
    },
  },
  {
    id: "size_height",
    Header: "Højde",
    accessor: (d) => {
      return d.size_height.size_min + " - " + d.size_height.size_max + "m";
    },
  },
  {
    id: "size_spread",
    Header: "Spredning",
    accessor: (d) => {
      return d.size_spread.size_min + " - " + d.size_spread.size_max + "m";
    },
  },
  {
    id: "root_system",
    Header: "Rødder",
    accessor: "root_system",
  },
  {
    id: "water_prefferences",
    Header: "Vand",
    accessor: (d) => {
      return (
        d.water_prefferences.water_min +
        "/5 - " +
        d.water_prefferences.water_max +
        "/5"
      );
    },
  },
];
