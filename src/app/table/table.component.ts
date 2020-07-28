import { Component, OnInit, Input, ChangeDetectorRef, TemplateRef, Output } from '@angular/core';
import { TableService } from '../table.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  @Output() data: any[];

  public scrollX: string;
  public scrollY: string;
  public tabletheadTemplate: TemplateRef<any> | null = null;
  public tablebodyTemplate: TemplateRef<any> | null = null;
  public contentTemplate: TemplateRef<any> | null = null;
  private destroy$ = new Subject<void>();
  constructor(
    private ztableService: TableService,
    private cdr: ChangeDetectorRef, ) { }

  ngOnInit(): void {
    const { theadTemplate$, tbodyTemplate$ } = this.ztableService;
    theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe(theadTemplate => {
      console.log(theadTemplate);
      this.tabletheadTemplate = theadTemplate;
      this.cdr.markForCheck();
    });

    tbodyTemplate$.pipe(takeUntil(this.destroy$)).subscribe(bodyTemplate => {
      console.log(bodyTemplate);
      this.tablebodyTemplate = bodyTemplate;
      this.cdr.markForCheck();
    });

    this.data = this.tableList.slice(0, 5);
    console.log(this.data);
  }

}
