import {React, useState,useEffect} from "react";
import Layout from "../../components/Layout";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input";
import { login,isUserLoggedIn } from '../../action'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from "react-router-dom";




function Signin(props) {

 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('')
const [error,setError]=useState('')
const auth=useSelector(state => state.auth)

   const dispatch=useDispatch()

  const userLogin = (e) => {
    e.preventDefault();
    const user =
      { email, password }
    dispatch(login(user))
  }
  if(auth.authenticate){
    return <Redirect to={`/`}/>
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                value={email}
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
