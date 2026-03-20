import { useState } from "react";
import { Link } from "react-router-dom";
import CommonBanner from "../components/common/CommonBanner";

/* =========================
   BLOG DATA
========================= */
const blogsData = [
  {
    id: 1,
    title: "Spring is in the Air and Our Amazing Spa Offers",
    image: "/images/Category/4- jewellery2.jpg",
    date: "Sep 18, 2026",
    views: "5k",
  },
  {
    id: 2,
    title: "Spring is in the Air and Our Amazing Spa Offers",
    image: "/images/Category/4- jewellery2.jpg",
    date: "Sep 18, 2026",
    views: "5k",
  },
  {
    id: 3,
    title: "Spring is in the Air and Our Amazing Spa Offers",
    image: "/images/Category/4- jewellery2.jpg",
    date: "Sep 18, 2026",
    views: "5k",
  },
  {
    id: 4,
    title: "Spring is in the Air and Our Amazing Spa Offers",
    image: "/images/Category/4- jewellery2.jpg",
    date: "Sep 18, 2026",
    views: "5k",
  },
  {
    id: 5,
    title: "Top 5 Skincare Tips You Should Know",
    image: "/blog/2.jpg",
    date: "Sep 12, 2026",
    views: "3.2k",
  },
  {
    id: 6,
    title: "Why Self Care is Important in 2026",
    image: "/blog/3.jpg",
    date: "Sep 05, 2026",
    views: "4.1k",
  },
  {
    id: 7,
    title: "Luxury Spa Treatments You Must Try",
    image: "/blog/4.jpg",
    date: "Aug 28, 2026",
    views: "6.8k",
  },
  {
    id: 8,
    title: "Daily Beauty Routine Guide",
    image: "/blog/1.jpg",
    date: "Aug 20, 2026",
    views: "2.9k",
  },
  {
    id: 9,
    title: "Hair Care Tips for Healthy Growth",
    image: "/blog/2.jpg",
    date: "Aug 15, 2026",
    views: "3.7k",
  },
];

/* =========================
   BLOG CARD
========================= */
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

      {/* IMAGE */}
      <Link to={`/blog/${blog.id}`}>
        <img
          src={blog.image}
          className="w-full h-auto object-contain"
        />
      </Link>

      {/* CONTENT */}
      <div className="p-4">

        {/* META */}
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>{blog.date}</span>
          <span>{blog.views}</span>
        </div>

        {/* TITLE */}
        <h3 className="font-medium text-gray-800 leading-snug">
          {blog.title}
        </h3>

        {/* CTA */}
        <Link
          to={`/blog/${blog.id}`}
          className="text-sm text-[var(--color-brand)] mt-3 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

/* =========================
   PAGINATION
========================= */
const Pagination = ({ currentPage, setPage, totalPages }) => {
  return (
    <div className="flex justify-center gap-2 mt-10">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-10 h-10 rounded-full text-sm ${
            currentPage === i + 1
              ? "bg-[var(--color-brand)] text-white"
              : "bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

/* =========================
   MAIN BLOG PAGE
========================= */
const Blogs = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(blogsData.length / itemsPerPage);

  const currentData = blogsData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="">
      <CommonBanner title="Blogs"/>
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* HEADER */}
        <h2 className="text-2xl font-semibold text-[var(--color-brand)] mb-8">
          Our Blogs
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {currentData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* PAGINATION */}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Blogs;