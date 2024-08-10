import { iFaq } from '@/interfaces';
import React from 'react';

const Faq = ({ data }: { data: iFaq }) => {
  return (
    <section className="mt-14 md:max-w-[70vw] mx-auto">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">{data.title}</h2>
        <p className="mt-4 mb-8 ">{data.subtitle}</p>
        <div className="space-y-4">
          {data.faq_items.map((item) => (
            <details
              key={item.id}
              className="w-full border rounded-lg"
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                {item.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
