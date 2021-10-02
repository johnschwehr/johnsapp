import React from "react";
import { Base } from "components/apps";
import { Layout, Seo } from "components/common";
import { Auth0Provider } from "@auth0/auth0-react";

const Dashboard = () => (
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    clientId={process.env.AUTH0_CLIENTID}
  >
    <Layout>
      <Seo />
      <Base />
    </Layout>
  </Auth0Provider>
);

export default Dashboard;
