import React from 'react'
import { usePlayerDetails } from '../hooks/usePlayerDetails'

function TableItemDetail({ pick }) {
    const playerId = pick?.element

    const { error, data: playerDetails } = usePlayerDetails(playerId)
    console.log(playerDetails);

    return (
        <div className='flex flex-col content-start items-center border-2 rounded-md p-2 m-1 border-purple-100'>
            <div className='font-bold text-lg text-black'>{playerDetails?.web_name}</div>
            <div>{playerDetails?.event_points}</div>
        </div>
    )
}

export default TableItemDetail
