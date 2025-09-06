import DetailsTable from "../../../../common/DetailsTable";

const DelegateDetails = ({ data }) => {
  const rows = data.delegate;

  const columns = [
    {
      header: "#",
      key: "index",
      render: (row, index) => index + 1,
    },
    {
      header: "اسم الدواء",
      key: "name",
      render: (row) => row.name || "jhjgy",
    },
    {
      header: "الكمية",
      key: "quantity",
      render: (row) => row.quantity || "",
    },
    {
      header: "السعر",
      key: "price",
      render: (row) => row.price || "",
    },
    // {
    //   header: "نسبة الخصم",
    //   key: "discount",
    //   render: (row) => row.discount || "",
    // },
    {
      header: "المجموع",
      key: "total",
      render: (row) => row.total || "",
    },
  ];

  return <DetailsTable data={rows} columns={columns} />;
};

export default DelegateDetails;
