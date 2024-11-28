export const sort = (sortBy: string, order: 'ASC' | 'DESC' = 'ASC') => {
    return { [sortBy]: order };
  };
