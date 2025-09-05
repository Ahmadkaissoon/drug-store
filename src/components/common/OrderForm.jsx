import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import ReusableTable from "../common/ReusableTable";
import writtenNumber from "written-number";
import { ShoppingCart } from "lucide-react";
import { FaPrint } from "react-icons/fa6";

const OrderForm = ({ data, edit, id }) => {
  console.log(data);
  //دالة التفقيط
  writtenNumber.defaults.lang = "ar";
  const numToSYP = (n) => `${writtenNumber(n)}  ليرة سورية فقط لا غير`;

  const [orderData, setOrderData] = useState({
    date: "",
    pharmacy: "",
    phone: "",
    representative: "",
    city: "",
    address: "",
    notes: "",
  });
  // Order items state (each row in the table)
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      medicineName: "",
      quantity: "",
      price: "",
      profitPercentage: "",
      total: "",
    },
  ]);

  // Table columns configuration for ReusableTable
  const columns = [
    {
      id: "medicineName",
      header: "اسم الدواء",
      cell: (row) => (
        <Input
          type="text"
          placeholder="اسم الدواء"
          value={data ? data.medicineName : row.medicineName}
          readOnly={!edit && data}
          onChange={(e) =>
            handleItemChange(row.id, "medicineName", e.target.value)
          }
          className="w-full bg-white"
        />
      ),
    },
    {
      id: "quantity",
      header: "الكمية",
      cell: (row) => (
        <Input
          type="number"
          placeholder="الكمية"
          value={data ? data.quantity : row.quantity}
          readOnly={!edit && data}
          onChange={(e) => handleItemChange(row.id, "quantity", e.target.value)}
          className="w-full bg-white"
        />
      ),
    },
    {
      id: "price",
      header: "السعر",
      cell: (row) => (
        <Input
          type="number"
          placeholder="السعر"
          value={data ? data.price : row.price}
          readOnly={!edit && data}
          onChange={(e) => handleItemChange(row.id, "price", e.target.value)}
          className="w-full bg-white"
        />
      ),
    },
    {
      id: "discount",
      header: "نسبة الخصم",
      cell: (row) => (
        <Input
          type="number"
          placeholder="نسبة الخصم"
          value={data ? data.discount : row.discount}
          readOnly={!edit && data}
          onChange={(e) => handleItemChange(row.id, "discount", e.target.value)}
          className="w-full bg-white"
        />
      ),
    },
    {
      id: "total",
      header: "المجموع",
      cell: (row) => (
        <Input
          type="number"
          placeholder="المجموع"
          value={row.total}
          readOnly
          className="w-full bg-white "
        />
      ),
    },
  ];

  // Table actions configuration for ReusableTable
  const actions = [
    {
      title: "حذف",
      color: "error_color",
      onClickFun: (row) => {
        const index = orderItems.findIndex((item) => item.id === row.id);
        if (index !== -1) {
          removeOrderItem(index);
        }
      },
    },
  ];

  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount from order items
  const calculateTotalAmount = (items = orderItems) => {
    const total = items.reduce((sum, item) => {
      return sum + (parseFloat(item.total) || 0);
    }, 0);
    setTotalAmount(total);
  };

  // Handle input changes for order details
  const handleInputChange = (field, value) => {
    setOrderData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle input changes for order items
  const handleItemChange = (id, field, value) => {
    const newItems = [...orderItems];
    const itemIndex = newItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) return;

    newItems[itemIndex][field] = value;

    // Recalculate total for this row when price or quantity changes
    if (field === "quantity" || field === "price") {
      const discount = parseFloat(newItems[itemIndex].discount) || 0;
      console.log(discount);
      const quantity = parseFloat(newItems[itemIndex].quantity) || 0;
      const price = parseFloat(newItems[itemIndex].price) || 0;
      newItems[itemIndex].total = (
        quantity * price -
        (quantity * price * discount) / 100
      ).toFixed(2);
    }

    setOrderItems(newItems);
    calculateTotalAmount(newItems);
  };

  // Add new order item
  const addOrderItem = () => {
    const newItem = {
      id: orderItems.length > 0 ? orderItems[orderItems.length - 1].id + 1 : 1,
      medicineName: "",
      quantity: "",
      price: "",
      discount: "",
      total: "",
    };
    const newItems = [...orderItems, newItem];
    setOrderItems(newItems);
    calculateTotalAmount(newItems);
  };

  // Remove order item
  const removeOrderItem = (index) => {
    if (orderItems.length > 1) {
      const newItems = orderItems.filter((_, i) => i !== index);
      setOrderItems(newItems);
      calculateTotalAmount(newItems);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", orderData);
    console.log("Order Items:", orderItems);
    console.log("Total Amount:", totalAmount);
  };

  return (
    <div className=" min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="mb-8 w-full max-w-5xl flex items-center justify-between">
        {data && !edit && (
          <div className="bg-error-color w-fit flex items-center gap-3 p-2 text-white rounded-lg">
            <FaPrint /> PDF تحميل{" "}
          </div>
        )}
        <div className="flex-1 flex justify-end">
          <h1 className="p-3 text-4xl font-bold text-main-color text-right mb-2 flex items-center justify-end">
            {data && !edit
              ? `${id}  تفاصيل الطلبية رقم`
              : data && edit
              ? `${id} تعديل الطلبية`
              : `إنشاء طلبية جديدة`}
          </h1>
        </div>
      </div>
      <div className="w-full h-1 bg-accept-color mx-auto"></div>

      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-5xl mb-10"
        autoComplete="off"
      >
        {/* Order Details Section */}
        <div className="rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* City */}
              <div className="space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  المدينة
                </label>
                <div className="relative">
                  <select
                    disabled={!edit && data}
                    value={data ? data.city : orderData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full h-10 bg-white text-right rounded-lg border-2 border-main-color"
                  >
                    <option value="">أدخل اسم المدينة</option>
                    {/* Add your city options here */}
                    <option value="دمشق">دمشق</option>
                    <option value="حلب">حلب</option>
                    <option value="حمص">حمص</option>
                    <option value="حماة">حماة</option>
                    <option value="اللاذقية">اللاذقية</option>
                    <option value="طرطوس">طرطوس</option>
                    <option value="دير الزور">دير الزور</option>
                    <option value="الرقة">الرقة</option>
                    <option value="درعا">درعا</option>
                    <option value="السويداء">السويداء</option>
                    <option value="إدلب">إدلب</option>
                    <option value="القنيطرة">القنيطرة</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  العنوان
                </label>
                <input
                  type="text"
                  placeholder="أدخل العنوان"
                  disabled={!edit && data}
                  value={data ? data.address : orderData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full h-10 bg-white text-right rounded-lg border-2 border-main-color"
                />
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  ملاحظات
                </label>
                <textarea
                  placeholder="نص ملاحظات"
                  disabled={!edit && data}
                  value={data ? data.notes : orderData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="w-full h-20 bg-white text-right rounded-lg border-2 border-main-color"
                />
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              {/* Date */}
              <div className="space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  التاريخ
                </label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    disabled={!edit && data}
                    value={data ? data.date : orderData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="w-full h-10 bg-white text-right rounded-lg border-2 border-main-color"
                  />
                </div>
              </div>

              {/* Pharmacy */}
              <div className="space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  الصيدلية
                </label>
                <div className="relative">
                  <select
                    value={data ? data.pharmacy : orderData.pharmacy}
                    disabled={!edit && data}
                    onChange={(e) =>
                      handleInputChange("pharmacy", e.target.value)
                    }
                    className="w-full h-10 bg-white text-right rounded-lg border-2 border-main-color"
                  >
                    <option value="" className="text-gray">
                      أدخل اسم الصيدلية
                    </option>
                    <option value="صيدلية الشفاء">صيدلية الشفاء</option>
                    <option value="صيدلية ابن سينا">صيدلية ابن سينا</option>
                    <option value="صيدلية الربيع">صيدلية الربيع</option>
                  </select>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  هاتف
                </label>
                <input
                  type="tel"
                  placeholder="أدخل رقم الهاتف"
                  disabled={!edit && data}
                  value={data ? data.phone : orderData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full h-10 bg-white text-right rounded-lg border-2 border-main-color"
                />
              </div>
              {/* Representative - Full width */}
              <div className="mt-6 space-y-2">
                <label className="block text-main-color font-semibold text-right">
                  المندوب
                </label>
                <div className="relative">
                  <select
                    value={
                      data ? data.representative : orderData.representative
                    }
                    disabled={!edit && data}
                    onChange={(e) =>
                      handleInputChange("representative", e.target.value)
                    }
                    className="w-full h-10 bg-white text-right rounded-lg border-2 border-main-color"
                  >
                    <option value="">اختر المندوب</option>
                    <option value="أحمد">أحمد</option>
                    <option value="محمد">محمد</option>
                    <option value="سارة">سارة</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Summary Section */}
        <div className="rounded-lg p-6  flex flex-col">
          <h3 className="text-2xl font-bold text-main-color mb-8 text-right">
            : المجموع
          </h3>
          <div className="flex items-center justify-end gap-3">
            <div className="text-lg text-main-color text-center">
              {numToSYP(totalAmount)}
            </div>
            <div className="text-3xl font-bold text-accept-color mb-2 text-right">
              {data
                ? data.total
                : totalAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
            </div>
          </div>
        </div>

        {/* Order Items Table */}

        <div className="p-6 flex items-center justify-between gap-6">
          {(!data || (edit && data)) && (
            <Button
              onClickFun={addOrderItem}
              color="hover_color"
              styleType="table"
              Icon={<ShoppingCart className="w-5 h-5" />}
              className="px-6 py-3"
            />
          )}
          <ReusableTable
            data={orderItems}
            columns={columns}
            actions={(!data || (edit && data)) && actions}
            dir="rtl"
            actionsHeader="الإجراءات"
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          {(!data || (edit && data)) && (
            <Button
              title="إنشاء الطلبية"
              onClickFun={handleSubmit}
              color="accept_color"
              styleType="form"
              className="px-8 py-4 text-xl mb-10"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
