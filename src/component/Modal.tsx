import React, {useState} from 'react';

export default function Modal(props: any) {
    const pokemonStats = props.pokemonStats;

    return (
        <div className="modal-background">
            <div className="modal-container">
                <h1 className="title">Details</h1>
                <div className="modal-body">
                    <p>Height: {pokemonStats.height}</p>
                    <p>Weight: {pokemonStats.weight}</p>
                </div>
                <div className="modal-footer">
                    <div className="button">Close</div>
                </div>
            </div>
        </div>
    );
}