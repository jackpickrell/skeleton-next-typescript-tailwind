import Link from "next/link";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const Dropdown = ({
  text,
  open,
  subItems,
  index,
}: {
  text: string;
  open?: boolean;
  subItems: { text: string; url: string }[];
  index?: number;
}) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={`relative transform transition-all ${
        open
          ? `translate-y-0 opacity-100`
          : `-translate-y-5 md:translate-y-0 opacity-0 md:opacity-100`
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => {
          setDropdown(!dropdown);
        }}
        className={`transform transition-all relative text-right flex items-end md:items-center ml-auto md:ml-0`}
      >
        {text}
        <FiChevronRight
          className={`inline-block text-4xl md:text-xl transform transition-transform ${
            dropdown && `rotate-90`
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 border-b flex flex-col text-gray-700 text-3xl md:text-2xl md:absolute right-0 text-right md:shadow-md md:bg-white rounded md:p-3 md:mt-2 ${
          dropdown
            ? `max-h-96 opacity-100`
            : `max-h-0 opacity-0 pointer-events-none`
        }`}
      >
        {subItems.map(({ text, url }) => (
          <Link key={url} href={url}>
            <a className="first:mt-2 py-1 px-4 last:mb-2 transform transition-transform hover:-translate-x-1">
              {text}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
