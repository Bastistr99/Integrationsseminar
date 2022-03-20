import React from 'react';
import { useState, useEffect } from 'react';
import DataGridBewertungen from './DataGridBewertungen';

const Produktübersicht = (props) => {

    const [produkte, setProdukte] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);

    async function ProduktDaten() {
        const data = await fetch("http://localhost:3001/get_produkte");
        const result = await data.json();

        const manipulatedResult = await result.map(({
        _id: id,
        ...rest
        }) => ({
        id,
        ...rest
        }));

        setProdukte(manipulatedResult);
        setIsLoading(false);
        
    };
    
    useEffect(() => {
        ProduktDaten()
    }, []);


    return(
        <>           
            {!isLoading && (
                <>
                    <div>
                    <h1>{produkte[props.id].name}</h1>
                    <img src={produkte[props.id].image} height="300"></img>
                    <p>{produkte[props.id].beschreibung}</p>
                    </div>

                    <div>
                        <DataGridBewertungen id={props.id}/>
                    </div>
                </>               
            )}
        </>
    );

};

export default Produktübersicht;