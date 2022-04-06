import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import { LinkContainer } from "react-router-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { deleteBlog } from '../actions/blogActions'
import { useDispatch } from "react-redux";



const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{blog.title}</Card.Title>
        <Card.Text>{blog.content}</Card.Text>
        <Card.Title>{blog.creator}</Card.Title>
        <Card.Subtitle>{moment(blog.createdAt).fromNow()}</Card.Subtitle>
      </Card.Body>
      <Card.Footer
        style={{ display: "flex", justifyContent: "space-between" }}
        className="bg-white pb-0"
      >
        <LinkContainer to={`/update/${blog._id}`} style={{ cursor: "pointer" }}>
          <FaRegEdit size={22} />
        </LinkContainer>

        <RiDeleteBin2Line
          size={23}
          color="red"
          style={{ cursor: "pointer" }}
          onClick={() => {dispatch(deleteBlog(blog._id))}}
        />
      </Card.Footer>
    </Card>
  );
};

export default Blog;
