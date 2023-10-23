type GradeProps = {
    grade : number
}

export function Grade({grade} : GradeProps) {

    const stars = []

    for (let i=0 ; i < 5 ; i++) {
        if (i < grade)
            stars.push(<img src="/Kasa//img/star.svg" alt="star" key={`stars-${i}`}/>)
        else
            stars.push(<img src="/Kasa//img/empty-star.svg" alt="empty star" key={`stars-${i}`}/>)
    }

    return (
        <div className="stars">
            {stars}
        </div>
    )
}