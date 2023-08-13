export interface ApiResponse {
  items: ResponseBookItem[];
  totalItems: number;
}

export interface ResponseBookItem {
  id: string;
  volumeInfo: Book;
  totalItems: number;
}

export interface Book {
  title: string;
  authors: string[];
  language: string;
  publisher: string;
  description: string;
  dimensions: {
    height: string;
    width: string;
    thickness: string;
  };
  imageLinks: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
    smallThumbnail: string;
    thumbnail;
  };
}
