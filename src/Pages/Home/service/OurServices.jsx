import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const OurServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/public/service.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div className='text-center mt-10 py-5'>
                <h2 className='text-orange-600 font-bold'>Service</h2>
                <h3 className='text-5xl font-medium mb-4'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br /> words which don't look even slightly believable. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                    {
                        services.map(service => <Cards key={service._id} service={service}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurServices;