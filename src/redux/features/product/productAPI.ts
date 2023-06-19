import { IProduct } from "../../../Types";
import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        getProducts: builder.query<IProduct[], undefined>({
            query: () => "/products",
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                } catch (err) {
                    // Do Nothing
                }
            },
        }),
        getProduct: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                } catch (err) {
                    // Do Nothing
                }
            },

        })

    })
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;
