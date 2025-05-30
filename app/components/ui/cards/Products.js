import ProductCard from "./ProductCard";


const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 49.99,
    originalPrice: 80,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.',
    image:
      'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop',
  },
  // Add more products here...
];

export default function Products() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8 xl:px-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}