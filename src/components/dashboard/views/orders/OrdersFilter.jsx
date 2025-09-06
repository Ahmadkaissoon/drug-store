import DynamicForm from "../../../../components/common/DynamicForm";
import ORDER_FILTER_SCHEMA, {
  ORDER_FILTER_SCHEMA_INITIAL,
} from "../../../../data/dashboard/orders/OrderFilterSchema";

const OrdersFilter = ({ resourceData, filter, fetchOrderFilter }) => {
  const formFields = [
    {
      name: "name",
      label: "اسم الصيدلية :",
      type: "select",
      placeholder: "أدخل اسم الصيدلية ",
      options: resourceData,
    },
    {
      name: "date",
      label: "تاريخ الطلب: ",
      type: "date",
      placeholder: "أدخل تاريخ الطلب:",
    },
  ];

  const formButtons = [
    {
      label: "بحث",
      type: "submit",
    },
    {
      label: "إعادة تعيين",
      type: "reset",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={ORDER_FILTER_SCHEMA_INITIAL}
        schema={ORDER_FILTER_SCHEMA}
        onSubmit={(onSubmit) => {
          fetchOrderFilter(onSubmit);
        }}
      />
    </div>
  );
};

export default OrdersFilter;
