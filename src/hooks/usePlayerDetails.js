import { useQuery } from 'react-query'
import axios from 'axios'

const fetchPlayerDetails = () => {
    return axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
}

export const usePlayerDetails = (playerId) => {
    return useQuery('player', fetchPlayerDetails,
        {
            select: (playersDetails) => {
                const playerDetail = playersDetails?.data.elements.find(curPlayer => curPlayer.id === playerId)
                return playerDetail
            },

        })
}