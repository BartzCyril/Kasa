type RentHostProps = {
    name : string,
    img : string
}

export function RentHost({name, img} : RentHostProps) {
    const words = name.split(' ');
    return (
        <div className="rent-host">
            <p>
                {words[0]}
                <br />
                {words[1]}
            </p>
            <img src={img} alt="appartement host" />
        </div>
    )
}