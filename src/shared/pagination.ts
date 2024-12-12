import { Repository } from 'typeorm';

export const paginate = async <T>(
  repo: Repository<T>,
  page: number,
  limit: number,
  query?: any,
) => {
  const skip = (page - 1) * limit;
  const [data, total] = await repo.findAndCount({
    where: query,
    skip,
    take: limit,
  });

  return {
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};
