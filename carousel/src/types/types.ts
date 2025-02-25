export type CatalogResponse = {
    data: {
        search: SearchData;
    };
};

export type SearchData = {
    total: number;
    products: CatalogItem[];
};

export type CatalogItem = {
    name: string;
    description: string;
    image?: string;
    imageSrc?: string;
    tag: string | null;
    wasPrice?: Price;
    currentPrice: Price;
};

export type Price = {
    cashPrice: {
        currencyCode: string;
        amount: number;
    };
    pointsPrice: {
        amount: number;
    };
};


