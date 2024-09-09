import axios from "axios";

export const fetchMenuItems = async (
  searchTerm: string,
  categories: string[]
) => {
  const params = new URLSearchParams();
  if (searchTerm) params.append("searchTerm", searchTerm);
  if (categories.length) params.append("category", categories.join(","));

  const response = await axios.get("http://localhost:8080/api/menu-items", {
    params,
  });
  return response.data;
};
