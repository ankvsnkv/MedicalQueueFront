import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ElectronicQueueDataSource, ElectronicQueueItem } from './electronic-queue-datasource';

@Component({
  selector: 'app-electronic-queue',
  templateUrl: './electronic-queue.component.html',
  styleUrls: ['./electronic-queue.component.css']
})
export class ElectronicQueueComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ElectronicQueueItem>;
  dataSource: ElectronicQueueDataSource;

  /** Columns displayed in the table. Columns can be added, removed, or reordered. */
  displayedColumns = ['actions', 'name'];

  ngOnInit() {
    this.dataSource = new ElectronicQueueDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
