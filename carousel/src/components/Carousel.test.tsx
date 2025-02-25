import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Carousel from "./Carousel";
import axios from "axios";

vi.mock("axios");

describe("Carousel Component", () => {
    const mockData = {
        data: {
            data: {
                search: {
                    products: [
                        {
                            name: "Product 1",
                            description: "Description 1",
                            tag: "sale",
                            image: "image1.jpg",
                            wasPrice: { cashPrice: { amount: 20 }, pointsPrice: { amount: 2000 } },
                            currentPrice: { cashPrice: { amount: 15 }, pointsPrice: { amount: 1500 } }
                        },
                        {
                            name: "Product 2",
                            description: "Description 2",
                            tag: "",
                            imageSrc: "image2.jpg",
                            wasPrice: { cashPrice: { amount: 30 }, pointsPrice: { amount: 3000 } },
                            currentPrice: { cashPrice: { amount: 25 }, pointsPrice: { amount: 2500 } }
                        }
                    ]
                }
            }
        }
    };

    it("renders products after fetching data", async () => {
        vi.mocked(axios.get).mockResolvedValueOnce(mockData);
        render(<Carousel />);

        await waitFor(() => {
            expect(screen.getByText("Product 1")).toBeInTheDocument();
            expect(screen.getByText("Product 2")).toBeInTheDocument();
        });
    });

    it("handles errors correctly", async () => {
        vi.mocked(axios.get).mockRejectedValueOnce(new Error("Failed to fetch data"));
        render(<Carousel />);

        await waitFor(() => {
            expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
        });
    });

});
