import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsEye, BsPencilSquare, BsTrash } from 'react-icons/bs';

function AdminTurf(props) {
  return (
    <Container>
      <Card className="p-2 mt-0" style={{height:"400px"}}>
        <Card.Img
          variant="top"
          src={props?.turfInfo?.image}
          style={{ height: "200px", objectFit: "contain" }}
          className="mt-0 p-0"
        />
        <Card.Body>
          <div className="align-items-center">
            <Card.Title>{props.turfInfo?.name}</Card.Title>
            <Card.Text>
              <b>AED {props.turfInfo?.price} / Hour</b>
            </Card.Text>
          </div>
          <div className="d-flex justify-content-start pt-2">
            <ButtonGroup className="btn-sm" aria-label="Turf-options">
              <Button variant="secondary"><BsEye /></Button>
              <Button variant="secondary">
                <BsPencilSquare/>
              </Button>
              <Button variant="secondary">
                <BsTrash />
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminTurf