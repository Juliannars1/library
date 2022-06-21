import React from 'react';
import { PokemonCard } from './PokemonCard';
import './PokemonCard.css';

export const Cards = ({ results }) => {
    return (
        <div className='container'>
            <ul className='cards'>
                {
                    results.map(
                        p => (
                            <li className='cards-item' key={p.name}>
                                <PokemonCard url={p.url} />
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}