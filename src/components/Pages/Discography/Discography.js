import React, { Component } from "react";
import Record from "../../Record/Record";
import NonreturnerBarnowl from "../../../assets/img/discog/2006-nonreturner-barnowl.jpg";
import NonreturnerNonreturner from "../../../assets/img/discog/2008-nonreturner-nonreturner.jpg";
import CVadi20132014 from "../../../assets/img/discog/2014-cvadi-20132014.jpg";
import MireGiantsUprightTent from "../../../assets/img/discog/2014-miregiants-uprighttent.jpg";
import EnemyAirshipFalseEconomy from "../../../assets/img/discog/2015-enemyairship-falseeconomy.jpg";
import EnemyAirshipSmithereens from "../../../assets/img/discog/2015-enemyairship-smithereens.jpg";
import MireGiantsIntegrateAndDate from "../../../assets/img/discog/2015-miregiants-integrateanddate.jpg";
import CantalouperRoundingError from "../../../assets/img/discog/2016-cantalouper-roundingerror.jpg";
import EnemyAirshipSockhops from "../../../assets/img/discog/2016-enemyairship-sockhops.jpg";
import NevadaGreeneRaggedHollow from "../../../assets/img/discog/2016-nevadagreene-raggedhollow.jpg";
import SissyPaycheck from "../../../assets/img/discog/2016-sissypaycheck-sissypaycheck.jpg";
import WeirdVibersNewlyweds from "../../../assets/img/discog/2016-weirdvibers-newlyweds.jpg";
import DireBabeWhoMe from "../../../assets/img/discog/2017-direbabe-whome.jpg";
import NewTonguesDarkLight from "../../../assets/img/discog/2017-newtongues-darklight.jpg";
import "./Discography.css";
export class Discography extends Component {
  state = {
    discography: [
      {
        name: "Barn Owl",
        artist: "Nonreturner",
        year: 2006,
        credits: "Recording, Engineering, Mixing, Mastering, Vocals, Guitars",
        cover: NonreturnerBarnowl,
        link: "https://nonreturner.bandcamp.com/album/barn-owl-ep"
      },
      {
        name: "the Nonreturner",
        artist: "Nonreturner",
        year: 2008,
        credits: "Recording, Engineering, Mixing, Mastering, Vocals, Keys, Guitars, Programming",
        cover: NonreturnerNonreturner,
        link: "https://nonreturner.bandcamp.com/album/the-nonreturner"
      },
      {
        name: "2013-2014",
        artist: "C. Vadi",
        year: 2014,
        credits: "Mastering",
        cover: CVadi20132014,
        link: "https://cvadi.bandcamp.com/album/2013-2014"
      },
      {
        name: "Upright Tent",
        artist: "Mire Giants",
        year: 2014,
        credits: "Recording, Engineering, Mixing, Mastering, Producer, Keys",
        cover: MireGiantsUprightTent,
        link: "https://miregiants.bandcamp.com/album/upright-tent-ep"
      },
      {
        name: "False Economy",
        artist: "Enemy Airship",
        year: 2015,
        credits: "Recording, Engineering, Mixing, Mastering, Vocals, Guitars",
        cover: EnemyAirshipFalseEconomy,
        link: "https://enemyairship.bandcamp.com/album/false-economy"
      },
      {
        name: "Smithereens",
        artist: "Enemy Airship",
        year: 2015,
        credits: "Recording, Engineering, Mixing, Mastering, Vocals, Keys, Guitars",
        cover: EnemyAirshipSmithereens,
        link: "https://enemyairship.bandcamp.com/album/smithereens"
      },
      {
        name: "Integrate and Date",
        artist: "Mire Giants",
        year: 2015,
        credits: "Recording, Engineering, Mixing, Mastering, Producer, Additional Vocals, Keys, Guitars",
        cover: MireGiantsIntegrateAndDate,
        link: "https://miregiants.bandcamp.com/album/integrate-and-date"
      },
      {
        name: "Rounding Error",
        artist: "Cantalouper",
        year: 2016,
        credits: "Drum Tracking, Mixing, Mastering",
        cover: CantalouperRoundingError,
        link: "https://cantalouper.bandcamp.com/album/rounding-error"
      },
      {
        name: "Sockhops",
        artist: "Enemy Airship",
        year: 2016,
        credits: "Recording, Engineering, Mixing, Mastering, Guitars",
        cover: EnemyAirshipSockhops,
        link: "https://enemyairship.bandcamp.com/track/sockhops-nonreturner-cover"
      },
      {
        name: "Ragged Hollow",
        artist: "Nevada Greene",
        year: 2016,
        credits: "*Recording and *Engineering on 'Earthquake Hollow'",
        cover: NevadaGreeneRaggedHollow,
        link: "https://nevadagreene.bandcamp.com/album/ragged-hollow-3"
      },
      {
        name: "Sissy Paycheck",
        artist: "Sissy Paycheck",
        year: 2016,
        credits: "Recording, Engineering, Mixing, Mastering, Producer",
        cover: SissyPaycheck,
        link: "https://sissypaycheck.bandcamp.com/album/sissy-paycheck"
      },
      {
        name: "NEWLYWEDS",
        artist: "Weird Vibers",
        year: 2016,
        credits: "Recording, Engineering, Mixing, Mastering",
        cover: WeirdVibersNewlyweds,
        link: "https://weirdvibers.bandcamp.com/album/newlyweds"
      },
      {
        name: "Who, Me?",
        artist: "Dire Babe",
        year: 2017,
        credits: "Recording, Engineering, Mixing, Mastering, Producer, *Guitar on 'Waylines'",
        cover: DireBabeWhoMe,
        link: "https://direbabe.bandcamp.com/album/who-me"
      },
      {
        name: "Dark/Light",
        artist: "New Tongues",
        year: 2017,
        credits: "*Recording, *Engineering, *Mixing, *Programming on 'Salt the Fields'",
        cover: NewTonguesDarkLight,
        link: "https://newtongues.bandcamp.com/album/dark-light"
      },
    ]
  };
  render() {
    return (
      <section className="Discography">
        <div className="Discography__container">
          <h1 className="Discography__container-header">Discography</h1>
          <div className="Discography__container-discoGrid">
            {this.state.discography.map(record => (
              <Record
                key={record.cover}
                name={record.name}
                artist={record.artist}
                year={record.year}
                credits={record.credits}
                cover={record.cover}
                link={record.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Discography;
