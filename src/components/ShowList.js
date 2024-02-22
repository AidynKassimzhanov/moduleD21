import React, { useContext, useState } from 'react'
import { Row } from 'react-bootstrap';
import { ShowItem } from './ShowItem';
import { MyContext } from '../index';

export const ShowList = () => {
    
    const {filteredShows} = useContext(MyContext);

    return (
        <div className='wrapper'>
            <Row className='d-flex show-list'>
                
                {filteredShows.length === 0 
                    ? <h5> «No shows are matching the current filter criteria.</h5> 
                    : filteredShows.map(show => (<ShowItem key={show.id}  show={show} />)) 
                }

            </Row>
        </div>
    )
}
