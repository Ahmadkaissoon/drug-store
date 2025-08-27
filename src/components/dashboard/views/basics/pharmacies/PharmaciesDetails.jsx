import PHARMACIES_DICT from "../../../../../data/dashboard/basics/pharmacies/PharmaciesDict";
import PharmaciesInfo from "./PharmaciesInfo";

const PharmaciesDetails = ({ data }) => {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-2 h-max md:min-w-[350px] overflow-y-auto md:gap-10 gap-4"
    >
      {Object.keys(PHARMACIES_DICT).map((item, index) => {
        return (
          <PharmaciesInfo
            key={index}
            itemkey={PHARMACIES_DICT[item]}
            itemvalue={data[item]}
          />
        );
      })}
    </div>
  );
};

export default PharmaciesDetails;
