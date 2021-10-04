import {React,useDispatch} from "react";
import Layout from "../../components/Layout";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input";
import { login } from '../../action'


function Signin() {
  // const dispatch=useDispatch()
  const userLogin = (e) => {
    e.preventDefault();
    const user =
      { email: 'neelesh@gmail.com', password: "neelesh123" }
    login(user)
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                value=""
                type="text"
                placeholder="Email"
                onChange={() => { }}
              />

              <Input
                label="Password"
                value=""
                type="password"
                placeholder="Password"
                onChange={() => { }}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signin;
