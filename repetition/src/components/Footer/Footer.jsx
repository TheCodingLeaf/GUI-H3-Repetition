export function Footer({email, telefon, address}){

    return(
        <>
        <h3>Kontakt Info</h3>
        <ul>
            <li>{email}</li>
            <li>{telefon}</li>
            <li>{address}</li>
        </ul>
        </>
    )
}