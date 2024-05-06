import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ service }) => {

    const {_id, img, title, price } = service;

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
                <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-active btn-neutral">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Cards;