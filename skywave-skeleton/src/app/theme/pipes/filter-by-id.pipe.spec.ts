import { FilterByIdPipe } from './filter-by-id.pipe';

describe('FilterByIdPipe', () => {
  let filterPipe: FilterByIdPipe;
  let items: any;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterByIdPipe();
    items = [
      { id: 1, name: 'Aravind' },
      { id: 2, name: 'Pavan' },
      { id: 3, name: 'Kalyan' },
    ];
  });

  // testing whether an instance is created?
  it('create an instance for FilterByIdPipe', () => {
    expect(filterPipe).toBeTruthy();
  });

  // testing the negative case of FilterByIdPipe
  it('should return empty array if invalid item id is given', () => {
    const filtered = filterPipe.transform(items, 4);
    expect(filtered).toBeUndefined();
  });

  // testing the positive case of FilterByIdPipe
  it('should filter correctly and bring the required id', () => {
    const filtered = filterPipe.transform(items, 2);
    expect([filtered].length).toEqual(1);
  });
});
