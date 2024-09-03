import React from 'react';

const AllTvs = ({ inventory }) => {
    // Functie om de naam van de tv te formatteren
    const formatTvName = (tv) => `${tv.brand} ${tv.name} (${tv.type})`;

    // Functie om de prijs te formatteren
    const formatTvPrice = (tv) => `€${tv.price.toFixed(2)}`;

    // Functie om de beschikbare maten te formatteren
    const formatTvSizes = (tv) => `Available sizes: ${tv.availableSizes.join(', ')} inch`;

    return (
        <div className='all-tvs'>
            <h2>Alle Tv's</h2>
            {inventory.map((tv, index) => (
                <div key={index} className='tv-item'>
                    {/* Dynamische afbeelding met de URL uit de `sourceImg` van de tv */}
                    <img className='tvPhoto' src={tv.sourceImg} alt={tv.name} />
                    <div className='tv-details'>
                        <h3>{formatTvName(tv)}</h3>
                        <p>{formatTvPrice(tv)}</p>
                        <p>{formatTvSizes(tv)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllTvs;
