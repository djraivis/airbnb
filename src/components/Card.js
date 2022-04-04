import React from "react"

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={`./images/${props.coverImg}`}
                className="card--image"
                alt="Product"
            />

            <div className="card--stats">
                <img src="./images/star.png" className="card--star" alt="star logo" />
                <span className="card--rating">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>

            <p className="card-title"> {props.title} </p>
            <p>
                <span className="bold">From ${props.price} </span>/ person
            </p>
        </div>
    )
}

export default Card
