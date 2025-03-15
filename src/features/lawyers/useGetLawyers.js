import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLawyers } from "./lawyersApi";
import paginationItem from "../../helpers/paginationItem";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function useGetLawyers() {
  const [searchparams] = useSearchParams();
  const currentPage = Number(searchparams.get("page")) || 1;
  const sortBy = searchparams.get("sortBy") || "name";
  const itemsPerPage = paginationItem() || 9;
  const from = Math.max(0, (currentPage - 1) * itemsPerPage);
  const to = from + itemsPerPage - 1;

  const { data: { lawyers, count } = {}, isLoading } = useQuery({
    queryKey: ["lawyers", currentPage, sortBy, itemsPerPage],
    queryFn: () => getLawyers({ from, to, sortBy }),
  });
  const queryclient = useQueryClient();
  const pageCount = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    if (currentPage > 1) {
      queryclient.prefetchQuery({
        queryKey: ["lawyers", currentPage - 1],
        queryFn: () =>
          getLawyers({
            from: Math.max(0, (currentPage - 2) * itemsPerPage),
            to: (currentPage - 1) * itemsPerPage - 1,
          }),
      });
    }
    if (currentPage < pageCount) {
      queryclient.prefetchQuery({
        queryKey: ["lawyers", currentPage + 1],
        queryFn: () =>
          getLawyers({
            from: Math.max(0, currentPage * itemsPerPage),
            to: (currentPage + 1) * itemsPerPage - 1,
          }),
      });
    }
  }, [currentPage, itemsPerPage, pageCount, queryclient]);

  return { lawyers, isLoading, count };
}

export default useGetLawyers;
