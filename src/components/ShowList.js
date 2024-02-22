import React, { useContext, useState } from 'react'
import { Row } from 'react-bootstrap';
import { ShowItem } from './ShowItem';
import { MyContext } from '../index';

export const ShowList = () => {
    
    const {filteredShows} = useContext(MyContext);

    return (
        <div className='wrapper'>
            <Row className='d-flex show-list'>
                
                {filteredShows.map(show => (
                    <ShowItem show={show} />
                ))}
            </Row>
        </div>
    )
}
