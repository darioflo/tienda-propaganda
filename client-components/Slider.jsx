'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '@/client-components/client-components-styles/Slider.css';
import image1 from '@/images/imagen1.jpg'
import image2 from '@/images/imagen2.jpg'
import image3 from '@/images/imagen3.gif'
import image4 from '@/images/imagen4.jpg'



const images = [
    image1,
    image2,
    image3,
    image4,
    image1,
    image2,
    image3,
    image4
]


export default function Slider() {
    const [paginaActual, setPaginaActual] = useState(0);
    const imagenes = images.length;

    const nextPage = () => {
        setPaginaActual(paginaActual === imagenes - 1 ? 0 : paginaActual + 1);
    };

    const prevPage = () => {
        setPaginaActual(paginaActual === 0 ? imagenes - 1 : paginaActual - 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextPage();
        }, 5000);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginaActual]);

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <button className='left-arrow' onClick={prevPage}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#e0e0e0" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" /></svg></button>
            <button className='right-arrow' onClick={nextPage}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#e0e0e0" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" /></svg></button>
            {images.map((image, index) => {
                return (
                    <div
                        className={`slider-container ${index === paginaActual ? 'slide active' : 'slide'}`}
                        key={index}
                    >
                        {index === paginaActual && (<Image src={image} alt='Imagen del carrusel' className='image' />)}
                    </div>
                );
            })}
            <div className="indicator">
                {images.map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={index === paginaActual ? 'circle active' : 'circle'}
                        />
                    );
                })}
            </div>
        </section>
    );
};
