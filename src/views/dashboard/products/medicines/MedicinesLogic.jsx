import useMedicinesQuery from "../../../../hooks/products/medicines/useMedicinesQuery";
import useMedicinesMutation from "../../../../hooks/products/medicines/useMedicinesMutation";
import Medicines from "./Medicines";

const MedicinesLogic = () => {
  const {
    medicinesQuery,
    filter,
    fetchMedicinesFilter,
    setCurrentMedicinesId,
    currentMedicinesId,
    // getOnePharmacyQuery,
    medicinesResources,
  } = useMedicinesQuery();
  const {
    handleAddMedicine,
    handleEditMedicine,
    handleDeleteMedicine,
    handleImportMedicine,
  } = useMedicinesMutation();

  console.log(medicinesQuery.data);
  return (
    <Medicines
      data={medicinesQuery.data}
      filter={filter}
      fetchMedicinesFilter={fetchMedicinesFilter}
      setCurrentMedicinesId={setCurrentMedicinesId}
      currentMedicinesId={currentMedicinesId}
      // getOnePharmacyQuery={getOnePharmacyQuery}
      addMedicine={handleAddMedicine}
      editMedicine={handleEditMedicine}
      deleteMedicine={handleDeleteMedicine}
      importMedicine={handleImportMedicine}
      resourceData={medicinesResources.data}
      isLoadingResource={medicinesResources.isPending}
      isResourceError={medicinesResources.isError}
    />
  );
};

export default MedicinesLogic;
