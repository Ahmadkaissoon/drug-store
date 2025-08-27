import usePharmaciesQuery from "../../../../hooks/basics/pharmacies/usePharmaciesQuery";
import Pharmacies from "./Pharmacies";

const PharmaciesLogic = () => {
  const {
    pharmaciesQuery,
    filter,
    fetchPharmaciesFilter,
    setCurrentPharmacyId,
    currentPharmacyId,
    getOnePharmacyQuery,
  } = usePharmaciesQuery();

  return (
    <Pharmacies
      data={pharmaciesQuery.data}
      filter={filter}
      fetchPharmaciesFilter={fetchPharmaciesFilter}
      setCurrentPharmacyId={setCurrentPharmacyId}
      currentPharmacyId={currentPharmacyId}
      getOnePharmacyQuery={getOnePharmacyQuery}
    />
  );
};

export default PharmaciesLogic;
