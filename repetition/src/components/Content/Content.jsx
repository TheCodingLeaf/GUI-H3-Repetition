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
        </ul>
        <img src={pic} width={50} height={50}/>
        </>
    )
}