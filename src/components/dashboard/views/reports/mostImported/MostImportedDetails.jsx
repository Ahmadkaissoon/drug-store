import DetailsTable from "../../../../common/DetailsTable";

const MostImportedDetails = ({ data }) => {
  const rows = data.medicines;

  const columns = [
    {
      header: "#",
      key: "index",
      render: (row, index) => index + 1
    },
    {
      header: "اسم الدواء",
      key: "name",
      render: (row) => row.name || row.drug_name || "jhjgy"
    },
    {
      header: "الكمية",
      key: "quantity",
      render: (row) => row.quantity || ""
    }
  ];

  return (
    <DetailsTable 
      data={rows}
      columns={columns}
    />
  );
};

export default MostImportedDetails;