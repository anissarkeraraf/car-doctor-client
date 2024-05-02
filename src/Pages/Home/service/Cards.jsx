import React from 'react';

const Cards = ({ service }) => {

    const { img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title font-bold opacity-80">{title}</h2>
                <div className='text-orange-600'>
                    <p className=' font-bold'>Price : ${price}</p>
                </div>

            </div>
        </div>
    );
};

export default Cards;