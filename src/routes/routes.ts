import { RouteProps } from 'react-router-dom';
import Home from '../containers/home';
const publicUrl = process.env.PUBLIC_URL;

export const routes: RouteProps[] = [
  { path: `${publicUrl}/home`, component: Home },
];