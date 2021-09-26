export class PageResult<T> {
  data: T[] = [];
  page: Number = 0;
  pageSize: Number = 10;
}