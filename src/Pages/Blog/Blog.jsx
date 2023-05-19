import React from "react";

const Blog = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        FreQuently Asked Question
      </h1>

      <div className="collapse border-2 w-full mx-auto md:w-4/6 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content ">
          <p className="my-1">
            An access token is a key issued by server when a user successfully
            login to the server side. The access token is used to authenticate
            the user.
          </p>
          <p className="my-1">
            An refresh token is also a key issued by server. Refresh token stay
            for long time than access token. It is used to generate new access
            token.
          </p>
          <p className="my-1">
            Access token should stored in secure way. It is kept especially in
            serverside in .env file.
          </p>
        </div>
      </div>
      <div className="collapse border-2 py-2 w-full mx-auto md:w-4/6 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow">
          2. What is express js? What is Next JS?
        </div>
        <div className="collapse-content ">
          <p className="my-1">
            Express.js is a freamwork of nodeJS. It simplifies the HTTP request,
            routing, middleware integration and response handling for web
            application. It allows developers to create server side application
            using JavaScript. On the other hand Next.js is a framwork build on
            the top of the react.js for server side rendering. It enhance
            performance and SEO benifits.
          </p>
        </div>
      </div>
      <div className="collapse border-2 py-2 w-full mx-auto md:w-4/6 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow">
          3. Compare SQL and NoSQL databases.
        </div>
        <div className="collapse-content ">
          <p className="my-1">
            i. Structure: SQL databases use a structured data model where data
            is organized in a tabular form. NoSQL databases use flexiable data
            model. They can store unstructured data.
          </p>
          <p className="my-1">
            ii. Query Language: SQL database use Structured Query Language to
            perform CRUD operation. NoSQL databases use various query languages,
            such as MongoDB's query language to perform CRUD operation.
          </p>
          <p className="my-1">
            iii. Flexibility: SQL database is used for large application because
            its data are well defined. NoSQL databse is used for flexiable and
            medium application.
          </p>
        </div>
      </div>

      <div className="collapse border-2 py-2 w-full mx-auto md:w-4/6 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title collapse-arrow">
          4. What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content ">
          <p className="my-1">
            MonoDB aggregation is a method to perform advance data aggregation
            operation. It helps developers to transform data, perform
            calculations, apply filters, and extract data from collection of
            mongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
