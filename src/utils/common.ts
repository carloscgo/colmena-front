export const appName = process.env.APP_NAME ?? 'Colmena Front';

export const styleIconNav = { marginLeft: '4px', marginRight: '4px' };

export const paginate = (items: number[], pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return items.slice(startIndex, startIndex + pageSize);
};

export const generateUUID = () => {
  let d = new Date().getTime();

  const uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;

      d = Math.floor(d / 16);

      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

  return uuid;
};

