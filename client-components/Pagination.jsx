/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useState, useEffect } from 'react';
import '@/client-components/client-components-styles/Pagination.css'
import CardProducts from './CardProducts';
import axios from 'axios';

export default function ProductsPagination({ title, url }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const productsPerPage = 5;

    async function fetchData() {
        try {
            console.log(url);
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    /*useEffect(() => {
        const timer = setInterval(() => {
            goNext()
        }, 5000)

        return () => clearInterval(timer)
    }, [data]);*/

    function goNext() {
        setCurrentIndex((prevIndex) => prevIndex + productsPerPage >= data.length - 1 ? 0 : prevIndex + 1);
    }

    function goPrev() {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? data.length - productsPerPage : prevIndex - 1);
    }



    const productsVisibles = data.slice(currentIndex, currentIndex + productsPerPage);

    return (
        <div className="pagination-container">
            <div className="pagination-top">
                <h3 className="products-title">{title}</h3>
                <span className='line'></span>
                <div className="pagination-buttons">
                    <button onClick={goPrev} disabled={currentIndex === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#505050" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" /></svg>
                    </button>
                    <span className='line-buttons'></span>
                    <button onClick={goNext} disabled={currentIndex + productsPerPage >= data.length}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#505050" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" /></svg>
                    </button>
                </div>
            </div>
            <div className="products">
                {productsVisibles.map((product, index) => (
                    <CardProducts key={index} element={product} className="animate__animated animate__backOutRight" />
                ))}
            </div>
        </div>
    );
}