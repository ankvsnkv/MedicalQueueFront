import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SchemesOfWorkItem {
  scheme_of_work: string;
  description: string;
  request_timeout: string;
  pages: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SchemesOfWorkItem[] = [
  {scheme_of_work: 'Изменение расписания на 1.07.2023', description: 'Врач Иванов И.И. принимает в 204 каб. с 15:00', request_timeout: '10 минут', pages: '5 страниц'},
  {scheme_of_work: 'Изменение расписания на 2.07.2023', description: 'Врач Иванов И.И. принимает в 204 каб. с 15:00', request_timeout: '10 минут', pages: '5 страниц'},
  {scheme_of_work: 'Изменение расписания на 3.07.2023', description: 'Врач Иванов И.И. принимает в 204 каб. с 15:00', request_timeout: '10 минут', pages: '5 страниц'},
];

/**
 * Data source for the SchemesOfWork view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SchemesOfWorkDataSource extends DataSource<SchemesOfWorkItem> {
  data: SchemesOfWorkItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SchemesOfWorkItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SchemesOfWorkItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SchemesOfWorkItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'scheme_of_work': return compare(a.scheme_of_work, b.scheme_of_work, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'request_timeout': return compare(a.request_timeout, b.request_timeout, isAsc);
        case 'pages': return compare(a.pages, b.pages, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
