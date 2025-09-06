import { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";
import useHeaderNotifications from "../../../../hooks/notifications/useHeaderNotifications";

const HeaderNotification = () => {
  const { notifications } = useHeaderNotifications();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // مرجع للعنصر

  // بيانات إشعارات تجريبية
  const damyNotifications = [
    {
      id: 1,
      message: "تم إنشاء فاتورة جديدة لصيدلية الشفاء",
      date: "2025-09-02 10:30",
    },
    {
      id: 3,
      message: "انخفاض كمية دواء الباراسيتامول",
      date: "2025-09-01 17:45",
    },
    {
      id: 5,
      message: "تم إنشاء فاتورة جديدة لصيدلية الحياة",
      date: "2025-08-31 14:00",
    },
    {
      id: 5,
      message: "تم تعديل فاتورة لصيدلية الحياة",
      date: "2025-08-31 14:00",
    },
    {
      id: 6,
      message: "تنبيه: اقتراب انتهاء صلاحية بعض الأدوية",
      date: "2025-08-30 13:30",
    },
  ];

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer p-2 rounded-full bg-white shadow hover:bg-gray-100"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {damyNotifications.length > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {damyNotifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute  mt-2 w-80 bg-white shadow-lg rounded-2xl overflow-hidden z-50">
          <div className="p-3 flex justify-end border-b border-gray-200 font-semibold text-gray-700">
            الإشعارات
          </div>
          <div className="max-h-64 overflow-y-auto">
            {damyNotifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                لا توجد إشعارات
              </div>
            ) : (
              damyNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-3 hover:bg-gray-50 border-b border-gray-100 transition"
                >
                  <div className="text-sm flex justify-end text-gray-800">
                    {notif.message}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{notif.date}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNotification;
