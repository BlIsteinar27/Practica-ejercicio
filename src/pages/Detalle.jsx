import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const API = 'https://restcountries.com/v3.1/name/';

const Detalle = () => {

    const params = useParams()
    const [datos, setDatos] = useState([])
    let URI = API + params.name
    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            //console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, [params.name]);


    return (
        <>
            <div className='container'>
                <h1 className='text-center py-4'>{params.name}</h1>
                {datos && datos.map((item, index) => (
                    <div key={index} className='row'>

                        <div className="col-md-5 ">
                            <img src={item.flags.png} alt="" className="img-fluid img-thumbnail" />
                        </div>
                        <div className='col-md-7'>
                            <h3>{item.name.common}</h3>
                            <p>
                                Código: { }<br />
                                Tipo: { }<br />
                                Categoria: { }<br />
                                Servir: { }<br />
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Detalle