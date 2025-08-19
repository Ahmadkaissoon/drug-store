import { GrHome } from "react-icons/gr";
import { GoDatabase } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const TABS = [
  {
    name: "home",
    show_name: "الرئيسية",
    icon: <GrHome />,
  },
  {
    name: "basics",
    show_name: "أساسيات",
    icon: <GoDatabase />,
    subTabs: [
      {
        name: "cities",
        show_name: "المدن",
      },
      {
        name: "labs",
        show_name: "المعامل",
      },
      {
        name: "pharmacies",
        show_name: "الصيدليات",
      },
      {
        name: "users",
        show_name: "المستخدمين",
      },
    ],
  },
  {
    name: "products",
    show_name: "المواد",
    icon: <AiOutlineProduct />,
    subTabs: [
      {
        name: "medicines",
        show_name: "الأدوية",
      },
    ],
  },
  
  {
    name: "orders",
    show_name: "الطلبيات",
    icon: <MdOutlineAddShoppingCart />,
  },
  {
    name: "reports",
    show_name: "تقارير",
    icon: <TbReportAnalytics />,
    subTabs: [
      {
        name: "total-import-report",
        show_name: "تقرير الأكثر استيراد -",
      },
      {
        name: "most-request-report",
        show_name: "تقرير الأكثر طلب -",
      },
      {
        name: "total-sales-report",
        show_name: "تقرير مبيعات -",
      },
      {
        name: "expired-medicines",
        show_name: "أدوية شارفت على الإنتهاء -",
      },
      {
        name: "almost-gone-medicines",
        show_name: "أدوية شارفت على النفاد -",
      },
      {
        name: "delegates",
        show_name: "المندوبين -",
      },
    ],
  },
];

export default TABS;
