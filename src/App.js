import { useState } from 'react';
import './App.css';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {

  const [billingAddress, setBillingAddress] = useState({});
  const [billingFilterData, setBillingFilterData] = useState({
    country: {},
    state: {},
    district: {},
    city: {},
    town: {},
    zipcode: {},
    village: {}
  })

  return (
    <div className="country-state-main-section">
      
      <div className="my-info">
          <h2>Saied Afride</h2>
          <h2>developer.afride@gmail.com</h2>
          <h2>01730258276</h2>
          <h2>Please Search Bangladesh - Mymensingh - Netrekona - Kendua - Kandiura - 4533 </h2>
      </div>

      <div className="country-state-container">
        {/* Billing address */}
        <div className="country-state-container-left">
            <LeftSide address={billingAddress} setAddress={setBillingAddress} filterData={billingFilterData} setFilterData={setBillingFilterData}/>
        </div>

        {/* Shipping address */}
        <div className="country-state-container-right">
            <RightSide billingAddress={billingAddress} billingFilterData={billingFilterData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
