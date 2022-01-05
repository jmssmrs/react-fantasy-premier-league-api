import { useQuery } from 'react-query'
import axios from 'axios'

const fetchLeagueDetails = (leagueCode) => {
    return axios.get(`https://fantasy.premierleague.com/api/leagues-classic/${leagueCode}/standings/`)
}

export const useLeagueDetails = (gameWeekId, leagueCode) => {
    return useQuery(['league', gameWeekId, leagueCode], () => fetchLeagueDetails(leagueCode),
        {
            // The query will not execute until the gameWeekId exists
            enabled: !!gameWeekId,

        })
}