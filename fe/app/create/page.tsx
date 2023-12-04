"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import NoteForm from "../../components/NoteForm";

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
              <NoteForm
                title={formik.values.title}
                text={formik.values.text}
                handleChange={formik.handleChange}
              />
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
