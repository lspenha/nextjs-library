import axios from "axios";
import { ResponseBookItem } from "./Types/global";

const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

interface ApiResponse {
  items: ResponseBookItem[];
}

export const searchBooks = async (
  query: string,
  startIndex: number,
  category: string,
  startDate: string,
  endDate: string,
): Promise<ResponseBookItem[]> => {
  try {
    const response = await axios.get<ApiResponse>(API_BASE_URL, {
      params: {
        q: query,
        subject: category,
        after: startDate,
        before: endDate,
        startIndex: startIndex,
        maxResults: 9,
      },
    });

    if (response.data && response.data.items) {
      return response.data.items;
    }

    return [];
  } catch (error) {
    console.error("Erro na busca de livros:", error);
    return [];
  }
};
