import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './home/Home';
import ProjectHome from './projects/ProjectHome';
import Page from './pages/Page/Page';
import Dashboard from './dashboard/Dashboard';
import Articles from './dashboard/routes/Articles';
import Articles2 from './dashboard/routes/Articles2';
import Articles3 from './dashboard/routes/Articles3';
import MainPanel from './dashboard/routes/MainPanel';
import UserProfile from './dashboard/routes/UserProfile';
import UserProfileTimeline from './dashboard/routes/UserProfileTimeline';
import ExampleForms from './dashboard/routes/ExampleForms';
import MiradorUploader from './dashboard/routes/MiradorUploader';

export default (
  <div>
		{/* Normal home landing page */}
    <Route exact path="/" component={Home} />

		{/* Project home landing page (for tenant *.orphe.us instead of main orphe.us) */}
    <Route exact path="/project" component={ProjectHome} />

    <Route path="/page/new" component={Page} />
    <Route path="/page" component={Page} />
    <Route path="/dashboard" component={Dashboard}>
      <IndexRoute component={MainPanel} />
      <Route path="/dashboard/articles" component={Articles} />
      <Route path="/dashboard/articles2" component={Articles2} />
      <Route path="/dashboard/articles3" component={Articles3} />
      <Route path="/dashboard/user" component={UserProfile} />
      <Route path="/dashboard/user2" component={UserProfileTimeline} />
      <Route path="/dashboard/form" component={ExampleForms} />
      <Route path="/dashboard/mirador" component={MiradorUploader} />
    </Route>
  </div>
);
