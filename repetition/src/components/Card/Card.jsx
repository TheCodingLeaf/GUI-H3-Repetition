import "./Card.css"

export function Card({title, image, pris, description, knap}){

    return(
        <>
        <ul>
            <h2>{title}</h2>
            <img src={image} width={200} height={200}/>
            <p>{description}</p>
            <h3>{pris}</h3>
            <div className="button">{knap}</div>
        </ul>
        </>
    )
}