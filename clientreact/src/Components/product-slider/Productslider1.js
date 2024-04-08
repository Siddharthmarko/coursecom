import React, { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { BsSuitHeartFill, BsCart3, BsBell } from "react-icons/bs";
import {useSelector} from 'react-redux'
import axios from "axios";
const baseUrl = process.env.REACT_APP_URL;

function Productslider1() {
  const [allCourses, setAllCourses] = useState([]);
  const [images, setImages] = useState([]);
  const user = useSelector((state) => state.user)
  // const [currentIndex, setCurrentIndex] = useState(0);

  const responseCourse = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/getAllCourses`
      );
      setAllCourses(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const addCartto = async (id) => {
      if(!user.id){
        cogoToast.error('login first')
        return;
      }
      try {
          const res = await axios.post(`${baseUrl}/add-to-cart`, {
            userId: user.id,
            itemId: id,
          });
          cogoToast.success('Course added to the cart');
      }  catch (error) {
        console.log(error);
        cogoToast.error("Course already in the cart");
      }
  }

  console.log(allCourses);

  useEffect(() => {
    responseCourse();
  }, []);
  return (
    <>
      <Container>
        <div className="container">
          <h2 className="text-center mb-5" id="exc">
            Explore More Courses
          </h2>
        </div>
        <div className="container-fluid">
          <ul class="nav nav-pills mb-3 ms-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-python-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-python"
                type="button"
                role="tab"
                aria-controls="pills-python"
                aria-selected="true"
              >
                Finance Literacy
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-java-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-java"
                type="button"
                role="tab"
                aria-controls="pills-java"
                aria-selected="false"
              >
                JAVA
              </button>
            </li>
          </ul>
          <div
            className="tab-content my-3 mb-5 bg-light"
            id="pills-tabContent"
          >
            <div
              className="container-fluid pe-5 ps-5 my-3 mb-3 py-4 pb-4 tab-pane fade show active"
              id="pills-python"
              role="tabpanel"
              aria-labelledby="pills-python-tab"
            >
              <div className="row">
                {allCourses.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 course-box"
                  >
                    <div className="card course-card d-flex border-0 ">
                      <div className="relative">
                        <img
                          // src={item.thumbnails}
                          src="https://pbs.twimg.com/media/GBUMcNwWQAEWtb_.jpg:large"
                          className="card-img-top"
                          alt="Video Thumbnail"
                        />
                        <div
                          className="absolute"
                          style={{ top: "10px", right: "10px" }}
                        >
                          <div className="relative">
                            <BsSuitHeartFill className="icons" />
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            Ultimate Financial Course
                          </h5>
                          <p className="text-center">{item.instructor}</p>
                          <div>
                            <h5 className="text-center  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>

                          <h5 className="text-center">Price - ₹{item.price}</h5>
                          <div className="d-flex justify-content-center">
                            <button 
                            className="btn btn-primary mt-1"
                            onClick={() => addCartto(item.id)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-java"
              role="tabpanel"
              aria-labelledby="pills-java-tab"
            >
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 course-box">
                  <div className="card course-card d-flex mr-3 border">
                    <div className="relative">
                      <img
                        src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                        className="card-img-top"
                        alt="Video Thumbnail"
                      />
                      <div
                        className="absolute"
                        style={{ top: "10px", right: "10px" }}
                      >
                        <div className="relative">
                          <BsSuitHeartFill className="icons" />
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Ultimate Financial Course
                        </h5>
                        <p className="text-center">Bigbull</p>
                        <div>
                          <h5 className="text-center  ">4.9</h5>
                          <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="far fa-star fa-sm"></i>
                            </li>
                          </ul>
                        </div>

                        <h5 className="text-center">Price - ₹10000</h5>
                        <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-primary mt-1"
                            onClick={() => addCartto(8)}
                            >
                              Add to Cart
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 course-box">
                  <div className="card course-card d-flex mr-3 border">
                    <div className="relative">
                      <img
                        src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                        className="card-img-top"
                        alt="Video Thumbnail"
                      />
                      <div
                        className="absolute"
                        style={{ top: "10px", right: "10px" }}
                      >
                        <div className="relative">
                          <BsSuitHeartFill className="icons" />
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Ultimate Financial Course
                        </h5>
                        <p className="text-center">Bigbull</p>
                        <div>
                          <h5 className="text-center  ">4.9</h5>
                          <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                              <i className="far fa-star fa-sm"></i>
                            </li>
                          </ul>
                        </div>

                        <h5 className="text-center">Price - ₹10000</h5>
                        <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-primary mt-1"
                            onClick={() => addCartto(9)}
                            >
                              Add to Cart
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-cc"
              role="tabpanel"
              aria-labelledby="pills-cc-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-c"
              role="tabpanel"
              aria-labelledby="pills-c-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-javascript"
              role="tabpanel"
              aria-labelledby="pills-javascript-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-jquery"
              role="tabpanel"
              aria-labelledby="pills-jquery-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-react"
              role="tabpanel"
              aria-labelledby="pills-react-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-css"
              role="tabpanel"
              aria-labelledby="pills-css-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade"
              id="pills-html"
              role="tabpanel"
              aria-labelledby="pills-html-tab"
            >
              <div className="card-group">
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow ">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card d-flex mr-3 shadow">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg"
                    className="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video className="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Productslider1;

const Container = styled.div`
.course-box {
  box-shadow: 13px 18px 32px -19px rgba(0,0,0,0.75);
  margin-right: 40px
}
`;
