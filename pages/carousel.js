/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Example() {
  return (
    <div className="mt-24">
      <div className="lg:block hidden">
        <div className="mx-10">
          <h2 className="mt-16  ml-3  text-3xl font-extrabold text-gray-900">
            Landlords like you rely on
          </h2>
          <h2 className="mt-2  ml-3  text-3xl font-extrabold text-gray-900">
            landlord heaven
          </h2>
        </div>
        <div className="">
          <div className="bg-white pt-16 lg:py-24">
            <div className="pb-16 bg-[#0D6781] lg:pb-0 lg:z-10 lg:relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="relative lg:-my-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                  />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="/carousel.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                      <div>
                        <svg
                          className="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-4 text-2xl font-medium text-white">
                          {" "}
                          They go the extra mile. Landlord Heaven's solution
                          offerings as articulated in their proposal trates
                          facility management in a very new,unique and dynamic
                          way.They even go the extra mile of providing financial
                          cushions for Landlords in their times of need.
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-white">
                          Ayinde Adekunle
                        </p>
                        <p className="text-base font-medium text-indigo-100">
                          Landlord, Lagos state
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden  mx-10">
        <div className="flex items-center text-center justify-center">
          <img
            className="object-cover lg:h-full lg:w-full"
            src="/landlord.svg"
            alt=""
          />
        </div>
        <h2 className="mt-16  ml-3  items-center text-center justify-center text-3xl font-extrabold text-gray-900">
          Landlords like you rely on landlord heaven
        </h2>
        <div className="items-center text-center mt-8 ">
          <button
            type="submit"
            className="w-md uppercase justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0D6781] hover:bg-[#0D6781] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D6781]"
          >
            Join 100+ landlords
          </button>
        </div>
      </div>
    </div>
  );
}
