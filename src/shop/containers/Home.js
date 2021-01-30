import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <h1 style={{textAlign:"center"}}>Welccome to the <Link to="/products">Shop</Link></h1>
    );
}

export default Home;
