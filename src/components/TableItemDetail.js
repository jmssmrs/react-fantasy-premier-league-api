import React from 'react'
import { usePlayerDetails } from '../hooks/usePlayerDetails'

function TableItemDetail({ pick, position }) {

    const playerId = pick?.element
    const playerPosition = pick?.position

    const { error, data: playerDetails } = usePlayerDetails(playerId)
    console.log(playerDetails);

    return (
        <div className={`${playerDetails?.element_type === position ? playerPosition < 12 ? 'flex flex-col content-start items-center border-2 rounded-md p-2 m-1 border-purple-100' : 'hidden' : 'hidden'}`}>
            <div className='font-bold text-lg text-black'>{playerDetails?.web_name}</div>
            <div>{playerDetails?.event_points}</div>
        </div>
    )
}

export default TableItemDetail
