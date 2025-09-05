import { keepPreviousData, useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import getProductMedicine from "../../../api/products/product/getProductMedicine";

const useProductMedicineQuery = () => {
  const citiesQuery = useQuery({
    queryKey: [QUERY_KEYS.productMedicine.query],
    queryFn: ({ queryKey }) => getProductMedicine({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    citiesQuery,
  };
};

export default useProductMedicineQuery;
