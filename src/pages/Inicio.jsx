import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const API = 'https://restcountries.com/v3.1/all';


const Inicio = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            <h1 className='text-center py-4'>Inicio</h1>
            <div className="container">
                <h3 className="text-center py-4">Paises ({datos.length})</h3>
                <div className="row">
                    {datos && datos.map((item,index) => (
                        <Card key={index} item={item} index={index}/>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Inicio