export const appName = process.env.APP_NAME ?? 'Colmena Front';

export const paginate = (items: number[], pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return items.slice(startIndex, startIndex + pageSize);
};

