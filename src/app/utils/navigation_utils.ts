
export function updateSearchParams(params: URLSearchParams, filters: Record<string, string>) {
  params.set("sortBy", filters.sortBy);
  params.set("order", filters.order);

  return params;
}
