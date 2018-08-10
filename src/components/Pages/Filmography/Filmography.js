import React, { Component } from "react";
import Film from "../../Film/Film";
import "./Filmography.css";

import ArtistCover from "../../../assets/img/filmog/2015-artist.jpg";
import BerlinNightsCover from "../../../assets/img/filmog/2015-berlinnights.jpg";
import CleanCover from "../../../assets/img/filmog/2015-clean.jpg";
import GoodbyeStrangerCover from "../../../assets/img/filmog/2016-goodbyestranger.jpg";
import InCCover from "../../../assets/img/filmog/2015-inc.jpg";
import ParapraxisCover from "../../../assets/img/filmog/2014-parapraxis.jpg";
import PedestriansCover from "../../../assets/img/filmog/2015-pedestrians.jpg";
import TwerpCover from "../../../assets/img/filmog/2017-twerp.jpg";
export class filmography extends Component {
  state = {
    filmography: [
      {
        name: "Parapraxis",
        img: ParapraxisCover,
        year: 2014,
        credits: "Mixing, composition, sound design",
        link: "https://vimeo.com/85123898"
      },
      {
        name: "Artist",
        img: ArtistCover,
        year: 2015,
        credits: "Mixing, restoration, sound design",
        link: "http://www.peaceframeproductions.com/artist.html"
      },
      {
        name: "Berlin Nights",
        img: BerlinNightsCover,
        year: "2015-2016",
        credits: "Mixing, engineering, restoration",
        link: "http://www.peaceframeproductions.com/berlin-nights.html"
      },
      {
        name: "Clean",
        img: CleanCover,
        year: 2015,
        credits: "Mixing, restoration, sound design",
        link: "http://www.peaceframeproductions.com/clean.html"
      },
      {
        name: "In C",
        img: InCCover,
        year: 2015,
        credits: "Mixing, mastering",
        link: "http://www.peaceframeproductions.com/in-c.html"
      },
      {
        name: "Pedestrians",
        img: PedestriansCover,
        year: 2015,
        credits: "Mixing, restoration, sound design",
        link: "http://www.peaceframeproductions.com/pedestrians.html"
      },
      {
        name: "Goodbye, Stranger",
        img: GoodbyeStrangerCover,
        year: 2016,
        credits: "Mixing, restoration, sound design",
        link: "https://vimeo.com/142576425"
      },
      {
        name: "Twerp",
        img: TwerpCover,
        year: 2017,
        credits: "Mixing, restoration",
        link: "https://www.facebook.com/twerpmovie/"
      }
    ]
  };
  render() {
    const filmography = this.state.filmography.map(film => (
      <Film
        credits={film.credits}
        img={film.img}
        key={film.link}
        link={film.link}
        name={film.name}
        year={film.year}
      />
    ));
    return (
      <section className="Filmography">
        <h1 className="Filmography__header">Filmography</h1>
        <div className="Filmography__filmgrid">{filmography}</div>
      </section>
    );
  }
}

export default filmography;
