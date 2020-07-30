import { Component, OnInit, Input, ChangeDetectorRef, TemplateRef, Output, ViewChild, ElementRef, NgZone } from '@angular/core';
import { TableService } from '../table.service';
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { delay, filter, startWith, takeUntil } from 'rxjs/operators';
import { fromEvent, merge, Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableList: any[];
  @Input() tableHeader: any;
  @Input() tableTemplate: boolean = false;
  @Input() serial: boolean = true;
  @Input() zScroll: { x?: string | null; y?: string | null } = { x: null, y: null };
  @Input() verticalScrollBarWidth = 0;
  @Input() pageItemCount: number = 5;
  @Output() data: any[];
  @ViewChild('tableHeaderElement', { read: ElementRef }) tableHeaderElement!: ElementRef;
  @ViewChild('tableBodyElement', { read: ElementRef }) tableBodyElement!: ElementRef;

  public scrollX: string;
  public scrollY: string;
  public tabletheadTemplate: TemplateRef<any> | null = null;
  public tablebodyTemplate: TemplateRef<any> | null = null;
  public contentTemplate: TemplateRef<any> | null = null;
  private destroy$ = new Subject<void>();
  public headerStyleMap = {};
  public bodyStyleMap = {};
  public currentPage: number = 1;
  constructor(
    private ztableService: TableService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private platform: Platform,
  ) { }

  ngOnInit(): void {
    const { theadTemplate$, tbodyTemplate$ } = this.ztableService;
    this.scrollX = (this.zScroll && this.zScroll.x) || null;
    this.scrollY = (this.zScroll && this.zScroll.y) || null;

    theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe(theadTemplate => {
      this.tabletheadTemplate = theadTemplate;
      this.cdr.markForCheck();
    });

    tbodyTemplate$.pipe(takeUntil(this.destroy$)).subscribe(bodyTemplate => {
      this.tablebodyTemplate = bodyTemplate;
      this.cdr.markForCheck();
    });


    this.headerStyleMap = {
      overflowX: 'hidden',
      overflowY: 'scroll',
    };
    this.bodyStyleMap = {
      overflowY: this.scrollY ? 'scroll' : null,
      overflowX: this.scrollX ? 'scroll' : null,
      maxHeight: this.scrollY,
      maxWidth: this.scrollX
    };
    this.goPage(this.currentPage);
  }

  ngAfterViewInit(): void {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        // TODO 如何定义的X轴偏移？
        const scrollEvent$ = fromEvent<MouseEvent>(this.tableBodyElement.nativeElement, 'scroll').pipe(takeUntil(this.destroy$));
        const scrollX$ = scrollEvent$.pipe(filter(() => !!this.scrollX));
        const scrollY$ = scrollEvent$.pipe(filter(() => !!this.scrollY));
        scrollY$.subscribe(() => (this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft));
      });
    }
  }

  goPage(even): void {
    this.currentPage = even;
    const tableLength = this.tableList.length;
    this.data = this.tableList.slice((this.currentPage - 1) * this.pageItemCount,
      tableLength > this.pageItemCount * this.currentPage ? this.pageItemCount * this.currentPage : tableLength);
  }
}
