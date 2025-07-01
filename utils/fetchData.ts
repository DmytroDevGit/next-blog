export async function fetchData(url: string) {
  const data = await fetch(`${process.env.API_ENDPOINT}/${url}`);
  const dataObj = await data.json();
  return dataObj;
}
