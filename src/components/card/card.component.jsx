import './card.styles.css'

const Card = ({ category }) => {
    const { id, title, imageUrl } = category;
    return (
        <div className="card-container" key={id} style={{ backgroundImage: `url(${imageUrl})`,}}>
            {/* <img src={`../../assets/i${id}.jpg`} alt={` ${title}`} /> */}
            <h2>{title}</h2>
            {/* <p>{email}</p> */}
        </div>
    )
    
}

export default Card;
