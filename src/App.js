import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [address, setAddress] = useState({})

  const handleChange = e => {

    const selectValue = e.target.value;

    if(e.target.name === "person"){
      setAddress({...address, "person": selectValue})
    }
    else if(e.target.name === "country"){
      setAddress({...address, "country": selectValue})
    }
    else if(e.target.name === "state"){
      setAddress({...address, "state": selectValue})
    }
    else if(e.target.name === "district"){
      setAddress({...address, "district": selectValue})
    }
    else if(e.target.name === "city"){
      setAddress({...address, "city": selectValue})
    }
    else if(e.target.name === "town"){
      setAddress({...address, "town": selectValue})
    }
    else if(e.target.name === "zipcode"){
      setAddress({...address, "zipcode": selectValue})
    }
    else if(e.target.name === "village"){
      setAddress({...address, "village": selectValue})
    }
    else if(e.target.name === "house"){
      setAddress({...address, "house": selectValue})
    }
    else if(e.target.name === "phone"){
      setAddress({...address, "phone": selectValue})
    }
    else if(e.target.name === "fax"){
      setAddress({...address, "fax": selectValue})
    }
  }

  console.log("address--", address)
  return (
    <div className="country-state-main-section">
      
      <div className="my-info">
          <h2>Saied Afride</h2>
          <h2>developer.afride@gmail.com</h2>
          <h2>01730258276</h2>
          <h2>Please Search Bangladesh</h2>
      </div>

      <div className="country-state-container">
        <div className="country-state-container-left">
            <h3>Billing Address</h3>
            <form>
                <input type="text" name="person" onChange={handleChange} placeholder="Enter person/site name"/>
                <div className="form-group">
                    <label>Country</label>
                    <select name="country" onChange={handleChange}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Division/Province/State</label>
                    <select name="state" onChange={handleChange} disabled={address?.country ? false : true}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>District</label>
                    <select name="district" onChange={handleChange} disabled={address?.state ? false : true}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>City/Sub District/Thana</label>
                    <select name="city" onChange={handleChange} disabled={address?.district ? false : true}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Union/Area/Town</label>
                    <select name="town" onChange={handleChange} disabled={address?.city ? false : true}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Zipcode</label>
                    <select name="zipcode" onChange={handleChange} disabled={address?.town ? false : true}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Street Address/Village</label>
                    <select name="village" onChange={handleChange} disabled={address?.zipcode ? false : true}>
                      <option value="search">Please Search</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>House/Suite/apartment no</label>
                    <input type="number" name="house" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="number" name="phone" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Fax</label>
                    <input type="number" name="fax" onChange={handleChange}/>
                </div>
            </form>
        </div>
        <div className="country-state-container-right">
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="form-label col-sm-3">Select Country</label>
                    <div className="col-sm-5">
                        <select id="country" name="country" className="form-control"></select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label col-sm-3">State</label>
                    <div className="col-sm-4">
                        <select name="state" id="state" className="form-control"></select>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
