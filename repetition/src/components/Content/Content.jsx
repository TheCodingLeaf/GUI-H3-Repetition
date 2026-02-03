import pic from '../../assets/aaaa.jpg';

export function Content({paragraph1, paragraph2, paragraph3, pic}){

    return(
        <>
        <ul>
            {pic}
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
        <img src={pic} width={500} height={500}/>
        </>
    )
}