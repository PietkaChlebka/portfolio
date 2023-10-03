import "../../../scss/main.scss";
import styles from "./styles.module.scss";
import decorationImg from "../../../assets/Decoration.svg";
import { useState } from "react";
import classNames from "classnames";
import ReactPaginate from "react-paginate";

function WhomWeHelp() {
  const fundations = {
    title: "Fundacja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    items: [
      {
        name: "“Dbam o Zdrowie”",
        motto:
          "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        info: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        name: "“Dla dzieci”",
        motto: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        info: "ubrania, meble, zabawki",
      },
      {
        name: "“Bez domu”",
        motto:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
        info: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: "“Bez domu”",
        motto:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
        info: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: "“Bez domu”",
        motto:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
        info: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: "“Bez domu”",
        motto:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
        info: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: "“Bez domu”",
        motto:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
        info: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: "“Bez domu”",
        motto:
          "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
        info: "ubrania, jedzenie, ciepłe koce",
      },
    ],
  };

  const organizations = {
    title: "Organizacja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    items: [
      {
        name: "“Lorem ipsum 1”",
        motto: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        info: "Egestas, sed, tempus",
      },
      {
        name: "“Lorem ipsum 2”",
        motto:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        info: "Ut, aliquam, purus, sit, amet",
      },
      {
        name: "“Lorem ipsum 3”",
        motto: "Scelerisque in dictum non consectetur a erat nam.",
        info: "Mi, quis, hendrerit, dolor",
      },
      {
        name: "“Lorem ipsum 4”",
        motto: "Scelerisque in dictum non consectetur a erat nam.",
        info: "Mi, quis, hendrerit, dolor",
      },
      {
        name: "“Lorem ipsum 5”",
        motto: "Scelerisque in dictum non consectetur a erat nam.",
        info: "Mi, quis, hendrerit, dolor",
      },
      {
        name: "“Lorem ipsum 6”",
        motto: "Scelerisque in dictum non consectetur a erat nam.",
        info: "Mi, quis, hendrerit, dolor",
      },
    ],
  };

  const gatherings = {
    title: "Zbiórka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    items: [
      {
        name: "“Lorem ipsum 1”",
        motto: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        info: "Egestas, sed, tempus",
      },
      {
        name: "“Lorem ipsum 2”",
        motto:
          "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        info: "Ut, aliquam, purus, sit, amet",
      },
      {
        name: "“Lorem ipsum 3”",
        motto: "Scelerisque in dictum non consectetur a erat nam.",
        info: "Mi, quis, hendrerit, dolor",
      },
    ],
  };

  const [elements, setElements] = useState(fundations);
  const [activeBtn, setActiveBtn] = useState("fundations");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  return (
    <section className={styles.helpInfoSection} name="whoWeHelp">
      <div className={styles.contentContainer}>
        <h3 className={styles.header}>Komu pomagamy?</h3>
        <img className={styles.decoration} src={decorationImg} />
        <div className={styles.btnContainer}>
          <button
            className={classNames([
              styles.fundationsBtn,
              activeBtn === "fundations" ? styles.active : "",
            ])}
            onClick={() => {
              setElements(fundations);
              setActiveBtn("fundations");
              setCurrentPage(1);
            }}
          >
            Fundacjom
          </button>
          <button
            className={classNames([
              styles.fundationsBtn,
              activeBtn === "organizations" ? styles.active : "",
            ])}
            onClick={() => {
              setElements(organizations);
              setActiveBtn("organizations");
              setCurrentPage(1);
            }}
          >
            Organizacjom <br />
            pozarządowym
          </button>
          <button
            className={classNames([
              styles.gatheringsBtn,
              activeBtn === "gatherings" ? styles.active : "",
            ])}
            onClick={() => {
              setElements(gatherings);
              setActiveBtn("gatherings");
              setCurrentPage(1);
            }}
          >
            Lokalnym zbiórkom
          </button>
        </div>
        <p className={styles.description}>{elements.description}</p>
        <div className={styles.orgContainer}>
          {elements.items
            .slice(
              currentPage * postsPerPage - postsPerPage,
              currentPage * postsPerPage
            )
            .map((item, index) => (
              <div key={index} className={styles.sampleElement}>
                <div className={styles.orgInfoContainer}>
                  <p className={styles.orgHeader}>
                    {elements.title} {item.name}
                  </p>
                  <p className={styles.orgMotto}>{item.motto}</p>
                </div>
                <p className={styles.orgDetails}>{item.info}</p>
              </div>
            ))}
        </div>
        <div className={styles.pages}>
          {Array.from(
            { length: Math.ceil(elements.items.length / 3) },
            (_, index) => (
              <button
                className={classNames([
                  styles.pageBtn,
                  currentPage === index + 1 ? styles.active : "",
                ])}
                onClick={() => {
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default WhomWeHelp;
