import React from 'react'
import Card from './Card';
function Tours({tours,removeTours}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTours} />;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;