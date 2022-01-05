import { useQuery } from 'react-query'
import axios from 'axios'

const fetchManagerPicks = (managerId, gameWeekId) => {
    return axios.get(`https://fantasy.premierleague.com/api/entry/${managerId}/event/${gameWeekId}/picks/`)
}

export const useManagerPicks = (managerId, gameWeekId) => {
    return useQuery(['picks', managerId, gameWeekId], () => fetchManagerPicks(managerId, gameWeekId))
}