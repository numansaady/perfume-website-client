import React from "react";
import { Accordion } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div>
      <PageTitle title="Blogs"></PageTitle>
      <h2>All About Questions and Answer</h2>
      <div className="container text-start">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Differences Between JavaScript vs Node JS
            </Accordion.Header>
            <Accordion.Body>
              <h3>JavaScript</h3>
              <ul>
                <li>
                  Javascript is a programming language that is used for writing
                  scripts on the website.{" "}
                </li>
                <li>Javascript can only be run in the browsers.</li>
                <li>It is basically used on the client-side.</li>
                <li>
                  Javascript is capable enough to add HTML and play with the
                  DOM.
                </li>
                <li>
                  Javascript can run in any browser engine as like JS core in
                  safari and Spidermonkey in Firefox.
                </li>
              </ul>
              <h3>NodeJS</h3>
              <ul>
                <li>NodeJS is a Javascript runtime environment.</li>
                <li>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </li>
                <li>It is mostly used on the server-side.</li>
                <li>Nodejs does not have capability to add HTML tags.</li>
                <li>
                  V8 is the Javascript engine inside of node.js that parses and
                  runs Javascript.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              When should you use nodejs and when should you use mongodb
            </Accordion.Header>
            <Accordion.Body>
              <h3>When should you use nodejs</h3>
              <p>
                Node.js is lightweight and efficient for apps that require a
                continuous connection from the browser to the server, which
                allows them to update immediately with new posts or user
                actions.{" "}
              </p>

              <p>
                Additionally, Node.js can implement microservices for tracking
                and other features of the geo-distributed systems that make up
                the IoT. Real-time capabilities and a data-centric approach make
                it popular for IoT apps and devices.
              </p>

              <p>
                Node.js also works well for apps expecting a huge traffic load
                that processes large numbers of requests on the client-side. It
                can simultaneously handle multiple requests and provide prompt
                responses.
              </p>

              <h3>when should you use mongodb</h3>
              <p>
                NoSQL databases like MongoDB are a good choice when your data is
                document-centric and doesn’t fit well into the schema of a
                relational database, when you need to accommodate massive scale,
                when you are rapidly prototyping, and a few other use cases.
              </p>

              <p>
                MongoDB is the most popular of the new breed of non-relational
                NoSQL databases. Specifically, it’s a document database, also
                called a document-oriented database or a document store.
              </p>
              <p>
                Documents hold semistructured data, usually represented in a
                format like JSON or XML, and each document is associated with a
                unique key. Key values are typically a path or a URI that can be
                used to retrieve the associated document from the database. The
                keys are indexed, making it efficient to retrieve the associated
                documents.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Differences between sql and nosql databases.
            </Accordion.Header>
            <Accordion.Body>
              <h3>SQL</h3>
              <li>
                  Relational Database Management System (RDBMS)
              </li>
              <li>These databases have fixed or static or predefined schema</li>
              <li>
                These databases are not suited for hierarchical data storage.
              </li>
              <li>These databases are best suited for complex queries</li>
              <h3>NoSQL</h3>
              <li>Non-relational or distributed database system.</li>
              <li>They have dynamic schema</li>
              <li>
                These databases are best suited for hierarchical data storage.
              </li>
              <li>These databases are not so good for complex queries</li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
