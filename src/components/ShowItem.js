import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const ShowItem = ({show}) => {
  return (
    <div className='show-item'>
        <Col 
            md={3} 
            className={"mt-3"} 
            // onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
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
