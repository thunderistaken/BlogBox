import React from "react";
import { Container } from "react-bootstrap";
import UpdateBlog from "../components/UpdateBlog";
import { useParams } from "react-router-dom";
const UpdateScreen = () => {
  const { id } = useParams();
  return (
    <Container>
      <UpdateBlog id={id} />
    </Container>
  );
};

export default UpdateScreen;
