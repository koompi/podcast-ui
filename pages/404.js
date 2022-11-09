/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

const Notfound = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <Image
        width={500}
        height={500}
        src="/images/undraw_page_not_found_re_e9o6.svg"
      />
    </div>
  );
};

export default Notfound;
