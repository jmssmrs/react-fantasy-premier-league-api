import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import TableItem from './TableItem'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useGameWeek } from '../hooks/useGameWeek'
import { useLeagueDetails } from '../hooks/useLeagueDetails'


function Table() {
    let [leagueCode, setLeagueCode] = useState();

    const { status, error, isFetching, data: curGameWeek } = useGameWeek()

    const gameWeekId = curGameWeek?.id

    const { isIdle, data: leagueDetails } = useLeagueDetails(gameWeekId, leagueCode)

    console.log(curGameWeek);
    console.log(leagueDetails);
    console.log(leagueCode);


    return (
        <div className="w-full px-4 pt-6 mb:pt-16">
            <div className="w-full md:w-3/4 mx-auto bg-white rounded-2xl">
                <div className='flex justify-between h-1/2 mb-4 items-center border-b-2 pb-1'>
                    <h1 className=' text-2xl md:text-3xl font-extrabold'>{curGameWeek?.name}</h1>
                    <input placeholder='League Code' className='border-gray-500 border-2 rounded-md w-1/4 px-1' type="text" onChange={e => setLeagueCode(e.target.value)}></input>
                </div>
                <div className="flex justify-between w-full px-4 text-sm md:text-lg font-bold text-left text-black mb-2">
                    <div className='flex flex-row w-full space-x-2'>
                        <h3 class="w-1/12">No.</h3>
                        <h3 class="w-1/2">Name</h3>
                        <h3 class="w-2/12">Points</h3>
                        <h3 class="w-2/12">GW</h3>
                    </div>
                    <div className='w-5 h-5'></div>
                </div>
                {leagueDetails?.data.standings.results.map(manager => <TableItem key={manager.id} manager={manager} gameWeekId={gameWeekId} />)}
            </div>
        </div>
    )
}

export default Table
