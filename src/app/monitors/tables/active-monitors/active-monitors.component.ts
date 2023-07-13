import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActiveMonitorsDataSource, ActiveMonitorsItem } from './active-monitors-datasource';

@Component({
  selector: 'app-active-monitors',
  templateUrl: './active-monitors.component.html',
  styleUrls: ['./active-monitors.component.css']
})
export class ActiveMonitorsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ActiveMonitorsItem>;
  dataSource: ActiveMonitorsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['actions', 'monitor', 'description', 'scheme_of_work','status', 'last_appeal'];
  
  ngOnInit() {
    this.dataSource = new ActiveMonitorsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
