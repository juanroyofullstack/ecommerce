import React from "react";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { setPage } from "../lib/features/searchSlice";
import { PRODUCTS_PAGE_LIMIT } from "../api/constants";
import type { RootState } from "../store";

const CustomPagination = () => {
  const totalProducts = useSelector((state: RootState) => state.products.data.total);
  const page = useSelector((state: RootState) => state.search.page);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PAGE_LIMIT);

  const dispatch = useDispatch();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", value.toString());

    router.push(`${pathname}?${params.toString()}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-8 mb-4">
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default CustomPagination;
