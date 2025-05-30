import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Shadow Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/house.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Gray Shadow Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        </div>

        {/* Overlay Gradient (optional) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-4xl text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            Find Your Ideal Rental Home and
            <strong className="text-primary-600"> Live Comfortably</strong>
          </h1>

          <p className="mt-6 text-base text-gray-700 sm:text-lg max-w-2xl mx-auto">
            Discover a wide range of rental properties that match your
            lifestyle. From cozy apartments to spacious family homes, we make
            renting easy and stress-free.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="#"
              className="inline-block rounded border border-primary-600 bg-primary-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Get Started
            </Link>

            <Link
              href="#"
              className="inline-block rounded border border-gray-200 px-6 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Houses Section */}
      <div className="w-full flex justify-center items-center text-center p-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            <strong className="text-black">Our houses</strong>
          </h1>
          <p className="mt-2 text-gray-600">We make renting easy and stress-free.</p>
        </div>
      </div>
    </>
  );
}
