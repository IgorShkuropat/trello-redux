function generateID(): string {
    return  Math.floor(Math.random() * 10000).toString()
}

export default generateID