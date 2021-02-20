import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <h1 style={{textAlign:"center"}}>Welcome to the <Link to="/gists">Github Gists</Link></h1>
    );
}

export default Home;