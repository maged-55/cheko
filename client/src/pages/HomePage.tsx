import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton, message } from "antd";
import { useQuery } from "react-query";
import CategoryItems from "../components/category-items/category-items";
import Cards from "../components/cards/cards";
import { fetchMenuItems } from "../api/menuApi";

function HomePage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const categories =
    searchParams.get("category")?.split(",").filter(Boolean) || [];

  const { data, isLoading} = useQuery(
    ["menuItems", searchTerm, categories],
    () => fetchMenuItems(searchTerm, categories),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
    }
  );

  if (isLoading) {
    return <Skeleton active />;
  }
  return (
    <>
      <CategoryItems categoryCounts={data?.categoryCounts || {}} />
      <Cards items={data?.items || []} />
    </>
  );
}

export default HomePage;
