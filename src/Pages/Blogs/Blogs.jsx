import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
             <h3 className='text-center text-primary mt-5 mb-3'>Blogs</h3>
             <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" className=''>
                            <Accordion.Header className=''>What is CORS?</Accordion.Header>
                            <Accordion.Body>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why are we using firebase? What other options do we have to implement authentication?</Accordion.Header>
                            <Accordion.Body>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                            Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

                            When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How does the private route work?</Accordion.Header>
                            <Accordion.Body>
                            React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple application with following components:

                            Home: a public route that everyone can access to.
                            Dashboard: a private route that only authenticated user can access to.
                            Sign-in: a restricted route that unauthenticated user can see. To explain more, we don’t want to show the sign-in page after logged in to the site. If the authorised user goes to the sign-in page, we will redirect to dashboard page.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                            <Accordion.Body>
                            Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.

                            Node incorporates the V8 JavaScript engine, the same one used in Google Chrome and other browsers. It is written in C++ and can run on macOS, Linux, Windows and other systems. The engine parses and executes JavaScript code. It can operate independently of a browser environment, either embedded in a C++ application or implemented as a standalone program. The V8 engine compiles JavaScript internally, using just-in-time (JIT) processes to speed up execution.
                            </Accordion.Body>
                        </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;