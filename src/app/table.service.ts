import { Injectable, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  theadTemplate$ = new ReplaySubject<TemplateRef<any>>(1);
  tbodyTemplate$ = new ReplaySubject<TemplateRef<any>>(1);
  tfootTemplate$ = new ReplaySubject<TemplateRef<any>>(1);
  constructor() { }

  setTheadTemplate(template: TemplateRef<any>): void {
    this.theadTemplate$.next(template);
  }

  setBodyTemplate(template: TemplateRef<any>): void {
    this.tbodyTemplate$.next(template);
  }
}
