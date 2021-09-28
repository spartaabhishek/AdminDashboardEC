import React from "react";
import Layout from "../../components/Layout";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input";
function Signup() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    value=""
                    type="text"
                    placeholder="First Name"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    value=""
                    type="text"
                    placeholder="Last Name"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                value=""
                type="text"
                placeholder="Email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                value=""
                type="password"
                placeholder="Password"
                onChange={() => {}}
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

export default Signup;
