type TagProps = {
    title : string
}

type TagsProps = {
    tags : string[]
}

function Tag({title} : TagProps) {
    return (
        <div className="tag">
            {title}
        </div>
    )
}

export function Tags({tags} : TagsProps) {
    return (
        <div className="tags">
            {tags.map((t, index) => <Tag title={t} key={`tag-${index}`}/>)}
        </div>
    )
}