import React, { useState } from "react";
import ReactFileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";
import * as api from "../axios/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBlog } from "../actions/blogActions";

const SubmitBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <Form
      className="d-grid gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(createBlog(blogData))

        navigate("/");
      }}
    >
      <Form.Group>
        <h1>Create a post</h1>
      </Form.Group>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          name="author"
          type="text"
          onChange={(e) =>
            setBlogData({ ...blogData, creator: e.target.value })
          }
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          name="content"
          type="text"
          as="textarea"
          rows={6}
          onChange={(e) =>
            setBlogData({ ...blogData, content: e.target.value })
          }
        ></Form.Control>
      </Form.Group>
      <Form.Label>Upload Image</Form.Label>
      <Form.Group>
        <ReactFileBase64
          multiple={false}
          onDone={({ base64 }) => {
            setBlogData({ ...blogData, image: base64 });
          }}
        />
      </Form.Group>

      <Button type="submit" variant="primary" block>
        POST.
      </Button>
    </Form>
  );
};

export default SubmitBlog;
