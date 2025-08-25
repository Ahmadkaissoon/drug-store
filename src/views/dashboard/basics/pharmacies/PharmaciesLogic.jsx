import usePharmaciesQuery from "../../../../hooks/basics/pharmacies/usePharmaciesQuery";
import Pharmacies from "./Pharmacies";

const PharmaciesLogic = () => {
  const {
    pharmaciesQuery,
    filter,
    fetchPharmaciesFilter,
    setCurrentPharmacyId,
    getOnePharmacyQuery,
  } = usePharmaciesQuery();

  return (
    <Pharmacies
      data={pharmaciesQuery}
      filter={filter}
      fetchPharmaciesFilter={fetchPharmaciesFilter}
      setCurrentPharmacyId={setCurrentPharmacyId}
      currentPharmacyId={currentPharmacyId}
      getOnePharmacyQuery={getOnePharmacyQuery}
    />
  );
};

export default PharmaciesLogic;
