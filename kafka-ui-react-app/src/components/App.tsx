import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Alert } from 'redux/interfaces';
import NavContainer from './Nav/NavContainer';
import PageLoader from './common/PageLoader/PageLoader';
import Dashboard from './Dashboard/Dashboard';
import Cluster from './Cluster/Cluster';

interface AppProps {
  isClusterListFetched: boolean;
  alerts: Alert[];
  fetchClustersList: () => void;
}

const App: React.FC<AppProps> = ({
  isClusterListFetched,
  alerts,
  fetchClustersList,
}) => {
  React.useEffect(() => {
    fetchClustersList();
  }, [fetchClustersList]);

  return (
    <div className="Layout">
      <nav
        className="navbar is-fixed-top is-white Layout__header"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item title is-5 is-marginless" href="/ui">
            Kafka UI
          </a>
        </div>
      </nav>

      <main className="Layout__container">
        <NavContainer className="Layout__navbar" />
        {isClusterListFetched ? (
          <Switch>
            <Route
              exact
              path={['/', '/ui', '/ui/clusters']}
              component={Dashboard}
            />
            <Route path="/ui/clusters/:clusterName" component={Cluster} />
          </Switch>
        ) : (
          <PageLoader fullHeight />
        )}
      </main>

      <div className="Layout__alerts">
        <div className="notification is-danger">
          <button className="delete" type="button">
            1
          </button>
          <div>
            <h6 className="title is-6">Schema new</h6>
            <p className="subtitle is-6">405. Method is not allowed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
