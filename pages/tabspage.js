/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Example() {
  return (
    <div className="lg:block hidden">
      <div className="mx-10">
        <h2 className="mt-16  ml-3  text-4xl font-bold text-gray-900">
          One Place to Manage Your
        </h2>
        <h2 className="mt-2  ml-3  text-4xl  font-bold text-gray-900">
          Properties & Tenants
        </h2>
      </div>
      <div className="mt-10 mx-10 grid grid-cols-2 bg-fixed">
        <div className="items-center ">
          <div className="flex border-gray-200 pl-4 ">
            <span
              tabIndex="0"
              className="focus:border-[#0D6781] active:border-[#0D6781] focus:text-[#0D6781]  text-[#525C65] border-gray-300 whitespace-nowrap py-4 px-4 font-medium text-sm border-l-4  "
            >
              <div className="mt-2  text-2xl font-bold">
                One View on all properties
              </div>
              <div className="mt-2 ">
                Manage all your properties and list new properties
              </div>
              <div className="mt-2 ">from one spot</div>
            </span>
          </div>
          <div className="flex  border-gray-200 pl-4 ">
            <span
              tabIndex="0"
              className="focus:border-[#0D6781] focus:text-[#0D6781]  text-[#525C65] border-gray-300 whitespace-nowrap py-4 px-4 font-medium text-sm border-l-4  "
            >
              <div className="mt-2  text-2xl font-bold">
                Manage Tenants Easily
              </div>
              <div className="mt-2 ">
                Onboard tenants and manage rentals including
              </div>
              <div className="mt-2 ">
                tenant information and rental status easily.t
              </div>
            </span>
          </div>
          <div className="flex  border-gray-200 pl-4 ">
            <span
              tabIndex="0"
              className="focus:border-[#0D6781] focus:text-[#0D6781] text-[#525C65] border-gray-300 whitespace-nowrap py-4 px-4 font-medium text-sm border-l-4  "
            >
              <div className="mt-2  text-2xl font-bold">
                Payments & Remainders
              </div>
              <div className="mt-2 ">
                Receive rental and inspection fees from tenants.
              </div>
              <div className="mt-2 ">
                Send rent invoices and remainders easily
              </div>
            </span>
          </div>
          <div className="flex  border-gray-200 pl-4 ">
            <span
              tabIndex="0"
              className="focus:border-[#0D6781] focus:text-[#0D6781] text-[#525C65]  border-gray-300 whitespace-nowrap py-4 px-4 font-medium text-sm border-l-4  "
            >
              <div className="mt-2  text-2xl font-bold">Get Loan Support</div>
              <div className="mt-2 ">
                Get flexible financial support with affordable rates to
              </div>
              <div className="mt-2 "> run and manage your property.</div>
            </span>
          </div>
        </div>
        <div
          className="bg-cover "
          style={{ backgroundImage: 'url("/tab.svg")' }}
        >
          <div className="w-full flex -mt-10 items-end justify-end -ml-7">
            {/* <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col  md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg"> */}
            <div className="shadow-lg shadow-inner stage boxanimate bounce-2  flex flex-col  md:py-12 bg-white rounded-lg">
              <div className="mx-6">
                <div className="flex items-center">
                  <p className="text-base font-medium leading-none text-[#525C65]">
                    Owned by
                  </p>
                </div>

                <div className="flex items-center mt-7">
                  <img className="w-35 h-35 " src="/owner.svg" />
                  <div className="ml-3">
                    <p className="text-medium font-medium leading-none text-[#110229]">
                      Adekunle Doe
                    </p>
                    <p className="text-base leading-3 text-[#525C65] mt-2">
                      Landlord
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-7">
                  <div className="ml-0">
                    <p className="text-base sm:text-2xl md:text-xl font-bold 2xl:text-2xl text-[#0D6781]">
                      225M
                    </p>
                    <p className=" mt-2 text-xs text-[#525C65]">
                      Annual Income
                    </p>
                  </div>
                  <div className="ml-6">
                    <p className="text-base sm:text-2xl md:text-xl font-bold 2xl:text-2xl text-[#0D6781]">
                      63
                    </p>
                    <p className="mt-2 text-xs text-[#525C65]">Rental units</p>
                  </div>
                  <div className="ml-6">
                    <p className="text-base sm:text-2xl md:text-xl font-bold 2xl:text-2xl text-[#0D6781]">
                      98%
                    </p>
                    <p className="mt-2 text-xs text-[#525C65]">
                      Occupancy rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
