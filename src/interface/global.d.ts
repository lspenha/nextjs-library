export interface ResponseBookItem {
  id: string;
  volumeInfo: Book;
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
