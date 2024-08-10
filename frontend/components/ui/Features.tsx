import { iFeature } from '@/interfaces';
import Image from 'next/image';
import React from 'react';

const Features = ({ data }: { data: iFeature[] }) => {
  return (
    <section className="lg:p-8">
      <div className="md:container px-2 mx-auto space-y-20 lg:space-y-36">
        {data.map((item) => (
          <div
            key={item.id}
            className="featureCard flex max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full min-h-96"
          >
            <div className="featureCardImg flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 sm:h-80 lg:h-96 lg:mb-0">
              <Image
                src={
                  item.img
                    ? item.img
                    : 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt=""
                height={500}
                width={500}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-2 text-xs tracking-widest uppercase main-color-txt">
                {item.title}
              </span>
              <h2 className="text-3xl font-bold">{item.subtitle}</h2>
              <p className="my-6 ">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
