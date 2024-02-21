import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import { ShowItem } from './ShowItem';

export const ShowList = (props) => {
    

    return (
        <div className='wrapper'>
            <Row className='d-flex show-list'>
                {props.concerts.map(show => (
                    <ShowItem show={show} />
                ))}
            </Row>
            
        </div>
    )
}
