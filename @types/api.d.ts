interface Item  {
    _id?: string,
    title?: string,
    img?: string | null | ArrayBuffer,
    link?: string,
    category?: string
}

type GetItems = {
    data: Item[],
    status: number
}