import React from 'react'

const ModalDetalle = ({ item , index }) => {
    return (
        <>
            <div className="modal fade" id={index} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle del Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">

                            <div className="row py-2">
                                <div className="col-md-5">
                                    <img src={item.flags.png} className="card-img-top img-thumbnail" alt="..." loading="lazy" />

                                </div>
                                <div className="col-md-7">
                                    <h5>{item.name.common}</h5>
                                    <h5 className="text-danger">Region : {item.region}</h5>
                                    <p className="text-success">Poblacion : {item.population}</p>
                                </div>

                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalDetalle