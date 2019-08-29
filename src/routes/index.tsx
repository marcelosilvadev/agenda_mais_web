import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import NotFound from '../containers/not-found';
import MainMenu from '../components/main-menu';
import { Divider } from 'semantic-ui-react';
import PrivateRoutes from './private-routes';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {

  render() {

    return (
      <Switch>      
        <>
          <MainMenu />
          <Divider hidden={true} />
          <PrivateRoutes />
        </>
        <Route render={props => <NotFound {...props} />} />
      </Switch>
    );
  }
}