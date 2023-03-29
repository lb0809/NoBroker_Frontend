import "./card-list.styles.css"
import Card from "../card/card.component";

const CardList = ({ categories }) => ( // we can use return also

    <div className="card-list"  data-aos="fade-up" data-aos-duration="1000">
        {categories.map(category => {
            return (
                <Card category={category} />
            )
        })}
    </div>
)




export default CardList;