
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set( 'X-RapidAPI-Key','24f42a2232mshb2c47419f543e07p13d4cbjsn55b2418cfefc');

            return headers;
        },
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/world'}),
        getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    }),

});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
}=shazamCoreApi;