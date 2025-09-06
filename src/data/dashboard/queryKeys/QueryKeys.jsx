const QUERY_KEYS = {
  cities: {
    query: "cities",
  },
  labs: {
    query: "labs",
    resources: "labsResources",
  },
  pharmacies: {
    query: "pharmacies",
    oneQuery: "onePharmacy",
    resources: "pharmaciesResources",
  },
  users: {
    query: "users",
    oneQuery: "oneUser",
    resources: "usersResources",
  },
  // home : {
  //     query: "home"
  // }
  orders: {
    query: "orders",
    oneQuery: "oneOrder",
    resources: "ordersResources",
  },
  stocks: {
    query: "stock",
    // oneQuery: "stock",
    resources: "stocksResources",
    labs: "pharmaciesLabsResources",
  },
  catalog: {
    query: "catalog",
    resources: "catalogResources",
  },
  productMedicine: {
    query: "productMedicine",
  },
  almostGone: {
    query: "almostGone",
  },
  delegates: {
    query: "delegates",
  },
  expiredMedicines: {
    query: "expiredMedicines",
  },
  mostImported: {
    query: "mostImported",
    resources: "mostImportedResources",
  },
  mostRequest: {
    query: "mostRequest",
  },
  totalSales: {
    query: "totalSales",
    resources: "totalSalesResources",
  },
  notifications: {
    query: "notifications",
  },
};

export default QUERY_KEYS;
