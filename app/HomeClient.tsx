"use client"; // Required for GSAP animations

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HomeClient({ posts }: { posts: any[] }) {
  const titleRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      listRef.current?.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 ref={titleRef} className="text-4xl font-bold text-blue-600 mb-4">
        Sanity + Next.js + GSAP 🚀
      </h1>
      <ul ref={listRef} className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug.current} className="text-lg text-gray-800">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
