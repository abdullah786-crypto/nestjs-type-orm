import { IPaginationResultInterface } from './pagination.interface';

export class Pagination<PaginationEntity> {
  public records: PaginationEntity[];
  public page: number;
  public total_records: number;
  public limit: number;
  public lastPage: number;
  public nextPage: number;
  public prevPage: number;

  constructor(paginationResult: IPaginationResultInterface<PaginationEntity>) {
    this.records = paginationResult.records as PaginationEntity[];
    this.limit = paginationResult.limit;
    this.total_records = paginationResult.total;
    this.setNextPage();
    this.setPrevPage();
    this.setLastPage();
  }

  setPrevPage(): void {
    this.prevPage = Number(this.page - 1 < 1 ? null : this.page - 1);
  }

  setNextPage(): void {
    this.nextPage = Number(
      this.page + 1 > this.lastPage ? null : Number(this.page) + 1,
    );
  }

  setLastPage(): void {
    this.lastPage = Math.ceil(this.total_records / this.limit);
  }
}
