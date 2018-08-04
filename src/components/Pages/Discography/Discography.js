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
      }
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
