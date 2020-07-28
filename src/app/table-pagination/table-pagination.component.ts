import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {
  @Input() pageData: any[] = [];
  @Input() pageItemCount: number = 5;
  @Input() pageNumber: number = 1;
  @Output() onChangePage: EventEmitter<Number> = new EventEmitter;
  @Output() onChangePageItemCount: EventEmitter<Number> = new EventEmitter;

  public pageCounts: number;
  public resultCount: number;
  public currentPage: number;
  public pageLists: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.resultCount = this.pageData.length;
    this.pageCounts = Math.ceil(this.resultCount / this.pageItemCount);
    this.currentPage = this.pageNumber;
    this.pageLists = [];
    for (var i = 1; i <= this.pageCounts; i++) {
      this.pageLists.push(i);
    }
  }

  ngOnChanges(): void {
    this.pageCounts = Math.ceil(this.resultCount / this.pageItemCount);
    this.currentPage = this.pageNumber;
    this.pageLists = [];
    for (var i = 1; i <= this.pageCounts; i++) {
      this.pageLists.push(i);
    }
  }

  goPage(pageNum): void {
    if (pageNum > 0 && pageNum <= this.pageCounts) {
      this.pageNumber = pageNum;
      this.currentPage = this.pageNumber;
      this.onChangePage.emit(this.pageNumber);
    }
  }

  changePage(param): void {
    this.currentPage = Math.ceil(param);
    if (!isNaN(this.currentPage)) {
      if (this.currentPage > this.pageCounts) {
        this.pageNumber = this.pageCounts;
      } else if (this.currentPage < 1) {
        this.pageNumber = 1;
      } else {
        this.pageNumber = this.currentPage;
      }
      this.onChangePage.emit(this.pageNumber);
      this.currentPage = this.pageNumber;
    } else {
      this.currentPage = this.pageNumber;
    }
  }

}
