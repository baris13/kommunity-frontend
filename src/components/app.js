import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/components/pages/home';
import Login from '@/components/pages/login';
import Logout from '@/components/pages/logout';
import MemberProfile from '@/components/pages/member-profile';
import CommunityList from '@/components/pages/communities';
import '@/css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/member/profile" component={MemberProfile} />
    <Route exact path="/communities" component={CommunityList} />
  </Switch>
);

export default App;
