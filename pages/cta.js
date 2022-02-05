/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const projects = [
  {
    id: 1,
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  // More projects...
];
export default function Example() {
  return (
    <div className="bg-gray-50">
      {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"> */}
      <div className=" mx-10 py-12 px-4 sm:px-6 lg:py-10 lg:px-8 lg:flex items-center text-center justify-center lg:items-center lg:justify-between">
        <div className="px-6 lg:flex items-center lg:flex-no-wrap">
          <div className="lg:flex ">
            <img
              className="inline-block h-20 w-20 -mr-12 rounded-full "
              src="./cta1.svg"
              alt=""
            />
            <img
              className="inline-block h-20 w-20 -mr-12 rounded-full "
              src="./cta4.svg"
              alt=""
            />
            <img
              className="inline-block h-20 w-20 -mr-12 rounded-full "
              src="./cta2.svg"
              alt=""
            />
            <img
              className="inline-block h-20 w-20 -mr-12 rounded-full "
              src="./cta11.svg"
              alt=""
            />
            <img
              className="inline-block h-20 w-20 -mr-12 rounded-full "
              src="./cta3.svg"
              alt=""
            />
            <p className="pt-3 mt-3 bg-[#C3DFED] text-[#1DAEFF] h-14 w-14 dark:text-gray-400 text-base font-bold text-cover inline-block item-center text-center rounded-full border-2 border-white  shadow">
              +1K
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          <span className="block">
            Join landlords like you to enjoy stress-free property management
            service
          </span>
          <span className="block"></span>
        </h2>
        <div className="mt-8 lg:flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="uppercase inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0D6781] hover:bg-[#0D6781]"
            >
              sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
