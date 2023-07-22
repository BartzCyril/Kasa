import React, { useState } from "react";

type DropDownProps = {
    title: string,
    content: string | string[],

}

export function DropDown({title, content}: DropDownProps) {

    const [open, setOpen] = useState<boolean>(false)

    const handleOnClick = () => {
        setOpen(!open)
    }

    return (
        <div className="dropdown">
            <div>
                <h3>{title}</h3>
                {open ? <img src="../img/arrow-up.svg" alt="close the content" onClick={handleOnClick}/> :
                    <img src="../img/arrow-down.svg" alt="open the content" onClick={handleOnClick}/>}
            </div>
            <div className={open ? 'dropdown-open'  : 'dropdown-close'}>
                {typeof content === "string" ? <p>{content}</p> : <p>{content.map((c, index) => <React.Fragment
                    key={`dropdown-content-${index}`}>{c}<br/></React.Fragment>)}</p>}
            </div>
        </div>
    )
}