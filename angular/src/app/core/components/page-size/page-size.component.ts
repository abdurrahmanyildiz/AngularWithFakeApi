import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {

  @Input() pageNum: number;
  @Input() pageSize: number;
  @Output() pageSizeChange = new EventEmitter();
  @Output() public refreshEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changePageSize(size: number) {
    this.pageSize=size;
    this.pageSizeChange.emit(size);
  }

  refresh() {
    this.refreshEmitter.emit();
  }

}
