import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["products"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/product",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,

      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery , useGetProductByIdQuery, useDeleteProductMutation, usePostProductMutation } = productApi;
