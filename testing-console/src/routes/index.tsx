import { Route, Switch } from 'react-router-dom';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={(): JSX.Element => <div>home</div>} />
      <Route path="/table/:content" component={(): JSX.Element => <div>table</div>} />
    </Switch>
  );
};

export default Routes;

// <PrivateRoute exact path="/table/:content">
//             <TablePage />
//         </PrivateRoute>
//         <PrivateRoute exact path="/detail/:action/:content" >
//             <EditPage />
