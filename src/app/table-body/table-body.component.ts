import { Component, OnInit, ViewChild, TemplateRef, Optional } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'tbody:not(.z-table-thead)',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {
  @ViewChild('contentTemplate', { static: true }) templateRef!: TemplateRef<any>;

  constructor(
    @Optional() private ztableService: TableService,
  ) { }

  ngOnInit(): void {
    // if (this.ztableService) {
    //   this.ztableService.setTheadTemplate(this.templateRef);
    // }
  }

}
