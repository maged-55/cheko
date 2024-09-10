import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchMenuItems } from "../api/menuApi";
import MapBox from "../components/mapbox/mapbox";

function MapPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const categories =
    searchParams.get("category")?.split(",").filter(Boolean) || [];

  const { data, isLoading } = useQuery(
    ["menuItems", searchTerm, categories],
    () => fetchMenuItems(searchTerm, categories),
    {
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <MapBox restaurants={data.items} />
    </div>
  );
}

export default MapPage;
