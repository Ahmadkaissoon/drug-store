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
    pharmaciesResources,
  } = usePharmaciesQuery();
  const { handleAddPharmacy, handleEditPharmacy, handleDeletePharmacy } =
    usePharmaciesMutation();
  // console.log(pharmaciesResources.data);
  console.log(getOnePharmacyQuery.data);
  return (
    <Pharmacies
      data={pharmaciesQuery.data}
      filter={filter}
      fetchPharmaciesFilter={fetchPharmaciesFilter}
      setCurrentPharmacyId={setCurrentPharmacyId}
      currentPharmacyId={currentPharmacyId}
      pharmacyDetails={getOnePharmacyQuery.data}
      addPharmacy={handleAddPharmacy}
      editPharmacy={handleEditPharmacy}
      deletePharmacy={handleDeletePharmacy}
      resourceData={pharmaciesResources.data}
      isLoadingResource={pharmaciesResources.isPending}
      isResourceError={pharmaciesResources.isError}
    />
  );
};

export default PharmaciesLogic;
