export const mockUser = {
  displayName: 'string',
  email: 'string',
  emailVerified: true,
  isAnonymous: false,
  metadata: {
    creationTime: 'string',
    lastSignInTime: 'string',
  },
  phoneNumber: 'string',
  photoURL: 'string',
  providerData: [],
  providerId: 'string',
  uid: 'string',
};
export const mockUserMethods = {
  delete: jest.fn(),
  getIdToken: jest.fn(),
  getIdTokenResult: jest.fn(),
  linkWithCredential: jest.fn(),
  reauthenticateWithCredential: jest.fn(),
  reload: jest.fn(),
  sendEmailVerification: jest.fn(),
  verifyBeforeUpdateEmail: jest.fn(),
  toJSON: jest.fn(),
  unlink: jest.fn(),
  updateEmail: jest.fn(),
  updatePassword: jest.fn(),
  updatePhoneNumber: jest.fn(),
  updateProfile: jest.fn(),
};
export const mockUserInfo = {
  idToken: 'mockIdToken',
  accessToken: null,
  serverAuthCode: 'mockServerAuthCode',
  user: {
    email: 'mockEmail',
    id: 'mockId',
    givenName: 'mockGivenName',
    familyName: 'mockFamilyName',
    photo: 'mockPhotoUtl',
    name: 'mockFullName',
  },
};
export const mockAditionalUserInfo = {
  isNewUser: true,
  profile: '',
  providerId: 'mockID',
  username: 'mockName',
};
