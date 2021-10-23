import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';
import UserInfo from './pages/User/UserInfo';
import UserList from './pages/User/UserList';
import CompanyInfo from './pages/Company/CompanyInfo';
import CompanyList from './pages/Company/CompanyList';
import Login from './pages/Login';

const routes = [
  {
    path: '/user',
    redirect: '/user/info',
    children: [
      {
        path: '/info',
        component: UserInfo
      },
      {
        path: '/list',
        component: UserList
      }
    ]
  },
  {
    path: '/company',
    redirect: '/company/info',
    children: [
      {
        path: '/info',
        component: CompanyInfo
      },
      {
        path: '/list',
        component: CompanyList
      }
    ]
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/user/list'
  }
];
function loopRoutes(routes: Array<any>, parentPath = ''): Array<any> {
  let newRoutes: Array<any> = [];
  routes.forEach((item: any) => {
    const path = parentPath + item.path;
    if (!item.children) {
      newRoutes.push({
        path,
        redirect: item.redirect,
        component: item.component
      });
    } else {
      newRoutes.push({
        path,
        redirect: item.redirect
      });
      newRoutes = newRoutes.concat(loopRoutes(item.children, path));
    }
  });
  return newRoutes;
}

const dealedRoutes = loopRoutes(routes);
// console.log(dealedRoutes);
// console.log(Login);

export default function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        {dealedRoutes.map((item: any) => {
          return item.redirect ? (
            <Route path={item.path} key={item.path} exact>
              <Redirect push to={item.redirect} />
            </Route>
          ) : (
            <Route
              path={item.path}
              key={item.path}
              component={item.component}
              exact
            />
          );
        })}
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}
