export interface PaginateQuery {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'ASC' | 'DESC';
    searchQuery?: string;
    filter?: Record<string, any>;
}
