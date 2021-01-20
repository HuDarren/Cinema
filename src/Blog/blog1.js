import React from "react";

export default function Database() {
  return (
    <div className="blog-container">
      <div className="blog-space2" />
      <img
        alt="img"
        className="blog-image"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593441004/Database-Marketing-Banner_arps3w.jpg"
      />
      <p className="blog-text">
        This post is about NoSQL Databases and a SQL Databases.
      </p>
      <p className="blog-text">What is a SQL Database ?</p>
      <p>
        SQL, Structure Query Language, is a language used to query data from the
        database, such as to insert, update, delete, join, etc. A database is an
        organized collection of structured information, stored electronically in
        a computer system. A SQL database works with tables to store data and
        there are restrictions to the data that goes into each table. There is a
        clear schema that is defined by the fields ( columns ) and each entry,
        represented as records ( rows ) will have values for those fields. In
        SQL databases, you work with multiple tables that may have relationships
        to each other. There are multiple types of relations, such as “One to
        One” or “One to Many” relationship. Since each table is related to one
        another , this allow users to traverse through it and filter out tables,
        rows in different ways. Examples of SQL databases include Oracle,
        Postgres, and MS-SQL.
      </p>
      <p className="blog-text">Pros / Cons </p>
      <li>
        SQL databases uses schemas so it can provide a predictable layout since
        each field and row is structured.
      </li>
      <li>
        There are relations in SQL databases and this will make it less complex
        to update a data in the table since data related to that field will also
        have the new update. It is used more often when there is a lot of update
        / delete queries.
      </li>
      <li>
        Data is distribute across multiple tables. This will allow you to write
        complex queries but queries might take a long time if there are a lot of
        tables to search through.
      </li>
      <li>
        Vertical scaling would be less complex than Horizontal Scaling because
        of all the relationships between tables and more data would need to be
        moved / split to other servers.
      </li>
      <p />
      <p className="blog-text">What is a NoSQL Database? </p>
      <p>
        A NoSQL databases do not use tables. Collections are used similar to
        fields and documents are used similar to rows in SQL database tables.
        The dataset looks like JSON and usually merged / nested in collections.
        There are usually no relations and information that are similar are
        stored in the same collection and there is no need to query through
        different collections because all the information needed can be obtained
        in the single collection. Examples of NoSQL Databases includes MongoDB,
        Redis, Cassandra.
      </p>
      <p className="blog-text">Pros / Cons </p>
      <li>
        There is no set schema and this allow more flexibility when adding data.
      </li>
      <li>
        Horizontal scaling and Vertical Scaling are both possible because there
        is no relationships and it is less complex to split/ move data to new
        servers.
      </li>
      <li>
        There will be more duplicate data because all information are stored in
        their own collection.
      </li>
      <li>
        It has great performance for read and & write requests but is more
        complex when it comes to update / delete requests.
      </li>
      <div className="blog-space" />
    </div>
  );
}
