import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../api/favorites";
import { QueryKeys } from "@/constants";
import toast from "react-hot-toast";
import { IFavoriteItem } from "@/models/favorite/api";

export const useGetFavorites = () => {
  return useQuery<IFavoriteItem[], Error>({
    queryKey: [QueryKeys.FAVORITE],
    queryFn: async () => {
      try {
        const data = await getFavorites();
        return data || [];
      } catch (error) {
         toast.error('Ошибка при загрузке избранного');
         console.error(error);
        return [];
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  });
};