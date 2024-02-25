import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from './Row'


export const Stage = () => {
    const {rows} = useSelector(state => state.seatings)

    return (
        <div className="stage">
            <div className="stageButton">
                Stage
            </div>
            {rows.map(row => <Row key={row.id} row={row}/>)}
        </div>
    )
}
