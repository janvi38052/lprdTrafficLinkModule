export const search = (query: string, fields: string[]) => {
    const searchQuery = fields.map(field => `${field} LIKE '%${query}%'`).join(' OR ');
    return searchQuery;
  };
  