type RentHeaderProps = {
    title : string,
    location : string
}

export function RentHeader({title, location} : RentHeaderProps) {
    return (
        <div className="rent-header">
            <h2>{title}</h2>
            <p>{location}</p>
        </div>
    )
}