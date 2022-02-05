/* eslint-disable @next/next/no-img-element  */
import { useState, useRef } from "react";

export default function Example() {
  console.log("start");
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailInputRef = useRef();
  const numberRef = useRef();
  const [firstnameisvalid, setFirstnameisvalid] = useState(false);
  const [lastnameisvalid, setLastnameisvalid] = useState(false);
  const [emailisvalid, setEmailisvalid] = useState(false);
  const [numberisvalid, setNumberisvalid] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    console.log("here");
    const enteredfirstname = firstnameRef.current.value;
    const enteredlastname = lastnameRef.current.value;
    const enteredemail = emailInputRef.current.value;
    const enteredphonenumber = numberRef.current.value;

    if (enteredfirstname == "") {
      setFirstnameisvalid(true);
    } else if (enteredlastname == "") {
      setLastnameisvalid(true);
    } else if (enteredemail == "") {
      setEmailisvalid(true);
    } else if (enteredphonenumber == "") {
      setNumberisvalid(true);
    }

    // optional: Add validation

    // if (isLogin) {
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   });

    //   if (!result.error) {
    //     // //set some auth state //
    //     router.replace("/profile");
    //   }
    // } else {
    //   try {
    //     const result = await createUser(enteredEmail, enteredPassword);
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }
  return (
    <div>
      <div
        className="bg-cover "
        style={{ backgroundImage: 'url("/homepage1.svg")' }}
      >
        <div className="md:flex hidden ">
          <div className=" items-center  mx-10 grid grid-cols-2 gap-4 bg-fixed">
            <div className=" py-4">
              <h2 className="mt-6  text-5xl font-bold text-white">
                Easiest Way to Manage
              </h2>
              <h2 className="mt-1  text-5xl font-bold text-white">
                Your properties
              </h2>
              <div className="text-white">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </div>
            </div>
            <div className="min-h-full flex flex-col justify-center py-6 lg:px-8">
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form className="space-y-5" onSubmit={submitHandler}>
                    <h2 className="  text-3xl font-bold text-gray-900">
                      Sign up & get started
                    </h2>
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="Enter your first name"
                          autoComplete="firstname"
                          ref={firstnameRef}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1DAEFF] focus:border-[#1DAEFF] sm:text-sm"
                        />
                        {firstnameisvalid && (
                          <p className="text-base font-semibold text-red-600 hover:text-red-500">
                            First name must not be empty.
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          id="lastname"
                          name="lastname"
                          type="text"
                          placeholder="Enter your last name"
                          autoComplete="lastname"
                          ref={lastnameRef}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1DAEFF] focus:border-[#1DAEFF] sm:text-sm"
                        />
                        {lastnameisvalid && (
                          <p className="text-base font-semibold text-red-600 hover:text-red-500">
                            Last name must not be empty.
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          autoComplete="email"
                          ref={emailInputRef}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1DAEFF] focus:border-[#1DAEFF] sm:text-sm"
                        />{" "}
                        {emailisvalid && (
                          <p className="text-base font-semibold text-red-600 hover:text-red-500">
                            Please enter a valid email.
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number (WhatsApp preferred)
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="number"
                          autoComplete="email"
                          placeholder="Enter your phone number"
                          ref={numberRef}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1DAEFF] focus:border-[#1DAEFF] sm:text-sm"
                        />
                        {numberisvalid && (
                          <p className="text-base font-semibold text-red-600 hover:text-red-500">
                            Please enter a valid phone number.
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Choose location"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1DAEFF] focus:border-[#1DAEFF] sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center ">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-[#0D6781] focus:ring-[#0D6781] border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Request for landlord onboarding kit.
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-[#0D6781] hover:text-[#0D6781]"
                        >
                          What is this?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full uppercase flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0D6781] hover:bg-[#0D6781] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D6781]"
                      >
                        Sign up now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mx-10 mt-10 items-center justify-center text-center">
        <div className="mb-14 text-3xl font-bold text-black sm:text-2xl">
          <p className="">Manage your</p>
          <p>properties </p>
          <p>in one place</p>
        </div>
        <div className="mb-10 font-semibold">
          <p>With Landlord Heaven, you can</p>
          <p>manage your tenants, while</p>
          <p>maximizing and protecting your</p>
          <p>assets in an easy way.</p>
        </div>
      </div>
    </div>
  );
}
