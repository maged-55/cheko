import React from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "antd";
import { useQuery } from "react-query";
import CategoryItems from "../components/category-items/category-items";
import Cards from "../components/cards/cards";
import { fetchMenuItems } from "../api/menuApi";

function HomePage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const categories =
    searchParams.get("category")?.split(",").filter(Boolean) || [];

  const { data, isLoading, isFetching } = useQuery(
    ["menuItems", searchTerm, categories],
    () => fetchMenuItems(searchTerm, categories),
    {
      refetchOnWindowFocus: true, 
    }
  );

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <>
      {isFetching && <div>Refreshing...</div>}
      <CategoryItems categoryCounts={data?.categoryCounts || {}} />
      <Cards items={data?.items || []} />
    </>
  );
}

export default HomePage;