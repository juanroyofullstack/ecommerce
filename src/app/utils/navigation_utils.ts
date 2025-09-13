
export function updateSearchParams(params: URLSearchParams, filters: Record<string, string>) {
  params.set("sortBy", filters.sortby);
  params.set("order", filters.order);

  return params;
}
