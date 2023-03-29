import "./hero-card.styles.scss"

const HeroCard = () => {
    return (
        <div className="hero-card-container" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1662706286989-f56a4db83211?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8c2t1c2NyYXBlcnx8fHx8fDE2NjY4OTkyNTY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=270)`,}}>
            {/* <img src={`../../assets/i${id}.jpg`} alt={` ${title}`} /> */}
            <h1>NoBroker</h1>
            <h2>for all your property needs</h2>
            {/* <p>{email}</p> */}
        </div>
    )
}

export default HeroCard