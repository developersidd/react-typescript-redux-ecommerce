import { apiSlice } from "../api/apiSlice";
export const videoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // endpoints here
        getVideos: builder.query({
            query: () => "/videos",
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;


                } catch (err) {
                    // Do Nothing
                }
            }
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                } catch (err) {
                    // Do Nothing
                }
            }
        }),
        getRelatedVideos: builder.query({
            query: (id) => `/videos?id_ne=${id}`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                } catch (err) {
                    // Do Nothing
                }
            }
        }),

    })
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } = videoApi;
