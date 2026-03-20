import { useState } from "react";
import { Link } from "react-router-dom";
import CommonBanner from "../components/common/CommonBanner";

/* =========================
   SAMPLE BLOG DATA
========================= */
const blog = {
  title: "The Correct Order to Apply Your Skincare Products",
  date: "Sep 18, 2026",
  author: "Admin",
  views: "5k",
  image: "/images/1.jpg",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
};

/* =========================
   COMMENTS DATA
========================= */
const initialComments = [
  {
    name: "Stacy Poe",
    date: "Oct 6, 2026",
    text: "Amazing article! Learned a lot.",
  },
  {
    name: "John Doe",
    date: "Oct 5, 2026",
    text: "Very helpful, thanks for sharing!",
  },
];

/* =========================
   BLOG DETAIL PAGE
========================= */
const BlogDetails = () => {
  const [comments, setComments] = useState(initialComments);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const addComment = () => {
    if (!form.name || !form.message) return;

    setComments([
      ...comments,
      {
        name: form.name,
        date: new Date().toDateString(),
        text: form.message,
      },
    ]);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="">
      <CommonBanner title="Blog Details"/>
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        {/* LEFT - BLOG CONTENT */}
        <div className="md:col-span-2">

          {/* META */}
          <div className="flex gap-4 text-sm text-gray-500 mb-2">
            <span>{blog.date}</span>
            <span>By {blog.author}</span>
            <span>{blog.views} views</span>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            {blog.title}
          </h1>

          {/* IMAGE */}
          <img
            src={blog.image}
            className="w-full h-auto object-contain rounded-xl mb-6"
          />

          {/* CONTENT */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {blog.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <blockquote className="border-l-4 pl-4 italic text-gray-500">
              This is a highlighted quote to make the blog look premium.
            </blockquote>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex gap-2 flex-wrap">
            {["Skincare", "Beauty", "Health"].map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* SHARE */}
          <div className="mt-6 flex gap-3 flex-wrap">
            {["Facebook", "Twitter", "LinkedIn"].map((item, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-[var(--color-brand)] text-white text-sm rounded-md"
              >
                {item}
              </button>
            ))}
          </div>

          {/* COMMENTS */}
          <div className="mt-10">
            <h3 className="font-semibold text-lg mb-4">
              {comments.length} Comments
            </h3>

            <div className="space-y-4">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-4 rounded-xl"
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium text-sm">{c.name}</h4>
                    <span className="text-xs text-gray-400">
                      {c.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ADD COMMENT */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-4">
              Leave a Comment
            </h3>

            <div className="space-y-3">
              <input
                placeholder="Your Name"
                className="input"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Email"
                className="input"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <textarea
                placeholder="Your Comment"
                className="input h-28"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button
                onClick={addComment}
                className="bg-[var(--color-brand)] text-white px-6 py-2 rounded-md text-sm"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT - SIDEBAR */}
        <div className="space-y-6">

          {/* SEARCH */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <input
              placeholder="Search..."
              className="w-full p-2 rounded border border-gray-200"
            />
          </div>

          {/* RECENT POSTS */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-medium mb-3">Recent Posts</h4>
            {[1, 2, 3].map((_, i) => (
              <Link
                key={i}
                to="#"
                className="block text-sm text-gray-600 mb-2 hover:text-[var(--color-brand)]"
              >
                Sample Blog Title {i + 1}
              </Link>
            ))}
          </div>

          {/* CATEGORIES */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-medium mb-3">Categories</h4>
            {["Beauty", "Health", "Lifestyle"].map((cat, i) => (
              <div key={i} className="text-sm text-gray-600 mb-2">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          outline: none;
        }
        .input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 1px var(--color-brand);
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;