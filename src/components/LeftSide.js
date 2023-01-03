import React, { useState } from 'react';
import fakeData from "./fakeData.json";

const LeftSide = ({address, setAddress, filterData, setFilterData}) => {
  const [countries, setCountries] = useState(fakeData);
//   const [address, setAddress] = useState({});
  const [searchText, setSearchText] = useState("");
  const [suggestBox, setSuggestBox] = useState({
      country: false,
      state: false,
      district: false,
      city: false,
      town: false,
      zipcode: false,
      village: false
  })
//   const [filterData, setFilterData] = useState({
//       country: {},
//       state: {},
//       district: {},
//       city: {},
//       town: {},
//       zipcode: {},
//       village: {}
//   })

  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  //          Showing a result, when user select any item
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------

  const handleResult = (item) => {
    setSearchText("");
    setCountries(fakeData);
    
    if(item === "country"){
      setSuggestBox({...suggestBox, country: !suggestBox.country, state: false, district: false, city: false, town: false, zipcode: false, village: false});
    }
    if(item === "state"){
      setSuggestBox({...suggestBox, state: !suggestBox.state, country: false, district: false, city: false, town: false, zipcode: false, village: false});
      setFilterData({...filterData, country: countries?.find(data => data.country === filterData?.country?.country)})
    }
    if(item === "district"){
      setSuggestBox({...suggestBox, district: !suggestBox.district, country: false, state: false, city: false, town: false, zipcode: false, village: false});
      setFilterData({...filterData, state: filterData?.country?.state?.find(data => data.name === filterData?.state?.name)})
    }
    if(item === "city"){
      setSuggestBox({...suggestBox, city: !suggestBox.city, country: false, state: false, district: false, town: false, zipcode: false, village: false});
      setFilterData({...filterData, district: filterData?.state?.district?.find(data => data.name === filterData?.district?.name)})
    }
    if(item === "town"){
      setSuggestBox({...suggestBox, town: !suggestBox.town, country: false, state: false, district: false, city: false, zipcode: false, village: false});
      setFilterData({...filterData, city: filterData?.district?.city?.find(data => data.name === filterData?.city?.name)})
    }
    if(item === "zipcode"){
      setSuggestBox({...suggestBox, zipcode: !suggestBox.zipcode, country: false, state: false, district: false, city: false, town: false, village: false});
      setFilterData({...filterData, town: filterData?.city?.town?.find(data => data.name === filterData?.town?.name)})
    }
    if(item === "village"){
      setSuggestBox({...suggestBox, village: !suggestBox.village, country: false, state: false, district: false, city: false, town: false, zipcode: false});
      setFilterData({...filterData, zipcode: filterData?.town?.zipcode?.find(data => data.name === filterData?.zipcode?.name)})
    }
  }

  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  //          Showing a search result, when user search any specific data
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------

  const handleSearchChange = (e, item) => {
    setSearchText(e.target.value);
    if(item === "country"){
      const matchedData = fakeData?.filter(country => country.country.toLowerCase().includes(e.target.value.toLowerCase()));
      setCountries(matchedData);
    }
    else if(item === "state"){
      const matchedData = filterData?.country?.state?.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilterData({...filterData, country: {country: address.country, state: matchedData}})
    }
    else if(item === "district"){
      const matchedData = filterData?.state?.district?.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilterData({...filterData, state: {name: address.state, district: matchedData}})
    }
    else if(item === "city"){
      const matchedData = filterData?.district?.city?.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilterData({...filterData, district: {name: address.district, city: matchedData}})
    }
    else if(item === "town"){
      const matchedData = filterData?.city?.town?.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilterData({...filterData, city: {name: address.city, town: matchedData}})
    }
    else if(item === "zipcode"){
      const matchedData = filterData?.town?.zipcode?.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilterData({...filterData, town: {name: address.town, zipcode: matchedData}});
    }
    else if(item === "village"){
      const matchedData = filterData?.zipcode?.village?.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilterData({...filterData, zipcode: {name: address.zipcode, village: matchedData}})
    }
  }

  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  //          Showing a many data, user select any data
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------

  const handleSuggestClick = (item, value) => {
    if(item === "country"){
      setAddress({ ...address, country: value, state: "", district: "", city: "", town: "", zipcode: "", village: ""})
      setSuggestBox({...suggestBox, country: false});
      setFilterData({...filterData, country: countries?.find(data => data.country === value)})
    }
    else if(item === "state"){
      setAddress({...address, state: value, district: "", city: "", town: "", zipcode: "", village: ""})
      setSuggestBox({...suggestBox, state: false});
      setFilterData({...filterData, state: filterData?.country?.state?.find(data => data.name === value)})
    }
    else if(item === "district"){
      setAddress({...address, district: value, city: "", town: "", zipcode: "", village: ""})
      setSuggestBox({...suggestBox, district: false});
      setFilterData({...filterData, district: filterData?.state?.district?.find(data => data.name === value)})
    }
    else if(item === "city"){
      setAddress({...address, city: value, town: "", zipcode: "", village: ""})
      setSuggestBox({...suggestBox, city: false});
      setFilterData({...filterData, city: filterData?.district?.city?.find(data => data.name === value)})
    }
    else if(item === "town"){
      setAddress({...address, town: value, zipcode: "", village: ""})
      setSuggestBox({...suggestBox, town: false});
      setFilterData({...filterData, town: filterData?.city?.town?.find(data => data.name === value)})
    }
    else if(item === "zipcode"){
      setAddress({...address, zipcode: value, village: ""})
      setSuggestBox({...suggestBox, zipcode: false});
      setFilterData({...filterData, zipcode: filterData?.town?.zipcode?.find(data => data.name === value)})
    }
    else if(item === "village"){
      setAddress({...address, village: value})
      setSuggestBox({...suggestBox, village: false});
    }
  }

  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  //          input field value received
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------

  const handleChange = e => {

    const selectValue = e.target.value;

    if(e.target.name === "person"){
      setAddress({...address, "person": selectValue})
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

//   console.log("address", address)
      return (
            <>
                <h3>Billing Address</h3>

                  <div className="without-suggest">
                        <h4>Attention</h4>
                        <input type="text" value={address?.person || ""} name="person" onChange={handleChange} placeholder="Enter person/site name"/>
                  </div>

                  <div className="show-suggest-container">
                        <h4>Country</h4>
                        <p onClick={() => handleResult("country")}>{address?.country ? address?.country : "Please Search"}</p>
                        <div className="show-suggest-area" style={{ display: suggestBox.country === false ? 'none' : 'block' }}>
                              <input value={searchText} onChange={ (e) => handleSearchChange(e, "country")} type="search" placeholder="Search here..."/>
                              <div className="show-suggest">
                                    { 
                                    countries?.map((country, i) => <div key={i}>
                                                <button onClick={()=> handleSuggestClick("country", country.country)} className="suggest-btn">
                                                <span className="suggest-line-climb">{country.country}</span>
                                                </button>
                                    </div>)
                                    }
                              </div>
                        </div>
                  </div>

                  <div className="show-suggest-container">
                        <h4>Division/Province/State</h4>

                        {  
                              !address?.country ?
                              <p onClick={() => handleResult("state")} style={{opacity: "0.5"}}>{address?.state ? address?.state : "Please Search"}</p>
                              :
                              <>
                              <p onClick={() => handleResult("state")}>{address?.state ? address?.state : "Please Search"}</p>
                              <div className="show-suggest-area" style={{ display: suggestBox?.state === false ? 'none' : 'block' }}>
                                    <input value={searchText} onChange={(e) => handleSearchChange(e, "state")} type="search" placeholder="Search here..."/>
                                    <div className="show-suggest">
                                          {   
                                                filterData?.country?.state?.length === 0 ? 
                                          <button className="suggest-btn" style={{textAlign: 'center'}}>No Data Found</button>
                                          :
                                          filterData?.country?.state?.map((item, i) => <div key={i}>
                                                      <button onClick={()=> handleSuggestClick("state", item.name)} className="suggest-btn">
                                                      <span className="suggest-line-climb">{item.name}</span>
                                                      </button>
                                          </div>)
                                          }
                                    </div>
                              </div>
                              </>
                        }
                  </div>

                  <div className="show-suggest-container">
                        <h4>District</h4>

                        {  
                              !address?.state ?
                              <p onClick={() => handleResult("district")} style={{opacity: "0.5"}}>{address?.district ? address?.district : "Please Search"}</p>
                              :
                              <>
                              <p onClick={() => handleResult("district")}>{address?.district ? address?.district : "Please Search"}</p>
                              <div className="show-suggest-area" style={{ display: suggestBox?.district === false ? 'none' : 'block' }}>
                                    <input value={searchText} onChange={(e) => handleSearchChange(e, "district")} type="search" placeholder="Search here..."/>
                                    <div className="show-suggest">
                                          {   
                                          filterData?.state?.district?.length === 0 ? 
                                          <button className="suggest-btn" style={{textAlign: 'center'}}>No Data Found</button>
                                          :
                                          filterData?.state?.district?.map((item, i) => <div key={i}>
                                                      <button onClick={()=> handleSuggestClick("district", item.name)} className="suggest-btn">
                                                      <span className="suggest-line-climb">{item.name}</span>
                                                      </button>
                                          </div>)
                                          }
                                    </div>
                              </div>
                              </>
                        }
                  </div>

                  <div className="show-suggest-container">
                        <h4>City/Sub District/Thana</h4>

                        {  
                              !address?.district ?
                              <p onClick={() => handleResult("city")} style={{opacity: "0.5"}}>{address?.city ? address?.city : "Please Search"}</p>
                              :
                              <>
                              <p onClick={() => handleResult("city")}>{address?.city ? address?.city : "Please Search"}</p>
                              <div className="show-suggest-area" style={{ display: suggestBox?.city === false ? 'none' : 'block' }}>
                                    <input value={searchText} onChange={(e) => handleSearchChange(e, "city")} type="search" placeholder="Search here..."/>
                                    <div className="show-suggest">
                                          {   
                                          filterData?.district?.city?.length === 0 ? 
                                          <button className="suggest-btn" style={{textAlign: 'center'}}>No Data Found</button>
                                          :
                                          filterData?.district?.city?.map((item, i) => <div key={i}>
                                                      <button onClick={()=> handleSuggestClick("city", item.name)} className="suggest-btn">
                                                      <span className="suggest-line-climb">{item.name}</span>
                                                      </button>
                                          </div>)
                                          }
                                    </div>
                              </div>
                              </>
                        }
                  </div>

                  <div className="show-suggest-container">
                        <h4>Union/Area/Town</h4>

                        {  
                              !address?.city ?
                              <p onClick={() => handleResult("town")} style={{opacity: "0.5"}}>{address?.town ? address?.town : "Please Search"}</p>
                              :
                              <>
                              <p onClick={() => handleResult("town")}>{address?.town ? address?.town : "Please Search"}</p>
                              <div className="show-suggest-area" style={{ display: suggestBox?.town === false ? 'none' : 'block' }}>
                                    <input value={searchText} onChange={(e) => handleSearchChange(e, "town")} type="search" placeholder="Search here..."/>
                                    <div className="show-suggest">
                                          {   
                                          filterData?.city?.town?.length === 0 ? 
                                          <button className="suggest-btn" style={{textAlign: 'center'}}>No Data Found</button>
                                          :
                                          filterData?.city?.town?.map((item, i) => <div key={i}>
                                                      <button onClick={()=> handleSuggestClick("town", item.name)} className="suggest-btn">
                                                      <span className="suggest-line-climb">{item.name}</span>
                                                      </button>
                                          </div>)
                                          }
                                    </div>
                              </div>
                              </>
                        }
                  </div>

                  <div className="show-suggest-container">
                        <h4>Zipcode</h4>

                        {  
                              !address?.town ?
                              <p onClick={() => handleResult("zipcode")} style={{opacity: "0.5"}}>{address?.zipcode ? address?.zipcode : "Please Search"}</p>
                              :
                              <>
                              <p onClick={() => handleResult("zipcode")}>{address?.zipcode ? address?.zipcode : "Please Search"}</p>
                              <div className="show-suggest-area" style={{ display: suggestBox?.zipcode === false ? 'none' : 'block' }}>
                                    <input value={searchText} onChange={(e) => handleSearchChange(e, "zipcode")} type="search" placeholder="Search here..."/>
                                    <div className="show-suggest">
                                          {   
                                          filterData?.town?.zipcode?.length === 0 ? 
                                          <button className="suggest-btn" style={{textAlign: 'center'}}>No Data Found</button>
                                          :
                                          filterData?.town?.zipcode?.map((item, i) => <div key={i}>
                                                      <button onClick={()=> handleSuggestClick("zipcode", item.name)} className="suggest-btn">
                                                      <span className="suggest-line-climb">{item.name}</span>
                                                      </button>
                                          </div>)
                                          }
                                    </div>
                              </div>
                              </>
                        }
                  </div>

                  <div className="show-suggest-container">
                        <h4>Street Address/Village</h4>

                        {  
                              !address?.zipcode ?
                              <p onClick={() => handleResult("village")} style={{opacity: "0.5"}}>{address?.village ? address?.village : "Please Search"}</p>
                              :
                              <>
                              <p onClick={() => handleResult("village")}>{address?.village ? address?.village : "Please Search"}</p>
                              <div className="show-suggest-area" style={{ display: suggestBox?.village === false ? 'none' : 'block' }}>
                                    <input value={searchText} onChange={(e) => handleSearchChange(e, "village")} type="search" placeholder="Search here..."/>
                                    <div className="show-suggest">
                                          {   
                                          filterData?.zipcode?.village?.length === 0 ? 
                                          <button className="suggest-btn" style={{textAlign: 'center'}}>No Data Found</button>
                                          :
                                          filterData?.zipcode?.village?.map((item, i) => <div key={i}>
                                                      <button onClick={()=> handleSuggestClick("village", item.name)} className="suggest-btn">
                                                      <span className="suggest-line-climb">{item.name}</span>
                                                      </button>
                                          </div>)
                                          }
                                    </div>
                              </div>
                              </>
                        }
                  </div>

                  <div className="without-suggest">
                        <h4>House/Suite/apartment no</h4>
                        <input type="text" value={address?.house || ""} name="house" onChange={handleChange} placeholder="House/Suite/apartment no" disabled={address?.village ? false : true} style={{opacity: address?.village ? "1" : "0.5"}}/>
                  </div>

                  <div className="without-suggest">
                        <h4>Phone</h4>
                        <input type="number" value={address?.phone || ""} name="phone" onChange={handleChange} placeholder="Phone" disabled={address?.house ? false : true} style={{opacity: address?.house ? "1" : "0.5"}}/>
                  </div>

                  <div className="without-suggest">
                        <h4>Fax</h4>
                        <input type="text" value={address?.fax || ""} name="fax" onChange={handleChange} placeholder="Fax" disabled={address?.phone ? false : true} style={{opacity: address?.phone ? "1" : "0.5"}}/>
                  </div>  
            </>
      );
};

export default LeftSide;