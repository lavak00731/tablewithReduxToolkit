interface review {
    rating: number,
    comment: string,
    date: string
}

export default interface ProductType {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: {
        width: number,
        height: number,
        depth: number
    };
    discountPercentage: number;
    id: number;
    images: string[];
    meta: {
        createdAt: string,
        updateAt: string,
        barcode: string
    }
    minimumOrderQuantity: number,
    price: number,
    rating: number,
    returnPolicy: string,
    reviews: review[],
    shippingInformation: string,
    sku: string,
    stock: number,
    tags: string[],
    thumbnail: string,
    title: string,
    warrantyInformation: string,
    weight: number
}