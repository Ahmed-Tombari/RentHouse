import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Wishlist Button */}
      <button
        type="button"
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-700"
        aria-label="Add to wishlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block h-64 w-full overflow-hidden sm:h-72">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <p className="text-gray-700">
          ${product.price}
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </p>

        <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.name}</h3>

        <p className="mt-1.5 line-clamp-3 text-sm text-gray-700">{product.description}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-200"
          >
            Add to Cart
          </button>

          <button
            type="button"
            className="w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}