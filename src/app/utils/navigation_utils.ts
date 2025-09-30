import { PRODUCTS_PAGE_LIMIT } from "../api/constants";

export function updateSearchParams(params: URLSearchParams, filters: Record<string, string>) {
  params.set("sortBy", filters.sortby);
  params.set("order", filters.order);

  return params;
}

export function mapFiltersToApiParams(filters: Record<string, any>) {
  const apiParams: Record<string, string> = {};

  if (filters.order) {
    apiParams["sortBy"] = filters.sortBy;
    apiParams["order"] = filters.order;
  }
  if (filters.page) {
    apiParams["skip"] = filters.page && filters.page > 1 ?
      (filters.page - 1) * PRODUCTS_PAGE_LIMIT + "": "0";
    apiParams["limit"] = PRODUCTS_PAGE_LIMIT.toString();
  }

  return new URLSearchParams(apiParams);
}
