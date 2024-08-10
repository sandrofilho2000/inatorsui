'use client';
import React, { useEffect, useState } from 'react';

const HeroTitle = ({
  title,
  highlight_term,
}: {
  title: string;
  highlight_term: string;
}) => {
  const [html, setHtml] = useState(title);

  useEffect(() => {
    let new_html: string | string[] = html.split(highlight_term);

    if (new_html.length > 1) {
      new_html =
        new_html[0] +
        `<span class="main-color-txt leading-snug"> ${highlight_term} </span>` +
        new_html[1];
    } else {
      new_html = title;
    }

    setHtml(new_html);
  }, []);

  return (
    <h1
      className="text-5xl font-bold leadi sm:text-6xl leading-snug"
      dangerouslySetInnerHTML={{ __html: html }}
    ></h1>
  );
};

export default HeroTitle;
