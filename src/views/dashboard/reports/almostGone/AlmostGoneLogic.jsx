import useAlmostGoneQuery from "../../../../hooks/reports/almostGone/useAlmostGoneQuery";
import AlmostGone from "./AlmostGone";

const AlmostGoneLogic = () => {
  const { almostGoneQuery, fetchAlmostGoneFilter, filter } =
    useAlmostGoneQuery();
  return (
    <AlmostGone
      data={almostGoneQuery.data}
      fetchAlmostGoneFilter={fetchAlmostGoneFilter}
      filter={filter}
    />
  );
};

export default AlmostGoneLogic;
