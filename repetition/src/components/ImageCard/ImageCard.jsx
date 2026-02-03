export function ImageCard({title,description,children}){

    return(
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
        </>
    )
}