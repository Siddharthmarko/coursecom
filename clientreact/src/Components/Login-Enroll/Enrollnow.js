import React, { useEffect, useState } from "react";
import logoimg from "../photos/register-img.png";
import "../Login-Enroll/Enrollnow.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import enroll from "../../image/EnrollNow.webp";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cogoToast from "cogo-toast";
const baseUrl = process.env.REACT_APP_URL;

let dummyData = {
    name: 'username',
    email: 'username@gmail.com',
    phone: "1234567890",
    gender: 'male',
    password: "123456",
    cpassword: "123456",
    country: "India",
    state: "Madhya Pradesh",
    city: "jabalpur",
    address: "Garha",
    dob: "",
    refferelCode: "",
}

const Enrollnow = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);
    const [data, setData] = useState(dummyData);

  const handleBirthCertificateChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      // Update the state with the selected file
      setProfilePicture(selectedFile);
    }
  };
  console.log(profilePicture);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Use spread syntax to update only the changed field
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateChange = (date) => {
    setData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  const countryToStatesMap = {
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
    Australia: [
      "New South Wales",
      "Queensland",
      "Victoria",
      "Western Australia",
    ],
    UAE: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"],
    USA: ["California", "New York", "Texas", "Florida"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    UK: ["England", "Scotland", "Wales", "Northern Ireland"],
    Germany: ["Berlin", "Bavaria", "Hamburg", "North Rhine-Westphalia"],
    Japan: ["Tokyo", "Osaka", "Hokkaido", "Kyoto"],
    Brazil: ["Sao Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia"],
    China: ["Beijing", "Shanghai", "Guangdong", "Zhejiang"],
    SouthAfrica: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape"],
    // Add more countries and states as needed
  };

  const allCountries = Object.keys(countryToStatesMap);

  console.log(data);

  const register = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
        // Append user.data fields to formData
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("profilePicture", profilePicture);
    console.log(data, profilePicture);
    const formDataArray = [];

    // Iterate over the entries and push them to the array
    for (let entry of formData.entries()) {
      formDataArray.push(entry);
    }
    
    // Print the array
    console.log(formDataArray)
    try {
      const response = await axios.post(
        `${baseUrl}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      cogoToast.success("Registration successful!");
      navigate("/login");

      if (response.status === 201) {

      } else {
        cogoToast.error(response);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      cogoToast.error(error.response.data || "An error occurred");
    }
  };

  return (
    <>
      <Container>
        <div className="container">
          <div className="marginseter">
            <form onSubmit={register} enctype="multipart/form-data">
              <div className="outer-enrollnow-container">
                <div className="enrollnow-container">
                  <div className="enrollnow-left">
                    <img src={logoimg} alt="user" />
                  </div>

                  <div className="enrollnow-right">
                    <h1>Register to Bigbulls</h1>
                    <br />

                    <div className="sub">
                      <div className="row g-3">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label for="name">
                            Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your Full Name"
                          />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label for="email">
                            Email<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={data.email}
                            required
                            onChange={handleInputChange}
                            placeholder="xyz@gmail.com"
                          />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label>
                            Enter Mobile number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            maxLength={10}
                            required
                            onChange={handleInputChange}
                            placeholder="Enter Mobile Number Without Country Code"
                          />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label>
                            Gender<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            value={data.gender}
                            required
                            onChange={handleInputChange}
                            className="inputsel"
                          >
                            <option value="">Select an Option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">ohter</option>
                          </select>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label>
                            Create password
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            name="password"
                            value={data.password}
                            onChange={handleInputChange}
                            className="inputsel"
                            required
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                          />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label>
                            Confirm password
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="password"
                            name="cpassword"
                            placeholder="Enter Password"
                            id="cpassword"
                            required
                            value={data.cpassword}
                            className="inputsel"
                            onChange={handleInputChange}
                          />
                          <span id="message"></span>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label htmlFor="country">
                            Choose your country from the list
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={data.country}
                            required
                            onChange={handleInputChange}
                            className="inputsel"
                          >
                            <option value="">Select an Option</option>
                            {allCountries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label htmlFor="state">
                            Choose your state from the list
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="state"
                            name="state"
                            value={data.state}
                            onChange={handleInputChange}
                            required
                            className="inputsel"
                            disabled={!data.country}
                          >
                            <option value="">Select an Option</option>
                            {data.country &&
                              countryToStatesMap[data.country].map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label>
                            Enter City<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={data.city}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your city"
                          />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label>
                            Enter Address<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your address"
                          />
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label for="dateInput">
                            Enter Date of Birth
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div class="input-group">
                            {/* <DatePicker
                            selected={data.dob}
                            onChange={(date) => handleDateChange(date)}
                            className="form-control inputsel"
                            dateFormat="dd-MM-yyyy"
                            placeholderText="Enter Date of Birth"
                          /> */}

                            <DatePicker
                              selected={data.dob}
                              onChange={(date) => handleDateChange(date)}
                              className="form-control"
                              dateFormat="yyyy-MM-dd"
                              placeholderText="Select a date"
                              required
                              value={data.dob}
                              showMonthDropdown={true}
                              showYearDropdown={true}
                              scrollableYearDropdown={false}
                            />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label for="profilePicture">
                            Upload Profile Picture
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="file"
                            name="profilePicture"
                            accept=".pdf, .jpg, .jpeg, .png"
                            required
                            onChange={handleBirthCertificateChange}
                          />
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <label for="refferelCode">Add Referral Code </label>
                          <input
                            name="refferelCode"
                            value={data.refferelCode}
                            onChange={handleInputChange}
                            placeholder="Enter Referral Code"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row"></div>
                    <br />
                    <button className="submitbtn" type="submit">
                      submit
                    </button>

                    <hr className="light-grey-hr" />
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <ToastContainer />
        </div>
      </Container>
    </>
  );
};

export default Enrollnow;
const Container = styled.div`
  .inputsel {
    width: 100%;
  }

  input {
    width: 100%;
  }
  .marginseter {
    margin-top: 4rem;
    height: 100%;
    margin-bottom: 4rem;
    @media screen and (max-width: 500px) {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }

  .react-datepicker__navigation--years-upcoming {
    background: radial-gradient(#ff0000, #fdfdfd);
  }

  .react-datepicker__navigation--years-previous {
    background: radial-gradient(#ff0000, #fdfdfd);
  }
`;
