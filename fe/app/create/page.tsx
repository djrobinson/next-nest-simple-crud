"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    onSubmit: async (values) => {
      await fetch(`http://127.0.01:3000/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("SAVED");
      return router.push("/");
    },
  });
  return (
    <div className="h-screen flex justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="border-b border-gray-900/10 pb-6">
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="col-span-12">
              <h2 className="font-sans font-bold text-3xl text-white-800 text-center">
                Create a Note
              </h2>
            </div>
            <div className="col-span-12">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ing-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    autoComplete="title"
                    className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Title..."
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Note Text
              </label>
              <div className="mt-2">
                <textarea
                  id="text"
                  name="text"
                  rows={8}
                  onChange={formik.handleChange}
                  value={formik.values.text}
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2 flex justify-center">
          <button className="align-center w-full bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-full">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
