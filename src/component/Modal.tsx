import React, {useState} from 'react';

export default function Modal(props: any) {
    const pokemonStats = props.pokemonStats;
    const pokemonName = props.pokemonName;
    const closeModal = props.closeModal;
    return (
        <div className="modal-background">
            <div className="modal-container">
                <h2 className="title">Details for</h2>
                <h1>{pokemonName}</h1>
                <div className="modal-body">
                    <p>Height: {pokemonStats.height}</p>
                    <p>Weight: {pokemonStats.weight}</p>
                </div>
                <div className="modal-footer">
                    <div className="button" onClick={() => closeModal(false)}>Close</div>
                </div>
            </div>
        </div>
    );
}