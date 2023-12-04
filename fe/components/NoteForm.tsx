import { ChangeEvent } from "react";

const NoteForm = ({
  title,
  text,
  handleChange,
}: {
  title: string;
  text: string;
  handleChange: (
    arg: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <div>
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
              onChange={handleChange}
              value={title}
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
            placeholder="Note Text..."
            id="text"
            name="text"
            rows={8}
            onChange={handleChange}
            value={text}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
