'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Loading() {
  const arr =  Array.from ({ length: 20})
  return (
    <section className='grid grid-cols-5 container'>
      {arr.map((_, index) => (
        <article key={index} className='h-64 min-w-full p-2 transition-shadow bg-white border-2 border-transparent animate-pulse group-first:'>
          <div className='flex items-center justify-center w-full h-48 p-2 mb-4 overflow-hidden bg-gray-300 rounded-xl'>
            <svg
              className='w-12 h-12 text-gray-200'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 640 512'
            >
              <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
              <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
            </svg>
          </div>
          <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
          <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>

          <span className='sr-only'>Loading...</span>
        </article>
      ))}
    </section>
  );
}
