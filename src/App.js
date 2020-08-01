import React from "react";
import "./App.css";
import Board from "./components/Board";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  Container,
  Col,
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Card>
        <CardHeader>Minesweep</CardHeader>
        <CardBody>
          <CardTitle>Board</CardTitle>
          <CardSubtitle>Title</CardSubtitle>
          <CardText>Text</CardText>
          <Container className="d-flex">
            <Col></Col>
            <Col>
              {" "}
              <Board />
            </Col>
            <Col></Col>
          </Container>
          <Button>Sign in</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
