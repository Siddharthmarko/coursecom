import React from "react";
import styled from "styled-components";

const RefundPolicy = () => {
  return (
    <>
      <Container>
        <div className="container mt-3">
          <h2>
            <strong>Refund & Cancelation Policy</strong>
          </h2>
          <p>
            Thank you for choosing Bigbulls. We are committed to providing
            quality products and services. Please review our return, refund, and
            cancellation policy below.
            <br />
            <br />
            <strong>Refund Policy:</strong> There is no refund policy but if
            solution we provided is not working that particular service amount
            will be refunded within 45 days after informing to us.
          </p>
          <p>
            <strong>Cancellation Policy:</strong> Client needs to inform us
            (Bigbulls) one month in advance for stopping or cancelling the
            subscription and refund will be done with in 45 Days after informing
            to us.
            <br />
            <br />
            <strong>Contact Us:</strong> For any questions regarding returns,
            refunds, or cancellations, please contact us at
            bigbulleducation0@gmail.com . We appreciate your business and look
            forward to providing you with exceptional services.
          </p>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
const Container = styled.div``;
