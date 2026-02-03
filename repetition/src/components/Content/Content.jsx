import "./Content.css"

export function Content({paragraph1, paragraph2, paragraph3, pic}){

    return(
        <>
        <ul>
            <li>
                {paragraph1},
            </li>
            <li>
                {paragraph2},
            </li>
            <li>
                {paragraph3},
            </li>
            <img src={pic} width={50} height={50}/>
        </ul>

        </>
    )
}