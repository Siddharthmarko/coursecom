import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <>
      <Container>
        <div className="container mt-5">
          <h1>Bigbulls Privacy Policy</h1>
          <p className="p2">
            This privacy policy sets out how Bigbulls uses and protects any
            information that you give Bigbulls when you use this website.
            Bigbulls is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement.
          </p>
          <h3>What we collect? We may collect the following information:</h3>
          <div className="container">
            <ul>
              <li>Personal Information of the Students</li>
              <li>Academic Information of the Students</li>
              <li>Demographic information such as postcode.</li>
              <li>Location of the employees</li>
            </ul>
          </div>

          <h3>What do we do with the information?</h3>
          <p className="p2">
            We require this information for providing you convenient online
            transactions both financial and academic. We will never share, sell,
            or rent individual personal information with anyone for their
            promotional use without your advance permission or unless ordered by
            a court of law. Information submitted to us is only available to
            employees of Bigbulls, managing this information for purposes of
            contacting you or sending you emails based on your request for
            information.
          </p>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
const Container = styled.div``;
