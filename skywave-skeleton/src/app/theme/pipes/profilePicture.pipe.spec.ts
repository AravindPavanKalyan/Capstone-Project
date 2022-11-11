import { ProfilePicturePipe } from './profilePicture.pipe';

describe('ProfilePicturePipe', () => {
  let profilePicturePipe: ProfilePicturePipe;

  // synchronous beforeEach
  beforeEach(() => {
    profilePicturePipe = new ProfilePicturePipe();
  });

  // testing whether an instance is created
  it('create an instance ProfilePicturePipe', () => {
    expect(profilePicturePipe).toBeTruthy();
  });

  // testing whether .jpg extension is added to profile pic or not
  it('should add ext(.jpg) to the profilepicture', () => {
    const profilePicture = profilePicturePipe.transform('profilePic');
    expect(profilePicture).toMatch('profilePic.jpg');
  });
});
