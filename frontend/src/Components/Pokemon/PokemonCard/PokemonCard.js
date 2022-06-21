import React from 'react';
import { PokemonAPI } from '../PokemonAPI/PokemonAPI';
import './PokemonCard.css';
import Modal from '../../Modal/Modal';

export const PokemonCard = ({ url }) => {
    const estado = PokemonAPI(url);
    const { cargando, data } = estado;

    return (
        <>
            {
                cargando ? <h1>Cargando</h1> :
                    <div className="card-div">
                        <div className="card" data-bs-toggle="modal" data-bs-target={`#id${data.id}`}>
                            <img className='card-header-img' src="https://png.pngtree.com/thumb_back/fw800/back_pic/03/53/40/0557973e56aeb9d.jpg" alt="Avatar" />

                            <div className="container">
                                <img className='card-body-img' src={data.sprites.front_default} alt="Avatar" />
                                <h4>{data.id + " - "}<b>{data.forms[0].name}</b></h4>
                                <span>
                                    {
                                        data.types.map((type, idx) => {
                                            return (
                                                <div key={idx} className="pokemon-type-text">
                                                    {type.type.name}
                                                </div>
                                            );
                                        })}
                                </span>
                            </div>
                        </div>
                        <Modal id={`#id${data.id}`} titulo={data.name} contenido="" />
                    </div>
            }

        </>
    )
}