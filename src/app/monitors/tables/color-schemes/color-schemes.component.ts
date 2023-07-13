import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ColorSchemesDataSource, ColorSchemesItem } from './color-schemes-datasource';

@Component({
  selector: 'app-color-schemes',
  templateUrl: './color-schemes.component.html',
  styleUrls: ['./color-schemes.component.css']
})
export class ColorSchemesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ColorSchemesItem>;
  dataSource: ColorSchemesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['actions', 'color_scheme_code', 'color_scheme'];

  ngOnInit() {
    this.dataSource = new ColorSchemesDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
