export default interface Recipe {
    _id?: string
    title: string
    ingredients?: string;
    steps?: string;
    category?: string
    isFavorited?: boolean
    imageUrl: string
}