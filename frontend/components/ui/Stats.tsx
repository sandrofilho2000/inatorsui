import { iStat } from '@/interfaces';
import React from 'react';

const Stats = ({ data }: { data: iStat[] }) => {
  return (
    <section className="p-6 my-6">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex p-4 space-x-4 rounded-lg md:space-x-6  "
          >
            <div
              className="flex justify-center p-2 items-center rounded-lg sm:p-4 main-color-bg text-2xl text-gray-100"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            ></div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">{item.title}</p>
              <p className="capitalize">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
