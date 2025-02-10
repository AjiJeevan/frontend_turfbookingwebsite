import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Turf(props) {

  const [token,setToken] = useState()
  const navigate = useNavigate()
  const userInfo = useSelector((state)=>(state.user))

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"))
  // },[token])

  const handleViewDetails = async () => {
    try {
      // setToken(localStorage.getItem("token"))
      if ( userInfo.isUserAuth && userInfo.role == "user"){
        navigate(`turf-details/${props.turfInfo._id}`);
      }
      else if (userInfo.isUserAuth && userInfo.role == "manager") {
        navigate(`turf-details/${props.turfInfo._id}`);
      }
      else {
        alert("Please login to seethe details")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <Container>
      <Card className="p-2 mt-0" id={props.turfInfo._id}>
        <Card.Img
          variant="top"
          src={props.turfInfo.image}
          style={{ height: "200px", objectFit: "contain" }}
          className="mt-0 p-0"
        />
        <Card.Body className="align-items-center ">
          <Card.Title className="text-center">
            {props.turfInfo?.name}
          </Card.Title>
          <Card.Text className="text-center">
            <b>AED {props.turfInfo?.price} / Hour</b>
          </Card.Text>
          {!userInfo.isUserAuth ? (
            <></>
          ) : (
            <Button variant="success" onClick={handleViewDetails}>
              VIEW DETAILS
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Turf