"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    records;
    page;
    total_records;
    limit;
    lastPage;
    nextPage;
    prevPage;
    constructor(paginationResult) {
        this.records = paginationResult.records;
        this.limit = paginationResult.limit;
        this.total_records = paginationResult.total;
        this.setNextPage();
        this.setPrevPage();
        this.setLastPage();
    }
    setPrevPage() {
        this.prevPage = Number(this.page - 1 < 1 ? null : this.page - 1);
    }
    setNextPage() {
        this.nextPage = Number(this.page + 1 > this.lastPage ? null : Number(this.page) + 1);
    }
    setLastPage() {
        this.lastPage = Math.ceil(this.total_records / this.limit);
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map