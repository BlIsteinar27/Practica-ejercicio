import React from 'react'
import ModalDetalle from './ModalDetalle'
import { Link } from 'react-router-dom'

const Card = ({ item , index }) => {
    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        <img src={item.flags.png} alt="" className="img-fluid p-0 card-img-top" />
                    </div>
                    <div className="card-body text-center">
                        <h5>{item.name.common}</h5>


                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-outline-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target={`#${index}`}>Ver mas</button>
                        <Link to={`/detalle/name/${item.name.common}`} href="#" className='btn btn-outline-primary btn-sm'>Detalles</Link>
                    </div>
                </div>
            </div>
            <ModalDetalle key={index} item={item}  index={index} />
        </>
    )
}

export default Card