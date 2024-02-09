import React from 'react';
import Cards from './component/Cards';

const App = () => {
     const planObj = [{
      id : 1,
      plan: "FREE",
      Rs: "$0/month",
      user: "Single User",
      storage: "50GB",
      projects: "Unlimited Public Projects",
      community: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Sub Domain",
      report: "Monthly status report"
     },
     {
      id : 2,
      plan: "PLUS",
      Rs: "$9/month",
      user: "5 Users",
      storage: "50GB",
      projects: "Unlimited Public Projects",
      community: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Sub Domain",
      report: "Monthly status report"
     },
     {
      id : 3,
      plan: "PRO",
      Rs: "$49/month",
      user: "Unlimited Users",
      storage: "50GB",
      projects: "Unlimited Public Projects",
      community: "Community Access",
      private: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Free Sub Domain",
      report: "Monthly status report"
     }]
  return (
    <div>
      <Cards planObj={planObj}/>
    </div>
  );
};

export default App;