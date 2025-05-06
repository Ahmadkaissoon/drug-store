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
        name: "pharmasies",
        show_name: "الصيدليات",
      },
    ],
  },
  {
    name: "products",
    show_name: "الأدوية",
    icon: <AiOutlineProduct />,
  },
  {
    name: "orders",
    show_name: "الطلبيات",
    icon: <MdOutlineAddShoppingCart />,
  },
  {
    name: "orders",
    show_name: "تقارير",
    icon: <TbReportAnalytics />,
    subTabs: [
      {
        name: "total-import-report",
        show_name: "تقرير الأكثر استيراد",
      },
      {
        name: "most-request-report",
        show_name: "تقرير الأكثر طلب",
      },
      {
        name: "total-sales-report",
        show_name: "تقرير مبيعات",
      },
      {
        name: "representative-report",
        show_name: "تقرير رصيد المندوب",
      },
    ],
  },
];

export default TABS;
