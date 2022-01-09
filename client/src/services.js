const SERVER_URL = "http://localhost:8080";
const ROWS_COUNT = 5;

export const getRows = async (page, filters) => {
  let filterQuery = "";
  if (filters) {
    const { filter, filterType, filterValue } = filters;
    filterQuery = `&filter=${filter}&filterType=${filterType}&filterValue=${filterValue}`;
  }
  try {
    const response = await fetch(
      `${SERVER_URL}/api/row?page=${page}&size=${ROWS_COUNT}${filterQuery}`,
      { method: "GET" }
    );
    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      console.log("response error", data.message);
      return null;
    }
  } catch (e) {
    console.log("get rows error", e.message);
    return null;
  }
};

export const filtersConfig = [
  {
    name: "Имя",
    filterName: "name",
    filterTypes: ["includes"],
    valueType: "text",
  },
  {
    name: "Расстояние",
    filterName: "distance",
    filterTypes: ["more", "less", "equal"],
    valueType: "number",
  },
  {
    name: "Колличество",
    filterName: "count",
    filterTypes: ["more", "less", "equal"],
    valueType: "number",
  },
];
