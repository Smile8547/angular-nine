import { Component, OnInit, ViewChild, TemplateRef, Optional } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'thead:not(.z-table-thead)',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {
  @ViewChild('headeTemplate', { static: true }) templateRef!: TemplateRef<any>;
  constructor(
    @Optional() private ztableService: TableService,
  ) { }

  ngOnInit(): void {
    if (this.ztableService) {
      this.ztableService.setTheadTemplate(this.templateRef);
    }
  }

}
