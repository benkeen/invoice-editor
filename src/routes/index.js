import MainLayout from '../layouts/MainLayout';
import Home from './Home';

export const createRoutes = (store) => ({
  path: '/',
  component: MainLayout,
  indexRoute: Home,
  childRoutes: []
});

export default createRoutes;
