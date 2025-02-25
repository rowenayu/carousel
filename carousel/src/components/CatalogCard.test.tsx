import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CatalogCard from "./CatalogCard";
import { CatalogItem } from "../types/types";
import styles from './CatalogCard.module.css'

const mockItem: CatalogItem = {
  name: "Product 1",
  description: "Description 1",
  tag: "sale",
  image: "image1.jpg",
  wasPrice: { cashPrice: { currencyCode: "AUD", amount: 20 }, pointsPrice: { amount: 2000 } },
  currentPrice: { cashPrice: { currencyCode: "AUD", amount: 15 }, pointsPrice: { amount: 1500 } }
};

describe("CatalogCard Component", () => {
  const mockAddToCart = vi.fn();

  it("renders the catalog item correctly", () => {
    render(<CatalogCard item={mockItem} addToCart={mockAddToCart} />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("sale")).toBeInTheDocument();
    expect(screen.getByText("$20")).toHaveClass(styles["crossed-out"]);
    expect(screen.getByText("$15")).toHaveClass(styles["sale-price"]);
    expect(screen.getByText("2000")).toHaveClass(styles["crossed-out"]);
  });

  it("renders correctly when there's no sale", () => {
    const mockItemNoSale = { ...mockItem, tag: "" };
    render(<CatalogCard item={mockItemNoSale} addToCart={mockAddToCart} />);

    expect(screen.queryByText("$20")).not.toHaveClass(styles["crossed-out"]);
    expect(screen.getByText("$15")).toHaveClass(styles["normal-price"]);
  });
});
