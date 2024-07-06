import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const API = 'https://restcountries.com/v3.1/region/';

const Continentes = () => {

  const params = useParams()
  const [datos, setDatos] = useState([])

  let URI = API + params.region
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
  }, [params.region]);

  return (
    <>
      <div className="container">
        <h1 className="text-center py-4">{params.region}</h1>
        <div className="row">
          {datos && datos.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Continentes