type GradeProps = {
    grade : number
}

export function Grade({grade} : GradeProps) {

    const stars = []

    for (let i=0 ; i < 5 ; i++) {
        if (i < grade)
            stars.push(<img src="../img/star.svg" alt="star"/>)
        else
            stars.push(<img src="../img/empty-star.svg" alt="empty star"/>)
    }

    return (
        <div className="stars">
            {stars}
        </div>
    )
}