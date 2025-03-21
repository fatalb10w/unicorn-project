"use client";

import React, { useState } from "react";

function FAQListenItem({ qa }) {
  const [isOpen, setIsOpen] = useState(false);
  const plus = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  </svg>
  const minus = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
  </svg>



  return (
    <li>
      {/* 1. Question (clickable) */}
      <button className="py-5 font-semibold border-b w-full text-left flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p>{qa.question}</p>
        {isOpen ? minus : plus}
        </button>

      {/* 2. Answer */}
      <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6 opacity-90`}>
        {qa.answer}
      </div>
    </li>
  );
}

export default FAQListenItem;