import { CatalogItem } from "../types/types";
import styles from "./CatalogCard.module.css";
import { ShoppingCart } from "lucide-react";

type CatalogItemProps = {
    item: CatalogItem;
    addToCart: (item: CatalogItem) => void;
}

const CatalogCard = ( { item, addToCart } : CatalogItemProps) => {
    const { tag, name, description, image, imageSrc, wasPrice, currentPrice } = item;
    const isOnSale = item.tag === "sale";
    const imgSrc = imageSrc || image;
    
    const wasCashPrice = wasPrice?.cashPrice?.amount ?? 0;
    const currentCashPrice = currentPrice.cashPrice.amount ?? 0;
    const currentPointsPrice = currentPrice.pointsPrice.amount ?? 0;
    const wasPointsPrice = wasPrice?.pointsPrice.amount ?? 0;

    return (
        <div className={styles.card}>
            <p className={`${styles.tag} ${isOnSale ? styles["sale-tag"] : styles["blank-tag"]}`}>{tag}</p>
            <div className={styles["item-info"]}>
                <p className={styles["item-name"]}>{name}</p>
                <p className={styles["item-description"]}>{description}</p>
            </div>
            <img className={styles["item-image"]} src={imgSrc} alt={name} />
            <div className={styles["item-price"]}>
                <p className={isOnSale ? styles["crossed-out"] : styles["blank-price"]}>${wasCashPrice}</p>
                <p className={isOnSale ? styles["sale-price"] : styles["normal-price"]}>${currentCashPrice}</p>
            </div>
            <div className={styles["points-and-button"]}>
                <div className={styles["item-price"]}>
                    <p className={styles["normal-price"]}>Or <span className={isOnSale ? styles["sale-price"] : styles["normal-price"]}><strong>{currentPointsPrice} PTS</strong></span></p>
                    <p className={isOnSale ? styles["crossed-out"] : styles["blank-price"]}>{wasPointsPrice}</p>
                </div>
                <div>
                    <button className={styles["add-to-cart-btn"]} onClick={() => addToCart(item)}>
                        ADD <ShoppingCart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogCard;