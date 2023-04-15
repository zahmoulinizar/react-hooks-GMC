import React from 'react'
import Rating from './Rating'
const defImg = require('../img/def.jpg')

export default function MovieCard({movie}) {
  return (
    <div className="card col-3 m-1" key={movie.id} style={{width: "18rem"}}>
                <img src={movie.posterURL || defImg} className="card-img-top" alt={movie.title}
                    style={{height:350, width:'100%', objectFit:'container'}}/>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <Rating movie={movie}/> 
                  <p className="card-text">{movie.description}</p>
                  <div className='d-flex align-items-center justify-content-between'>
                    <a href="/#" className="btn btn-primary">Watch</a>
                    <p>{movie.genres}</p>
                  </div>
                </div>
            </div>
  )
}
