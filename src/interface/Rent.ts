interface Host {
    name : string,
    picture : string
}

export interface RentInterface  {
    id : string,
    title : string,
    cover : string,
    pictures : string[],
    description : string,
    host : Host,
    equipments : string[],
    tags : string[],
    rating : string
}