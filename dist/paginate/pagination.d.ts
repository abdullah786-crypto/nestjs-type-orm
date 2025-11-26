import { IPaginationResultInterface } from './pagination.interface';
export declare class Pagination<PaginationEntity> {
    records: PaginationEntity[];
    page: number;
    total_records: number;
    limit: number;
    lastPage: number;
    nextPage: number;
    prevPage: number;
    constructor(paginationResult: IPaginationResultInterface<PaginationEntity>);
    setPrevPage(): void;
    setNextPage(): void;
    setLastPage(): void;
}
