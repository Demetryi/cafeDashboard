import cookies from 'js-cookie'
import {IUser} from '_hooks/useAppContext/types';

export const getUserFromCookie = (): IUser => {
  const cookie = cookies.get('auth')
  if (!cookie) {
    return
  }
  return JSON.parse(cookie)
}

export const setUserCookie = (user: IUser): void => {
  cookies.set('auth', user, {
    expires: 7,
  })
}

export const removeUserCookie = (): void => cookies.remove('auth')