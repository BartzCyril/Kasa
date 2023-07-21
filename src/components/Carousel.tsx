import {useState} from "react";

type CarouselProps = {
    pictures : string[]
}

type operator = "+" | "-"

export function Carousel({pictures} : CarouselProps) {

    const [index, setIndex] = useState<number>(0)

    const handleClick = (operator : operator) => {
        const delta = operator === "+" ? 1 : -1;
        if ((pictures.length - 1) === index && operator === "+")
            setIndex(0)
        else if (index === 0 && operator === "-")
            setIndex(pictures.length - 1)
        else
            setIndex(index + delta)
    }

    if (pictures.length > 1) {
        return (
            <div className="carousel">
                <img src="../img/arrow-left.svg" alt="move backward" onClick={() => handleClick("-")} className="carousel-move-backward"/>
                <img src={`${pictures[index]}`} alt="Appartement pictures" className="carousel-img"/>
                <img src="../img/arrow-right.svg" alt="move forward" onClick={() => handleClick("+")} className="carousel-move-forward"/>
                {window.innerWidth > 768 ? <p>{`${index + 1}/${pictures.length}`}</p> : ''}
            </div>
        )
    }

    return (
        <div className="carousel">
            <img src={`${pictures[index]}`} alt="Appartement pictures" className="carousel-img"/>
        </div>
    )

}