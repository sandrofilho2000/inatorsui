import React from 'react';

const RootStyles = ({ data }: { data: string }) => {
  return (
    <>
      <style>
        {`
        :root {
  --main-color: ${data};
}

.main-color-txt {
  color: var(--main-color);
}

.main-color-bg {
  background-color: var(--main-color);
}
  
        `}
      </style>
    </>
  );
};

export default RootStyles;
