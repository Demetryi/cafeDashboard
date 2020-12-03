import {unProtectedRoutes} from './index';

export const isProtectedRoute = (currentRoute: string): boolean => {
  return unProtectedRoutes.indexOf(currentRoute) === -1;
};

export default {isProtectedRoute};
