import React, { useState, useEffect } from "react";
import { fetchBlogs } from "../axios";
import { Spinner, Row, Col } from "react-bootstrap";
import Blog from "../components/Blog";
const HomeScreen = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await fetchBlogs();
      console.log(data);
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <>
      <h1>Current blogs</h1>
      {!blogs.length ? (
        <Spinner animation="border" />
      ) : (
        <Row>
          {blogs.map((blog) => (
            <Col sm={12} md={6} lg={4} xl={3} className="m-auto" key={blog._id}>
              <Blog blog={blog} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
