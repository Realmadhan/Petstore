import './App.css';
import {
  ProfileCardCollection 
 } from './ui-components';
 import {
  NavBarHeader2 
 } from './ui-components';
 import {
  MarketingFooterBrand 
 } from './ui-components';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarHeader2 width= {"100%"}/>
          <ProfileCardCollection />
      </header>
      <MarketingFooterBrand width= {"100%"}/>
    </div>
  );
}

export default withAuthenticator(App);
