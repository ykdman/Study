export async function loaderParams({ params }) {
  const { id } = params;
  return { id };
}
