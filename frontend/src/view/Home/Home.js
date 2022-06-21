import React from 'react';
import Pokemon from '../../Components/Pokemon/PokemonAPI/Pokemon';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';



const Home = () => {
    return (
        <>
            <Header />
            <Pokemon />
            <Footer />
        </>
    );

}

export default Home;