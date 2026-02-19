"use client";
// Import new Phosphor Icons
import {
  ArrowArcLeftIcon,
  ArrowArcRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";

const publications = [
  {
    id: 1,
    date: "24 January, 2026",
    category: "Philosophy",
    title: "Jain Philosophy and Ethics in the Modern World",
    image: "/assets/images/publication.png",
  },
  {
    id: 2,
    date: "24 January, 2026",
    category: "Philosophy",
    title: "Jain Philosophy and Ethics in the Modern World",
    image: "/assets/images/publication.png",
  },

  {
    id: 3,
    date: "24 January, 2026",
    category: "Philosophy",
    title: "Jain Philosophy and Ethics in the Modern World",
    image: "/assets/images/publication.png",
  },
  {
    id: 4,
    date: "24 January, 2026",
    category: "Philosophy",
    title: "Jain Philosophy and Ethics in the Modern World",
    image: "/assets/images/publication.png",
  },
];

const PublishedSection = () => {
  return (
    <section className="bg-[#f3e5d0] flex flex-col p-8 z-10 md:p-16  font-manrope">
      <div className="max-w-7xl mx-auto z-50">
        <div className="flex justify-between items-center mb-10   h-20 z-30">
          <h2 className="text-4xl  font-didot text-gray-800">
            Recently <span className="italic">Published</span>
          </h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ArrowLeftIcon
                size={32}
                weight="light"
                className="text-gray-700"
              />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ArrowRightIcon
                size={32}
                weight="light"
                className="text-gray-700"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative mb-6 flex flex-col gap-2 overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
                <div className="flex justify-between items-center z-30  px-4 ">
                  <span className=" text-gray-700  uppercase tracking-tighter">
                    {item.date}
                  </span>
                  <span className="px-3 border border-teal-800 text-teal-800 rounded-full text-sm font-medium  uppercase">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl p-4 font-didot leading-snug text-gray-900 font-medium group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#5c3a21] text-white px-5 py-2 rounded-full   tracking-wide">
                    READ NOW
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublishedSection;
