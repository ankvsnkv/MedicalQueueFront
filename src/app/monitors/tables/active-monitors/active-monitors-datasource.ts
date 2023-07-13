import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ActiveMonitorsItem {
  monitor: string;
  description: string;
  scheme_of_work: string;
  status: string;
  last_appeal: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ActiveMonitorsItem[] = [
  {monitor: 'Монитор 01', description: 'Расписание', scheme_of_work: 'Схема 01', status: 'Зарегистрирован', last_appeal: '07.07.2023 22:00:00'},
];

/**
 * Data source for the ActiveMonitors view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ActiveMonitorsDataSource extends DataSource<ActiveMonitorsItem> {
  data: ActiveMonitorsItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ActiveMonitorsItem[]> {
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
  private getPagedData(data: ActiveMonitorsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ActiveMonitorsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'monitor': return compare(a.monitor, b.monitor, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'scheme_of_work': return compare(a.scheme_of_work, b.scheme_of_work, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'last_appeal': return compare(a.last_appeal, b.last_appeal, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
