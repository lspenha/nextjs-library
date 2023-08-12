"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { BookDetails } from "@/components";

const BookDetailsPage = () => {
  const router = usePathname();

  const parts = router.split("/");
  const bookId = parts[parts.length - 1];

  const [bookValueDetails, setBookValueDetails] = useState(null);

  useEffect(() => {
    if (bookId) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((response) => {
          setBookValueDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching book details:", error);
          setBookValueDetails(null);
        });
    }
  }, [bookId]);

  if (!bookValueDetails) {
    return <p>Loading...</p>;
  }

  const { volumeInfo } = bookValueDetails;

  return (
    <div>
      <Link href="/">Back to Home</Link>
      <BookDetails book={volumeInfo}></BookDetails>
    </div>
  );
};

export default BookDetailsPage;
