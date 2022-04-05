import React, { useState, useEffect } from "react";
import ReactFileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateBlog, fetchBlog } from "../axios";

const UpdateBlog = ({ id }) => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await fetchBlog(id);
      setBlogData(data);
    };
    getBlog();
  }, [id]);

  const navigate = useNavigate();

  return (
    <Form
      className="d-grid gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        updateBlog(id, blogData);
        navigate("/");
      }}
    >
      <Form.Group>
        <h1>Update a post</h1>
      </Form.Group>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
          value={blogData.title}
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
          value={blogData.creator}
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
          value={blogData.content}
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
        UPDATE.
      </Button>
    </Form>
  );
};

export default UpdateBlog;
