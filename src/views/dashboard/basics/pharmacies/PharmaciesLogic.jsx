import usePharmaciesQuery from "../../../../hooks/basics/pharmacies/usePharmaciesQuery";
import usePharmaciesMutation from "../../../../hooks/basics/pharmacies/usePharmaciesMutation";
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
  const { handleAddPharmacy, handleEditPharmacy, handleDeletePharmacy } =
    usePharmaciesMutation();

  return (
    <Pharmacies
      data={pharmaciesQuery.data}
      filter={filter}
      fetchPharmaciesFilter={fetchPharmaciesFilter}
      setCurrentPharmacyId={setCurrentPharmacyId}
      currentPharmacyId={currentPharmacyId}
      getOnePharmacyQuery={getOnePharmacyQuery}
      addPharmacy={handleAddPharmacy}
      editPharmacy={handleEditPharmacy}
      deletePharmacy={handleDeletePharmacy}
    />
  );
};

export default PharmaciesLogic;
