import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../Context/AuthProvider';
// import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const [key, setKey] = useState('login');

    const  {signInWithGoogle, signInWithGithub, createUser, signIn, updateUserProfile} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then((result) => {
            // setUser(result.user);
            console.log(user);
        }).catch((error) => {
            console.error(error);
        });
    }

    const handleGithubLogin =()=>{
        signInWithGithub()
        .then((result) => {
            // setUser(result.user);
            
        }).catch((error) => {
            console.log(error)
        });
    }

    const handleOnSubmitLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((result) => {
            console.log(result.user.displayName);
            // setUser(result.user.displayName);
            form.reset();
        })
        .catch((error) => {
           console.log(error);
        });

        
    }
    
    const handleOnSubmitSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then((result) => {
           console.log(result.user);
           form.reset();
           handleUpdateUser(name,photoURL);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    const handleUpdateUser =(name,photoURL) =>{
        const profile= {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {
            
        }).catch((error) => {
            console.error(error)
        });
    }
    return (
        <div>
                <div className="mt-3 w-25 mx-auto  border border-primary">
                    <div className="m-3">

                       
                    <Tabs  id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-6">
                        <Tab eventKey="login" title="Log In">
                            <Form onSubmit={handleOnSubmitLogin}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button className='w-100' variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Tab>
                        
                        <Tab eventKey="SignUp" title="SignUp">
                            <Form onSubmit={handleOnSubmitSignUp}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Photo Url</Form.Label>
                                    <Form.Control name='photoURL' type="text" placeholder="Enter email" />
                                </Form.Group>
                                


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button className='w-100'  variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form>
                        </Tab>
                        
                    </Tabs>


                    <ButtonGroup vertical className='w-100 mt-3'>
                        <Button  onClick={handleGoogleSignIn} variant="outline-primary">  Log in with Google</Button>
                        <Button onClick={handleGithubLogin} className='mt-3' variant="outline-secondary"> Log In with Github</Button>
                    </ButtonGroup>
                        {/* <FaGoogle></FaGoogle>   <FaGithub></FaGithub>  */}
                       
                    </div>
                </div>
    
        </div>
    );
};

export default Login;