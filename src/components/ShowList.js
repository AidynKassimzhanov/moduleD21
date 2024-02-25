import React, { useContext, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { ShowItem } from './ShowItem';
import { MyContext } from '../MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredShows, setIsFilter } from '../store/showReducer';
// import { MyContext } from '../index';

export const ShowList = () => {
    
    const {filteredShows} = useSelector(state => state.show);

    return (
        <div className='wrapper'>
            {filteredShows.length === 0 
                ?   <h3> «No shows are matching the current filter criteria.</h3>
                :   <Row className='display-flex'>
                        { filteredShows.map(show => (<ShowItem key={show.id}  show={show} />)) }
                    </Row>
            }
        </div>
    )
}
