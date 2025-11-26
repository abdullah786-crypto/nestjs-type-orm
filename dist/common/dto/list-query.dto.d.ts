export type sortOrder = 'ASC' | 'DESC';
export declare class ListQueryDto {
    pagesize?: number;
    page?: number;
    sort_column: string;
    sort_order: sortOrder;
}
