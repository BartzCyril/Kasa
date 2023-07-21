import {CSSProperties, useEffect, useRef, useState} from "react";

type DropDownProps = {
    title : string,
    content : string
}
export function DropDown({title, content} : DropDownProps) {

    const [open, setOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)
    const ref = useRef(null)
    const handleOnClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const div = ref.current as HTMLDivElement
        const p = div.childNodes[0] as HTMLParagraphElement
        if (open) {
            setTimeout(() => {
                setHeight(div.getBoundingClientRect().height + p.getBoundingClientRect().height + 10)
            }, 1000)
        } else {
            setHeight(0)
        }
    }, [open])

    return (
        <div className="dropdown">
            <div>
                <h3>{title}</h3>
                {open ? <img src="../img/arrow-up.svg" alt="close the content" onClick={handleOnClick}/> : <img src="../img/arrow-down.svg" alt="open the content" onClick={handleOnClick}/>}
            </div>
            <div className={open ? 'dropdown-open' : 'dropdown-close'} ref={ref} style={{ "--heightContentDropDown": `${height}px`} as CSSProperties}>
                <p>{content}</p>
            </div>
        </div>
    )
}