import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Userprofile = () => {
  const user = useSelector((state) => state.user);
  console.log(`User Name: ${user.name}, User ID: ${user.id}`);
  console.log("User State:", user);
  return (
    <>
      <Container>
        <div className="main-subs">
          <h1 className="text-center">Hello</h1>
        </div>
      </Container>
    </>
  );
};

export default Userprofile;
const Container = styled.div`
  height: 100%;
  background: black;
  .main-subs {
    height: 100vh;
  }
`;
