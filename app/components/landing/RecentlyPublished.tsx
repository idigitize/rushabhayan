"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import ArticleCard from "./ArticleCard";
import Button from "../ui/Button";

const publications = [
  {
    id: 1,
    date: "15 January, 2026",
    category: "Philosophy",
    title: "Jain Philosophy and Ethics in the Modern World",
    image: "/assets/images/publication.png",
  },
  {
    id: 2,
    date: "29 December, 2026",
    category: "Philosophy",
    title: "Historical Evolution of Jain Thought and Its Cultural...",
    image: "/assets/images/publication.png",
  },
  {
    id: 3,
    date: "15 January, 2026",
    category: "Philosophy",
    title: "Jain Contributions to Science, Mathematics...",
    image: "/assets/images/publication.png",
  },
  {
    id: 4,
    date: "15 January, 2026",
    category: "Philosophy",
    title: "Preservation of Jain Heritage: Temples...",
    image: "/assets/images/publication.png",
  },
];

const PublishedSection = () => {
  return (
    <section className=" flex flex-col p-8 z-10 md:p-16 font-manrope relative">
      <div className="max-w-7xl mx-auto z-50">
        {/* Header with Phosphor Navigation Icons */}
        <div className="flex justify-between items-center mb-10 h-20 z-30">
          <h2 className="text-4xl font-didot text-gray-800">
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

        {/* Grid Container - Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center align-center">
          <Button
            variant="primary"
            size="sm"
            className="text-lg px-6 text-cream-light"
          >
            VIEW ALL RESEARCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublishedSection;
