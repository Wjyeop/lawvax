export const calculateMaxPageNum = (
  totalCount: number,
  itemsPerPage: number
) => {
  return Math.ceil(totalCount / itemsPerPage);
};
