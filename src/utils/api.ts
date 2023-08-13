import axios from "axios";
import { ApiResponse, ResponseBookItem } from "../interface/global";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

interface FilterProps {
  q: string;
  startIndex: number;
  maxResults: number;
  filter?: string;
}

export const searchBooks = async (
  query: string,
  filters: string,
  startIndex: number,
): Promise<{ books: ResponseBookItem[]; totalItems: number }> => {
  const params: FilterProps = {
    q: query,
    startIndex: startIndex,
    maxResults: 9,
  };

  if (filters) {
    params.filter = filters;
  }

  try {
    const response = await axios.get<ApiResponse>(API_BASE_URL, {
      params,
    });

    if (response.data && response.data.items) {
      return {
        books: response.data.items,
        totalItems: response.data.totalItems,
      };
    }

    toast.error("Nenhum livro foi encontrado com este título.", {
      autoClose: 3000,
    });

    return { books: [], totalItems: 0 };
  } catch (error) {
    toast.error("Erro na busca de livros", { autoClose: 3000 });
    return { books: [], totalItems: 0 };
  }
};
