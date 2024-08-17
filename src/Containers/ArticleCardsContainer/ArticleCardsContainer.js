import React from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";

const movies = [
  {
    title: "Apartmani 23",
    description:
      "Apartmani 23 provides free Wifi and rooms with air conditioning in Novi Pazar. Featuring a private entrance, the apartment allows guests their privacy.",
    btn: "16.08.2024",
    ocena: "9.7",
  },
  {
    title: "Harry Potter",
    description:
      "naucna fantastika jos gora od prethodne, gleda se za Novu Godinu",
    btn: "13.04.2014",
  },
  {
    title: "Seven",
    description: "Triler",
    btn: "13.11.2003",
  },
  {
    title: "Star Wars",
    description: "Ocaj, jendom recju",
    btn: "03.12.2014",
  },
];

const ArticleCardsContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        marginTop: "100px",
      }}
    >
      {movies.map((movie) => (
        <ArticleCard
          key={movie.title}
          //   title={movie.title}
          //   description={movie.description}
          //   btn={movie.btn}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default ArticleCardsContainer;

// komponenta za hotele
// prima title, description, ocene
// defaultna slika je slika Hotela Vrbaka
// 5 hotela, sve to u Container da se ubaci, i da se prikaze kao sto je na
// : https://www.booking.com/searchresults.html?ss=Novi+Pazar%2C+Central+Serbia%2C+Serbia&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaMEBiAEBmAExuAEZyAEM2AEB6AEB-AECiAIBqAIDuALW14O2BsACAdICJDk4MDBjZGNlLWE4YjctNDk0Ny1iY2IyLThiOGQyNGNlODMxONgCBeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-90309&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=23a881eba5d40102&ac_meta=GhAyM2E4ODFlYmE1ZDQwMTAyIAAoATICZW46Ck5vdmkgUGF6YXJAAEoAUAA%3D&group_adults=2&no_rooms=1&group_children=0
