export const qString = (query) => {
  return `${query ? `?${query}` : ""}`;
};
