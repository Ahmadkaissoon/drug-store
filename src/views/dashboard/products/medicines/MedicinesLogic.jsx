import useMedicinesQuery from "../../../../hooks/products/medicines/useMedicinesQuery";
import Medicines from "./Medicines";

const MedicinesLogic = () => {
  const {
    medicinesQuery,
    filter,
    fetchMedicinesFilter,
    setCurrentMedicinesId,
    currentMedicinesId,
    getOnePharmacyQuery,
  } = useMedicinesQuery();
  return (
    <Medicines
      data={medicinesQuery}
      filter={filter}
      fetchMedicinesFilter={fetchMedicinesFilter}
      setCurrentMedicinesId={setCurrentMedicinesId}
      currentMedicinesId={currentMedicinesId}
      getOnePharmacyQuery={getOnePharmacyQuery}
    />
  );
};

export default MedicinesLogic;
