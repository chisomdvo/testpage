/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable
@next/next/no-img-element */ export default function Example() {
  return (
    <div>
      <div className="lg:block hidden mt-16 mx-10">
        <div className=" rounded-xl mt-20 grid grid-cols-2 bg-fixed bg-partner-rgba">
          <div>
            <div className="my-20  items-center ml-16">
              <div className=" ml-3  text-5xl font-extrabold text-black">
                Join 100+ Smart
              </div>
              <div className="mt-1  ml-3  text-5xl font-extrabold text-black">
                Landlords
              </div>

              <div className="mt-10  ml-3  text-2xl  text-black">
                Start using your property and enjoy non-
              </div>
              <div className="mt-2  ml-3  text-2xl text-black">
                stop rental income
              </div>
              <div className="  mt-10 ">
                <button
                  type="submit"
                  className="w-md ml-3 uppercase justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-1xl font-medium text-white bg-[#0D6781] hover:bg-[#0D6781] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D6781]"
                >
                  Sign up now
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/ourpartners.svg"
              className="h-full w-full overflow-hidden object-cover bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
