import React from 'react'
import { useSelector } from 'react-redux'
import Turf from '../../components/shared/Turf';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Contacts from '../../components/shared/Contacts';
import { useNavigate } from 'react-router-dom';

function SearchResult() {
  const token = localStorage.getItem("token")
  const searchResult = useSelector((state) => state.searchResult.value)
  const navigate = useNavigate()
  
  const handleLogin = async () => {
    try {
      navigate(`/login`);
    } catch (error) {
      console.log(error);
    }
  };
    return (
      <>
        <section></section>
        <section id="section-search">
          <Container className="mt-5">
            <Row>
              {searchResult?.map((turf, index) => {
                return (
                  <Col
                    key={turf?._id}
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    xxl={3}
                  >
                    <Turf turfInfo={turf} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        {!token ? (
            <>
                <div className="d-flex justify-content-center mt-3">
                  <Button variant="success" onClick={handleLogin}>
                    LogIn / SignUp to see the details
                  </Button>
                </div>
                <section id="contact">
                  <Contacts />
                </section>
            </>
        ) : (
          <></>
        )}
      </>
    );
}

export default SearchResult