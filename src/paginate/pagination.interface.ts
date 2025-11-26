export interface IPaginationResultInterface<PaginationEntity> {
  records: PaginationEntity[] | unknown[];
  total: number;
  limit: number;
  page: number;
  next?: number;
  previous?: number;
}
