import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { SHOW_SEATS_ROUTE } from '../consts'

export const ShowItem = ({show}) => {

    const navigate = useNavigate()

  return (
    <div className='show-item'>
        <Col 
            onClick={() => navigate(SHOW_SEATS_ROUTE + '/' + show.id, { state: { data: show }}) }
            // onClick={() => console.log(show.concertId)}
        >
            <Card>
                <div key={show.id}>
                    <p> {show.start.slice(0, 10)}</p>
                    <h3> {show.artist}</h3>
                    <p> {show.location.name}</p>
                    <p> {show.start.slice(11, 16)} - {show.end.slice(11, 16)} </p>
                </div>
            </Card>
        </Col>
    </div>
  )
}
