import React from 'react';
import { Container } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { getCurrentAuthState } from "../redux/selectors/auth";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector(getCurrentAuthState);
  return (
    <Container>
      <h1>
        {user && <span>Welcome {user}, please visit <Link to='/products'>store</Link> to buy something</span>}
        {!user && <span>Hello, please <Link to='/signin'>login</Link> to see products</span>}
      </h1>
    </Container>
  );
}

export default Home;
