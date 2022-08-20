import React from 'react';
import Banner from '../components/Banner/Banner'
import SectionCategories from '../components/SectionCategories/SectionCategories'
import SectionProduct from '../components/SectionProduct/SectionProduct';

function Home(props) {
    return <>
        <Banner />
        <SectionCategories />
        <SectionProduct />
    </>;
}

export default Home;