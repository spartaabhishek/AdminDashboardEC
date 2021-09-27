import React from "react";
import Layout from "../../components/Layout"
import {Jumbotron} from "react-bootstrap"
function Home() {
  return(
    <Layout>
      <Jumbotron style={{margin:"5rem"}}className="text-center">
        <h1>admin dashboard</h1>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
