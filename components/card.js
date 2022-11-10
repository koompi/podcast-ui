import React from "react";
import Link from "next/link";

const Card = ({
  title,
  grade,
  subject,
  thumbnail,
  fileType,
  location,
  thumbnailName,
  gradeKh,
  subjectKh,
  id,
}) => {
  return (
    <div className="show-icon bg-base-200 p-3 rounded-lg">
      <Link href={`/grade/${grade}/${subject}/${id}`}>
        <div
          className="w-full aspect-square bg-slate-500 rounded-xl bg-cover bg-center flex place-content-center place-items-center"
          style={{
            // backgroundImage: `url("http://placeimg.com/640/480/abstract")`,
            backgroundImage: `url("https://unicefbackend.koompi.app/${location}/${thumbnailName}")`,
          }}
        >
          <div className="icon hidden btn glass btn-circle p-3">
            {/* <Link href={`/grade/${grade}/${subject}/${id}`}> */}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
            {/* </Link> */}
          </div>
        </div>
      </Link>
      <div className="py-2">
        {/* <div className="badge badge-ghost">44k</div> */}
        <div className="flex space-x-2 mb-1">
          <span className="badge badge-success">{gradeKh}</span>
          <span className="badge badge-success">{subjectKh}</span>
        </div>
        <h1 className="font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
