import React, { useState } from 'react';
import { PokemonAPI } from './PokemonAPI';
import { Cards } from '../PokemonCard/Cards';

import './Pokemon.css';

const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const estado = PokemonAPI(url);
    const { cargando, data } = estado;

    cargando ? console.log('cargando') : console.log(data.results);

    return (
        <>
            {
                cargando ? <h1>Cargando</h1> :
                    <>
                        <Cards results={data.results} />

                        <div className='pagination-div'>
                            <button className='pagination-btn' onClick={() => setUrl(data.previous)}>
                                Previous
                            </button>
                            <div></div>
                            <button className='pagination-btn' onClick={() => setUrl(data.next)}>
                                Next
                            </button>
                        </div>
                    </>
            }
        </>
    )
}
export default Pokemon;