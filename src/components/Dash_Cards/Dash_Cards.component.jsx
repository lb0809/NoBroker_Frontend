import React from "react";
import "./Dash_Cards.styles.css";
import { cardsData } from "../../data/Data";

import DashCard from "../Dash_Card/Dash_Card.component";

const DashCards = () => {
    return (
        <div className="DashCards">
            {cardsData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <DashCard
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default DashCards;
