"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { BookDetails, Loading } from "@/components";
import { API_BASE_URL } from "@/utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetailsPage = () => {
  const router = usePathname();

  const parts = router.split("/");
  const bookId = parts[parts.length - 1];

  const [bookValueDetails, setBookValueDetails] = useState(null);

  useEffect(() => {
    if (bookId) {
      axios
        .get(`${API_BASE_URL}/${bookId}`)
        .then((response) => {
          setBookValueDetails(response.data);
        })
        .catch(() => {
          toast.error("Erros na busca pelos detalhes do livro!", {
            autoClose: 3000,
          });
          setBookValueDetails(null);
        });
    }
  }, [bookId]);

  if (!bookValueDetails) {
    return <Loading />;
  }

  const { volumeInfo } = bookValueDetails;

  return (
    <div>
      <BookDetails book={volumeInfo}></BookDetails>
    </div>
  );
};

export default BookDetailsPage;
