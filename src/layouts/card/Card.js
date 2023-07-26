import "./_card.scss";

export const Card = (props) => {
    return (
        <>
            <div className="prodCard m-1">
                <img src={props.myObject.src} alt="" />
                <button className="btn btn-primary rounded-pill">{props.myObject.tag}</button>
                <p>{props.myObject.name}</p>
                <p>{props.myObject.price} $</p>
            </div>
        </>
    )
}