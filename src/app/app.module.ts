import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { CheckboxDirDirective } from './checkbox-dir.directive';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFootComponent } from './table-foot/table-foot.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TdFixedDirective } from './td-fixed.directive';


const appRoutes: Routes = [
  { path: 'table', component: TableDemoComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    TableComponent,
    TableDemoComponent,
    CheckboxDirDirective,
    TableHeaderComponent,
    TableBodyComponent,
    TableFootComponent,
    TablePaginationComponent,
    TdFixedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
