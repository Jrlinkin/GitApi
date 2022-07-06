import React from "react";
import useGithub from "./hooks/github-hooks";

import Layout from "./components/layout";
import Profile from "./components/profile";

import Repositories from "./components/repositories";
import NoSearch from "./components/no-search";



const App = () => {
  const {githubState} = useGithub();
  return (
        <Layout>
   
        {githubState.hasUser ? <> {githubState.loading
          ? <h1 style={{fontSize: '20px', display:'flex', justifyContent: 'center'}}>Loading...</h1> 
          : <>
              <Profile/>
              <Repositories/>
        </>} </> : <NoSearch/> }
        </Layout>
     
  );
}

export default App;
