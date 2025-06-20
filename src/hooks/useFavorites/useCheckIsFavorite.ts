// import { useQuery } from "@tanstack/react-query";
// import { getFavoriteItem } from "@/api/favorites";

// export const useCheckIsFavorite = (productId: number, initialValue: boolean) => {
//   return useQuery<boolean, Error>({
//     queryKey: ['favorite-status', productId],
//     queryFn: async () => {
//       try {
//         return await getFavoriteItem(productId);
//       } catch (error) {
//         console.error(error);
//         return initialValue;
//       }
//     },
//     initialData: initialValue,
//     retry: 1,
//     retryDelay: 1000,
//   });
// };