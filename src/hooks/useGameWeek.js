import { useQuery } from 'react-query'
import axios from 'axios'

const fetchGameWeek = () => {
    return axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
}

export const useGameWeek = () => {
    return useQuery('gameWeekDetails', fetchGameWeek,
        {
            select: (curGameWeek) => {
                const currentGameWeek = curGameWeek?.data.events.find(curGW => curGW.is_current === true)
                return currentGameWeek
            },

        })
}