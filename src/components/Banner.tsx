type BannerProps = {
    title ?: string
    picture : string
    filter : boolean
}
export function Banner({title, picture, filter} : BannerProps) {
    return (
        <div className="banner">
            <img src={`img/${picture}.png`} alt="banner" className={filter ? 'filter' : ''}/>
            {title && <h2>{title}</h2>}
        </div>
    )
}