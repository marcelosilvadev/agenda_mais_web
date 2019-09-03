import { RouteProps } from 'react-router-dom';
import Home from '../containers/home';
import Client from '../containers/client';
import Service from '../containers/service';
import Agenda from '../containers/agenda';

const publicUrl = process.env.PUBLIC_URL;

export const routes: RouteProps[] = [
  { path: `${publicUrl}/home`, component: Home },
  { path: `${publicUrl}/client`, component: Client },
  { path: `${publicUrl}/service`, component: Service },
  { path: `${publicUrl}/agenda`, component: Agenda },

];