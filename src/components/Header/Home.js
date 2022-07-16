import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;