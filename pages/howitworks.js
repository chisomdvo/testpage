/* This example requires Tailwind CSS v2.0+ */

export default function Example() {
  return (
    <div className="md:block hidden">
      <div className=" text-center items-center">
        <h2 className="mt-16 text-3xl font-bold text-black">How It Works</h2>

        <div className="mt-8 mb-8 text-black">
          Find out how to get the most income out of your property in 3 easy
          steps
        </div>
      </div>
      <div
        role="list"
        className="mx-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
      >
        <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F4F4FA" />
                <path
                  d="M22.4952 33V20.004H19.3992V18.024C20.3912 18.024 21.1912 17.932 21.7992 17.748C22.4152 17.556 22.8752 17.284 23.1792 16.932C23.4832 16.572 23.6632 16.144 23.7192 15.648H26.0472V33H22.4952Z"
                  fill="#0D6781"
                />
              </svg>
            </span>
            <h3 className="mt-6 text-gray-900 text-3xl font-bold">Sign up</h3>
            <div className="mt-4 flex-grow flex flex-col justify-between">
              <div className="text-gray-500 text-sm">
                Register on the platform by
              </div>
              <div className="text-gray-500 text-sm">
                filling out a landlord
              </div>
              <div className="text-gray-500 text-sm"> onboarding form</div>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F4F4FA" />
                <path
                  d="M16.7388 33V31.272V30.384C16.7388 29.504 16.9028 28.744 17.2308 28.104C17.5588 27.456 17.9908 26.896 18.5268 26.424C19.0708 25.944 19.6628 25.524 20.3028 25.164C20.9508 24.804 21.5988 24.464 22.2468 24.144C22.8948 23.824 23.4868 23.504 24.0228 23.184C24.5668 22.856 25.0028 22.492 25.3308 22.092C25.6588 21.692 25.8228 21.22 25.8228 20.676C25.8228 19.98 25.5788 19.412 25.0908 18.972C24.6108 18.532 23.9508 18.312 23.1108 18.312C22.2388 18.312 21.4988 18.564 20.8908 19.068C20.2828 19.572 19.9068 20.332 19.7628 21.348H16.4148C16.4308 20.244 16.6868 19.244 17.1828 18.348C17.6868 17.444 18.4388 16.728 19.4388 16.2C20.4388 15.672 21.6948 15.408 23.2068 15.408C24.5028 15.408 25.6188 15.628 26.5548 16.068C27.4988 16.508 28.2268 17.12 28.7388 17.904C29.2508 18.688 29.5068 19.604 29.5068 20.652C29.5068 21.524 29.3468 22.276 29.0268 22.908C28.7068 23.54 28.2828 24.08 27.7548 24.528C27.2268 24.976 26.6468 25.368 26.0148 25.704C25.3828 26.04 24.7508 26.352 24.1188 26.64C23.4948 26.928 22.9188 27.224 22.3908 27.528C21.8628 27.824 21.4388 28.16 21.1188 28.536C20.7988 28.912 20.6388 29.364 20.6388 29.892V30.048H29.4828V33H16.7388Z"
                  fill="#0D6781"
                />
              </svg>
            </span>

            <h3 className="mt-6 text-gray-900 text-3xl font-bold">
              Verify Documents
            </h3>
            <div className="mt-4 flex-grow flex flex-col justify-between">
              <div className="text-gray-500 text-sm">Provide the required</div>
              <div className="text-gray-500 text-sm">
                {" "}
                documentation to verify
              </div>
              <div className="text-gray-500 text-sm"> your account</div>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#F4F4FA" />
                <path
                  d="M16.1835 20.988C16.1835 19.74 16.4755 18.704 17.0595 17.88C17.6515 17.056 18.4475 16.44 19.4475 16.032C20.4475 15.616 21.5595 15.408 22.7835 15.408C24.0795 15.408 25.2315 15.576 26.2395 15.912C27.2555 16.248 28.0555 16.76 28.6395 17.448C29.2235 18.136 29.5155 19.008 29.5155 20.064C29.5155 20.92 29.2675 21.676 28.7715 22.332C28.2755 22.98 27.4675 23.496 26.3475 23.88C26.9875 24.056 27.5795 24.324 28.1235 24.684C28.6675 25.044 29.1035 25.504 29.4315 26.064C29.7595 26.624 29.9235 27.296 29.9235 28.08C29.9235 28.928 29.7355 29.676 29.3595 30.324C28.9835 30.972 28.4635 31.516 27.7995 31.956C27.1355 32.396 26.3675 32.724 25.4955 32.94C24.6235 33.156 23.6915 33.264 22.6995 33.264C21.3075 33.256 20.1195 33.028 19.1355 32.58C18.1595 32.124 17.4075 31.476 16.8795 30.636C16.3595 29.796 16.0915 28.796 16.0755 27.636H19.4475C19.6155 28.62 19.9995 29.332 20.5995 29.772C21.1995 30.212 21.9115 30.432 22.7355 30.432C23.4555 30.432 24.0715 30.328 24.5835 30.12C25.1035 29.912 25.4995 29.624 25.7715 29.256C26.0515 28.88 26.1915 28.452 26.1915 27.972C26.1915 27.476 26.0475 27.048 25.7595 26.688C25.4795 26.328 25.0875 26.048 24.5835 25.848C24.0795 25.64 23.5035 25.528 22.8555 25.512L21.1995 25.452V22.668L22.6875 22.584C23.3115 22.56 23.8555 22.444 24.3195 22.236C24.7835 22.028 25.1435 21.752 25.3995 21.408C25.6635 21.056 25.7955 20.66 25.7955 20.22C25.7955 19.796 25.6635 19.428 25.3995 19.116C25.1355 18.804 24.7715 18.56 24.3075 18.384C23.8435 18.208 23.3115 18.12 22.7115 18.12C22.1595 18.12 21.6515 18.212 21.1875 18.396C20.7235 18.58 20.3435 18.884 20.0475 19.308C19.7515 19.724 19.5795 20.284 19.5315 20.988H16.1835Z"
                  fill="#0D6781"
                />
              </svg>
            </span>

            <h3 className="mt-6 text-gray-900 text-3xl font-bold">
              Manage & Earn
            </h3>
            <div className="mt-4 flex-grow flex flex-col justify-between">
              <div className="text-gray-500 text-sm">List your apartments,</div>
              <div className="text-gray-500 text-sm">
                manage tenants and start
              </div>
              <div className="text-gray-500 text-sm">earning rental income</div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center text-center mt-8 ">
        <button
          type="submit"
          className="w-md uppercase justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0D6781] hover:bg-[#0D6781] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D6781]"
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}
