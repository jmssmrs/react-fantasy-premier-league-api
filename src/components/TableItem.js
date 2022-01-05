import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import TableItemDetail from './TableItemDetail'
import { useManagerPicks } from '../hooks/useManagerPicks'

function TableItem({ manager, gameWeekId }) {

    const managerId = manager?.entry

    const { error, data: managerPicks } = useManagerPicks(managerId, gameWeekId)
    console.log(managerPicks);

    return (
        <div className='mb-3'>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-8 text-sm font-medium text-left text-black bg-purple-100 rounded-3xl hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <div className='flex flex-row w-full space-x-2'>
                                <h3 class="w-1/12">{manager.rank}</h3>
                                <h3 class="w-1/2">{manager.player_name}</h3>
                                <h3 class="w-2/12">{manager.total}</h3>
                                <h3 class="w-2/12">{managerPicks?.data.entry_history.points}</h3>
                            </div>
                            <ChevronUpIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className='flex flex-col flex-wrap px-4 pt-4 pb-2 text-sm text-gray-500 items-center'>
                            <div className='flex'>{managerPicks?.data.picks.map(pick => <TableItemDetail key={pick.id} pick={pick} position={1} />)}</div>
                            <div className='flex'>{managerPicks?.data.picks.map(pick => <TableItemDetail key={pick.id} pick={pick} position={2} />)}</div>
                            <div className='flex'>{managerPicks?.data.picks.map(pick => <TableItemDetail key={pick.id} pick={pick} position={3} />)}</div>
                            <div className='flex'>{managerPicks?.data.picks.map(pick => <TableItemDetail key={pick.id} pick={pick} position={4} />)}</div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>


        </div >
    )
}

export default TableItem
