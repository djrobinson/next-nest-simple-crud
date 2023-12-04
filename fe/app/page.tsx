"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface INote {
  _id: string;
  title: string;
  text: string;
}

const Home = () => {
  const revalidatedData = async () => {
    const result = await fetch(`http://127.0.01:3000/data`, {
      method: "GET",
    });
    const data = await result.json();
    return data;
  };

  const deleteNote = async (id: string) => {
    await fetch(`http://127.0.01:3000/data/${id}`, {
      method: "DELETE",
    });
    revalidatedData().then((res) => {
      setState(res);
    });
  };

  const [state, setState] = useState<INote[]>([]);
  const [loadData, setLoadData] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (!loadData) return;

    setLoadData(false);

    revalidatedData().then((res) => {
      setState(res);
    });
  }, [setLoadData, loadData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-8">
        {state.map((item: INote) => (
          <div
            key={item._id}
            className="items-center justify-center p-4 border border-gray-300 rounded-xl bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
          >
            <h2 className="text-2xl font-bold text-center text-white-900">
              {item.title}
            </h2>
            <p className="text-center mt-3 p-2 text-justify text-white-900">
              {item.text}
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href={`/update/${item._id}`}
                className="align-center text-center w-1/2 m-2 bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-full"
              >
                Update
              </Link>
              <button
                onClick={() => {
                  deleteNote(item._id);
                }}
                className="align-center w-1/2 m-2 bg-red-900 hover:bg-red-300 text-white py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
