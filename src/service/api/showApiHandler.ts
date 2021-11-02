import axios from 'axios';
import { Show } from '../../models/Show';


export const getAllShows = (): Promise<Show[]> => {
    const url = `http://api.tvmaze.com/search/shows?q=girls`;
    return axios.get(url, {}).then(response => {
        return response.data.map((item: any) => {
            const show: Show = {
                id: item.show.id,
                image: item.show.image,
                name: item.show.name,
                description: item.show.summary,
                shortDescription: `${item.show.summary?.slice(0,50)}....... ${item.show.summary?.slice(-50)}`,
                linkToReview: item.show.url,
                score: item.show.rating?.average
            }
            return show;
        });
    }).catch(error => {
        console.error('Problem obtaining data from API');
        console.error(error);
    })
}
