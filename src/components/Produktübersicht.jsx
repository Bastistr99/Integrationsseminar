import React from 'react';
import { useState, useEffect } from 'react';
import DataGridBewertungen from './DataGridBewertungen';

const Produktübersicht = (props) => {

 //Zeigt in der einzelnen Produktübersicht das Bild, Titel und Beschreibung als auch die einzelnen Bewertungen an

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

        const singleResult = manipulatedResult.filter(
            (manipulatedResult) => manipulatedResult.id == props.id
        );

        setProdukte(singleResult);

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
                    <h1>{produkte[0].name}</h1>
                    <img src={produkte[0].image} height="300"></img>
                    <p>{produkte[0].beschreibung}</p>
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