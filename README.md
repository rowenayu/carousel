# Qantas Loyalty - ULTRA - Carousel Feature

## How to run app
1. Open a terminal and navigate to the carousel directory 
2. Run the following commands:
`npm install` &
`npm run dev`

## How to run tests
1. Open a terminal and navigate to the carousel directory 
2. Run command:
`npm run test`

## Approach and Trade-offs
The Carousel feature was built using React, Vite, and Vitest. This approach is a modern, performant, and scalable way to handle dynamic UI components like carousels. 

### Component Breakdown
CatalogCard Component:
- Displays individual product details (e.g. name, description, price, image, etc.)
- Receives an item prop (product data) and an addToCart function
- Implements conditional styling (e.g. sale items have a crossed-out price)

Carousel Component:
- Acts as a container that displays multiple CatalogCard components.

### Technology rationales
React
- Component Reusability: CatalogCard is independent and can be reused inside the carousel or elsewhere.
- Efficient UI Updates: React’s Virtual DOM optimizes rendering performance.
- State Management: Easily manage UI state and interactivity.

Vite
- Fast Hot Module Replacement (HMR): Instantly updates components during development.
- Optimized Builds: Uses esbuild, leading to faster bundling and smaller output files.

Vitest
- Faster Testing: Uses esbuild, making tests run significantly faster than Jest.
- Better Integration with Vite: Does not need Jest configurations.

### Trade-offs
#### Component-based approach
Pros:
- Better Maintainability → Modular, easier to debug, and scalable.
- Improved Reusability → Components can be reused elsewhere.
- Easier Unit Testing → Isolated components are simpler to test.

Cons:
- More Files → Requires managing multiple files and imports.
- Potential Over-Engineering → Simple features might not need separate components.

#### Keeping logic in App.tsx
Pros:
- Faster Initial Development → Less time spent structuring components.
- Fewer Files → Reduces import/export management overhead.

Cons:
- Harder to Maintain → All logic in one file can quickly become messy.
- Difficult to Test → Unit testing individual pieces becomes more challenging.
- Limited Scalability → Expanding the carousel’s functionality would require a complete refactor.