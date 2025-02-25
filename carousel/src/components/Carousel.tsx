import { CatalogItem, CatalogResponse } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";

const Carousel = () => {
    const [items, setItems] = useState<CatalogItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getData = async () => {
        try {
            const response = await axios.get<CatalogResponse>("./data.json");
            setItems(response.data.data.search.products);
        } catch (error) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {items.length > 0 ? (
                items.map((item) => (
                    <div key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default Carousel;