import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const { anime} = this.props;
    return( 
      <div className="anime-list">
        {anime.map((animeItem, index) =>(
          <AnimeCard 
            key={index}
            name={animeItem.name}
            image={animeItem.image}
          />
        ))}
      </div>
      );
  }
}

export default AnimeList;