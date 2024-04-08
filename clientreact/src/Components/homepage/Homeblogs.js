import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Homeblogs() {
  return (
    <>
      <Container>
        <div className="container">
          <h2 className="text-center mb-5" id="lb">
            Latest Blog
          </h2>
        </div>
        <div className="container mb-5">
          <div className="card-group">
            <div className="card d-flex mr-5 shadow-0 h-100 border-0">
              <Link to="/blog-first">
                <img
                  className="card-img-top fluid rounded-5"
                  id="cbimg"
                  src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988708/b1_pcueus.webp"
                  alt="Video Thumbnail"
                />
              </Link>
              <div className="card-body  blog-title">
                <Link to="/blog-first">
                <h3>my second blog</h3>
                <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                </Link>
              </div>
            </div>

            <div className="card d-flex mr-3 shadow-0 h-100 border-0 ">
              <Link to="/blog-second">
                <img
                  className=" card-img-top fluid rounded-5"
                  src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988709/b4_meihuf.webp"
                  alt="Video Thumbnail"
                />
              </Link>
              <div className="card-body blog-title ">
                <Link to="/blog-second">
                  <h3>my second blog</h3>
                  <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Homeblogs;
const Container = styled.div`
#lb{
    font-size:50px;
    font-weight:700;
    color:#583B04;
}
a{
    text-decoration:none;
}
.blog-title h3, p{
    color: black;  
}
.blog-title h3{
  color: #000000d1;
    font-weight: 700;
    margin: 10px 10px;
}
.blog-title p{
  margin: 0 10px;
}

`;
