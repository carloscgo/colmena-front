export const appName = process.env.APP_NAME ?? 'Colmena Front';

export const styleIconNav = { marginLeft: '4px', marginRight: '4px' };

export const paginate = (items: number[], pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return items.slice(startIndex, startIndex + pageSize);
};
