import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

  public tableList: any[] = [{
    name: "张大", sex: "man", age: "12"

  }, {
    name: "张二", sex: "man", age: "12"

  }, {
    name: "张三", sex: "man", age: "12"

  }, {
    name: "张四", sex: "man", age: "12"

  }, {
    name: "张五", sex: "man", age: "12"

  }, {
    name: "张六", sex: "man", age: "12"

  }];

  public tableheader: any = { name: "姓名", sex: "性别", age: "年龄" };
  constructor() { }

  ngOnInit(): void {
  }

}
