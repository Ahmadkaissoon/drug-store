import useCatalogMutation from "../../../../hooks/products/catalog/useCatalogMutation";
import useCatalogQuery from "../../../../hooks/products/catalog/useCatalogQuery";
import Catalog from "./Catalog";

const CatalogLogic = () => {
  const { catalogsQuery, catalogsResources } = useCatalogQuery();
  const { handleAddCatalog, handleDeleteCatalog, handleEditCatalog } =
    useCatalogMutation();

  return (
    <Catalog
      data={catalogsQuery.data}
      isLoading={catalogsQuery.isPending}
      addCatalog={handleAddCatalog}
      editCatalog={handleEditCatalog}
      deleteCatalog={handleDeleteCatalog}
      resourceData={catalogsResources.data}
    />
  );
};

export default CatalogLogic;
