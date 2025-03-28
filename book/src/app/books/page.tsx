'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const books = [
  {
    title: 'VLADIMIR DENKOV',
    year: '2015',
    genre: 'Drama, Krig, Historia',
    pages: '362',
    summary: 'Lorem ipsum dolor sit amet...',
    image: '/ww2.jpg',
    link: '/books/vladimirdenkov',
  },
  {
    title: 'BLODSBRÖDER',
    year: '2015',
    genre: 'Drama, Krig, Historia',
    pages: '362',
    summary: 'Lorem ipsum dolor sit amet...',
    image: '/gun.jpg',
    link: '/books/blodsbroder',
  },
];

const Books = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % books.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);

  const book = books[currentIndex];

  return (
    <div className="relative min-h-[750px] w-full flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/text.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <section className="relative text-white m-10 bg-black/70 border border-orange-400 rounded-lg p-3 sm:w-[500px] flex flex-col items-start justify-center z-10 transition-all duration-500">
        <Image
          src={book.image}
          alt={book.title}
          width={1000}
          height={1000}
          className="h-[300px] w-full object-cover rounded-lg p-1 bg-white"
        />
        <h2 className="text-4xl font-bold text-orange-400 mx-auto p-3">{book.title}</h2>
        <section className="px-7 w-full">
          <p className="text-xs"><span className="font-bold">ÅR:</span> {book.year}</p>
          <p className="text-xs"><span className="font-bold">GENRE:</span> {book.genre}</p>
          <p className="text-xs"><span className="font-bold">SIDOR:</span> {book.pages}</p>
          <p className="text-xs"><span className="font-bold">HANDLING:</span> {book.summary}</p>
          <Link href={book.link}>
            <button className="text-lg mt-5 bg-orange-400 px-4 py-2 rounded-md font-bold cursor-pointer text-black w-full">
              Till boken →
            </button>
          </Link>
        </section>
      </section>

      <div className="z-10 flex gap-10 mt-[-20px]">
        <button onClick={prevSlide} className="text-white text-4xl font-bold hover:text-orange-400">←</button>
        <button onClick={nextSlide} className="text-white text-4xl font-bold hover:text-orange-400">→</button>
      </div>
    </div>
  );
};

export default Books;