import { useState } from 'react';
import './App.css';
import {
  ProfileCard,
  ProfileCardCollection 
 } from './ui-components';
 import {
  NavBarHeader2 
 } from './ui-components';
 import {
  MarketingFooterBrand 
 } from './ui-components';
 import {
  AddPet 
 } from './ui-components';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
function App() {
  const[showForm,setshowForm] = useState(false)
  const formOverrides = {
    MyIcon: {
      style: {
        cursor: "pointer"
      },
      onClick: () => setshowForm(!showForm) 
  }}
  const navOverrides = {
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => setshowForm(!showForm),
    },
    "Pet Home": {
      style: {
        cursor: "pointer"
      },
      onClick: () => alert("Welcome to the Petstore. You're in OurHome!")
    },
    "Pricing": {
      style: {
        cursor: "pointer"
      },
      onClick: () => alert("All are free!")
    },
    "Contact": {
      style: {
        cursor: "pointer"
      },
      onClick: () => alert("Search Madhan S in LinkedIn, Swimming in AWS Cloud..!")
    },
  }
  return (
    <div className="App">
        <NavBarHeader2 width= {"100%"} overrides = { navOverrides } />
      <header className="App-header">
        {showForm && (
        <AddPet overrides={formOverrides}
        style={{
          textAlign: "left",
          margin: "1rem" ,
        }}
        />
        )
        }
          <ProfileCardCollection overrideItems={({item,index}) => ({
            overrides: {
              "Melinda Marcus" : { color: "green"},
              "About:" : { color: "blue" },
              Age: { color: "brown" },
              "Colour:" : { color: "red" },
              "Breed:" : 
              { color: "purple",
                onClick: () => alert(item.Breed),
              },
              Button29766907 : { 
                color: "black",
                onClick: () => alert(item.About)
              },
              Button3848566 : { color: "black" }
            },
          })}
         />
      </header>
      <MarketingFooterBrand width= {"100%"}/>
    </div>
  );
}

export default withAuthenticator(App);
