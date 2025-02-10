import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import ManagerTurf from "../../components/manager/ManagerTurf";
import TurfPlaceholder from "../../components/shared/TurfPlaceholder";
import Turf from "../../components/shared/Turf";

function ManagerHomePage(props) {
  const userInfo = useSelector((state) => (state.user))
  const [turfList, isLoading, error] = useFetch("/manager/assigned-turf");
  console.log("Assigned Turfs ===== ", turfList)

  const handleViewDetails = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
      <Container>
      {isLoading ? (
        <>
          <TurfPlaceholder />
        </>
      ) : (
        <>
          <Row>
            {turfList?.map((turf, index) => {
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
                  {console.log(turf)}
                  <section className="shadow p-3 mb-5 bg-body rounded">
                    <Turf turfInfo={turf} />
                  </section>
                </Col>
              );
            })}
          </Row>
        </>
      )}
      </Container>
  );
}

export default ManagerHomePage;
