import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { InformationPagesDataSource, InformationPagesItem } from './information-pages-datasource';

@Component({
  selector: 'app-information-pages',
  templateUrl: './information-pages.component.html',
  styleUrls: ['./information-pages.component.css']
})
export class InformationPagesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<InformationPagesItem>;
  dataSource: InformationPagesDataSource;

  /** Columns displayed in the table. Columns can be added, removed, or reordered. */
  displayedColumns = ['actions', 'name'];

  ngOnInit() {
    this.dataSource = new InformationPagesDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
