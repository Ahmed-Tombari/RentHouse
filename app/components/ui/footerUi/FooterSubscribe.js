export default function FooterSubscribe() {
  return (
    <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
      <p className="text-lg font-medium text-gray-900">Stay in Touch</p>
      <div className="mx-auto mt-8 max-w-md sm:ms-0">
        <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id, iure.
        </p>
        <form className="mt-4">
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              className="w-full rounded-full border-gray-200 px-6 py-3 shadow-xs"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="block rounded-full bg-primary-500 px-8 py-3 font-medium text-white transition hover:bg-primary-600"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}