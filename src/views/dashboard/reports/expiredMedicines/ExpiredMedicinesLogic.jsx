import useExpiredMedicinesQuery from "../../../../hooks/reports/expiredMedicines/useExpiredMedicinesQuery";
import ExpiredMedicines from "./ExpiredMedicines";

const ExpiredMedicinesLogic = () => {
  const { expiredMedicinesQuery, fetchExpiredMedicinesFilter, filter } =
    useExpiredMedicinesQuery();
  return (
    <ExpiredMedicines
      data={expiredMedicinesQuery.data}
      fetchExpiredMedicinesFilter={fetchExpiredMedicinesFilter}
      filter={filter}
    />
  );
};

export default ExpiredMedicinesLogic;
