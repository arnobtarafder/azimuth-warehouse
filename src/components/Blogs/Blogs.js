import React from 'react'
import { Table } from 'react-bootstrap'
import Blog from './Blog'
import './Blogs.css'


const Blogs = () => {

    const blogs = [
        {
            "id": 1,
            "question": "What is the difference between javascript and nodejs?",
            "answer": "",
            "img": "https://i.ibb.co/dGDkr4v/1.jpg",
            "writer": ""
        },
        {
            "id": 2,
            "question": "When should you use nodejs and when should you use mongodb?",
            "answer": "",
            "img": "https://i.ibb.co/tY8dmnP/2.jpg",
            "writer": ""
        },
        {
            "id": 3,
            "question": "What is the differences between SQL and NoSQL databases?",
            "answer": "",
            "img": "https://i.ibb.co/Yh04YVw/3.jpg",
            "writer": ""
        },
        {
            "id": 4,
            "question": "What is the purpose of jwt and how does it work?",
            "answer": "",
            "img": "https://i.ibb.co/ZX2Cbkn/4.jpg",
            "writer": ""
        }
    ]


    return (
        <div className="blogs-container bg-img container">
            <div className="container">
                <div className="blogs-info">
                    <h1 className='text-decoration-underline fs-1 text-center my-5'>Frequently Asked Question (FAQ)</h1>

                    <div className="blog-info my-5 border py-5 shadow bg-body rounded">
                        <h3 className='text-2xl font-mono font-bold'>1. {blogs[0].question}</h3><br />

                        <div className="container col-lg-8 col-md-8 col-sm-8">
                            <Table striped bordered hover>
                                <thead className='container'>
                                    <tr>
                                        <th className='col-lg-1 col-sm-1 ol-md-1'>S.No</th>
                                        <th scope="col" className='col-lg-3 col-md-3 col-sm-3'>javascript</th>
                                        <th className='col-lg-3 col-md-3 col-sm-3' scope="col">nodejs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1. </td>
                                        <td className='text-start'>JavaScript is a lightweight, object-oriented programming language.
                                        </td>
                                        <td className='text-start'>Node JS is an interpreter or running environment for a JavaScript programming language </td>
                                    </tr>
                                    <tr>
                                        <td>2. </td>
                                        <td className='text-start'>JavaScript running in any engine like Spider monkey, JavaScript Core, V8.
                                        </td>
                                        <td className='text-start'>Node JS only support the V8 engine</td>
                                    </tr>
                                    <tr>
                                        <td>3. </td>
                                        <td className='text-start'>	It is basically used on the client-side for front-end development.</td>

                                        <td className='text-start'>It is mostly used on the server-side for back-end development.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4. </td>
                                        <td className='text-start'>JavaScript running in any engine like Spider monkey, JavaScript Core, V8.</td>
                                        <td className='text-start'>Node JS only support the V8 engine</td>
                                    </tr>
                                    <tr>
                                        <td>5. </td>
                                        <td className='text-start'> Javascript is capable enough to add HTML and play with the DOM.</td>
                                        <td className='text-start'>Nodejs does not have capability to add HTML tags.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className="blog-info my-5 border py-5 container shadow bg-body rounded">
                        <h3 className='text-2xl font-mono font-bolder'>2. {blogs[1].question} <br /></h3><br />
                        <p className='px-2'>
                            <strong>Node js</strong> is used in real-time messaging, or chatting system. Where the environment can support heavy traffic of multiple short messages. when messages are displayed to many users at the same time. Node is also used in IoT applications because this is fast and powerful and capable of handling large data flows. This node js also used in <strong>Collaborative tools, Data Streaming Application, Applications relying on scalability </strong> <br /><br />

                            <strong>MongoDB</strong> is a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases. MongoDB  is also used for early-stage startups that need a low barrier to entry but may experience sudden growth in customers and transactions.

                        </p><br />
                    </div>


                    <div className="blog-info my-5 border py-5 shadow bg-body rounded">
                        <h3 className='text-2xl font-mono font-bold'>3. {blogs[2].question}</h3><br />

                        <div className="container col-lg-8 col-md-8 col-sm-8">
                            <Table striped bordered hover>
                                <thead className='container'>
                                    <tr>
                                        <th className='col-lg-1 col-sm-1 ol-md-1'>S.No</th>
                                        <th scope="col" className='col-lg-3 col-md-3 col-sm-3'>SQL</th>
                                        <th className='col-lg-3 col-md-3 col-sm-3' scope="col">NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1. </td>
                                        <td className='text-start'>SQL databases use structured query language and have a predefined schema.
                                        </td>
                                        <td className='text-start'>NoSQL databases have dynamic schemas for unstructured data.</td>
                                    </tr>

                                    <tr>
                                        <td>2. </td>
                                        <td className='text-start'>SQL databases are vertically scalable.
                                        </td>
                                        <td className='text-start'>NoSQL databases are horizontally scalable.</td>
                                    </tr>

                                    <tr>
                                        <td>3. </td>
                                        <td className='text-start'>	SQL databases are table-based</td>

                                        <td className='text-start'>NoSQL databases are document, key-value, graph, or wide-column stores.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4. </td>
                                        <td className='text-start'>SQL databases are better for multi-row transactions</td>

                                        <td className='text-start'>NoSQL is better for unstructured data like documents or JSON.</td>
                                    </tr>

                                    <tr>
                                        <td>5. </td>
                                        <td className='text-start'>SQL databases are primarily called as Relational Databases</td>

                                        <td className='text-start'>NoSQL database are primarily called as non-relational or distributed database</td>
                                    </tr>
                                    
                                      <tr>
                                        <td>6. </td>
                                        <td className='text-start'>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability)</td>

                                        <td className='text-start'>NoSQL database follows CAP (Consistency, Availability and Partition tolerance).</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>


                    <div className="blog-info my-5 container px-3 border py-5 shadow bg-body rounded">
                        <h3 className='text-2xl font-mono font-bold'>4. {blogs[3].question}</h3><br />
                        <p className='font-thin'>
                            <strong>JWT</strong> or <strong>JSON Web Token</strong> is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWT is signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWT is used as a secure way to authenticate users and share information. Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same.
                             A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed. When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source.
                            <br /><br />

                            <strong>JWTs</strong> differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                             Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default Blogs;
