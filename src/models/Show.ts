export interface Show {
    id: number,
    image: ShowImage,
    name: string,
    description: string,
    shortDescription: string,
    linkToReview: string,
    score: number
}

export interface ShowImage {
    medium: string,
    original: string
}
