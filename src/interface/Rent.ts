interface Host {
    name : string,
    picture : string
}

export interface Rent {
    id : string,
    title : string,
    cover : string,
    pictures : string[],
    description : string,
    host : Host,
    equipments : string[],
    tags : string[]
}