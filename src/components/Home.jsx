import Footer from "./Footer";
import Header from "./Header";
import InfiniteScrollGallery from "./InfiniteScrollGallery";
import { useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <Header></Header>
      <InfiniteScrollGallery {...{ movies, setMovies }}></InfiniteScrollGallery>
      <Footer></Footer>
    </>
  );
}
