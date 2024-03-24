export type Data = {
    id: number
    firstname: string
    lastname: string
}[]

export type Response = {
    users: []
    total:number
    skip:number
    limit:number
}[]