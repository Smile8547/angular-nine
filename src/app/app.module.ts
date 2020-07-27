import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    TableFootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
