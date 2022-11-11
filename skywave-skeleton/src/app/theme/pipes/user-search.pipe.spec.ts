import { UserSearchPipe } from './user-search.pipe';

describe('UserSearchPipe', () => {
  let userSearchPipe: UserSearchPipe;
  let users: any[];

  // synchronous beforeEach
  beforeEach(() => {
    userSearchPipe = new UserSearchPipe();
    users = [
      {
        id: 1,
        name: 'Aravind',
        username: 'Steve',
        email: 'aravind123@gmail.com',
      },
      { id: 2, username: 'Thor', email: 'pavan456@gmail.com' },
      { id: 3, name: 'Kalyan', username: 'Hulk', email: 'kalyan789@gmail.com' },
    ];
  });

  // testing whether an instance is created
  it('create an instance for UserSearchPipe', () => {
    expect(userSearchPipe).toBeTruthy();
  });

  // testing userSearchPipe with providing name
  it('should return array when name of user is given', () => {
    const searched = userSearchPipe.transform(users, 'Aravind');
    console.log('name filtered', searched);
    expect(searched[0].username).toBe('Steve');
  });

  // testing userSearchPipe with providing username without name
  it('should return array when username of user is given with no name', () => {
    const searched = userSearchPipe.transform(users, 'Thor');
    console.log('username filtered', searched);
    expect(searched[0].email).toBe('pavan456@gmail.com');
  });

  // testing userSearchPipe when mismatch username or name is provided
  it('should return empty array if mismatch name or username is given', () => {
    const searched = userSearchPipe.transform(users, 'Iron man');
    console.log('searched negative', searched);
    expect(searched.length).toBe(0);
  });
});
