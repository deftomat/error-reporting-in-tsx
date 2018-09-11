import WithIdentity from '@app/src/cmp/WithIdentity';
import Section1 from '@app/src/pages/Section1';
import Section10 from '@app/src/pages/Section10';
import Section11 from '@app/src/pages/Section11';
import Section12 from '@app/src/pages/Section12';
import Section13 from '@app/src/pages/Section13';
import Section14 from '@app/src/pages/Section14';
import Section15 from '@app/src/pages/Section15';
import Section16 from '@app/src/pages/Section16';
import Section17 from '@app/src/pages/Section17';
import Section18 from '@app/src/pages/Section18';
import Section19 from '@app/src/pages/Section19';
import Section2 from '@app/src/pages/Section2';
import Section20 from '@app/src/pages/Section20';
import Section3 from '@app/src/pages/Section3';
import Section4 from '@app/src/pages/Section4';
import Section5 from '@app/src/pages/Section5';
import Section6 from '@app/src/pages/Section6';
import Section7 from '@app/src/pages/Section7';
import Section8 from '@app/src/pages/Section8';
import Section9 from '@app/src/pages/Section9';
import ApolloClient from 'apollo-client';
import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

interface Props {
  readonly apolloClient: ApolloClient<any>;
}

class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={this.props.apolloClient}>
        <BrowserRouter>
          <Page>
            <Query client="" />

            <WithIdentity>
              <Switch>
                <Route path="/section1" component={Section1} />
                <Route path="/section2" component={Section2} />
                <Route path="/section3" component={Section3} />
                <Route path="/section4" component={Section4} />
                <Route path="/section5" component={Section5} />
                <Route path="/section6" component={Section6} />
                <Route path="/section7" component={Section7} />
                <Route path="/section8" component={Section8} />
                <Route path="/section9" component={Section9} />
                <Route path="/section10" component={Section10} />
                <Route path="/section11" component={Section11} />
                <Route path="/section12" component={Section12} />
                <Route path="/section13" component={Section13} />
                <Route path="/section14" component={Section14} />
                <Route path="/section15" component={Section15} />
                <Route path="/section16" component={Section16} />
                <Route path="/section17" component={Section17} />
                <Route path="/section18" component={Section18} />
                <Route path="/section19" component={Section19} />
                <Route path="/section20" component={Section20} />
              </Switch>
            </WithIdentity>
          </Page>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
