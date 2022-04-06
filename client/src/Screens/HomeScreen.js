import React, { useState, useEffect } from "react";

import { Spinner, Row, Col } from "react-bootstrap";
import Blog from "../components/Blog";
import { useDispatch, useSelector} from "react-redux";
import { fetchBlogs } from "../actions/blogActions";

const HomeScreen = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogs)

  useEffect(() => {
    if(!blogs[0]){
      dispatch(fetchBlogs())

    }
    
  
  }, [dispatch]);
  

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
