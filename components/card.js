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
  filename,
}) => {
  console.log(fileType);
  return (
    <div className="show-icon bg-base-200 p-3 rounded-lg overflow-hidden">
      <Link href={`/grade/${grade}/${subject}/${id}`}>
        {/* <Link
        href={
          fileType === "PDF"
            ? `https://unicefpdf.koompi.app/web/viewer.html?file=${encodeURIComponent(
                `/${location}/${filename}`
              )}`
            : `/grade/${grade}/${subject}/${id}`
        }
        target={fileType === "PDF" && "_blank"}
      > */}
        <div
          className="w-full aspect-square bg-slate-500 rounded-sm bg-cover bg-center flex place-content-center place-items-center"
          style={{
            // backgroundImage: `url("http://placeimg.com/640/480/abstract")`,
            backgroundImage: `url("https://unicefbackend.koompi.app/${location}/${thumbnailName}")`,
          }}
        >
          <div className="icon hidden btn glass btn-circle p-3">
            {/* <Link href={`/grade/${grade}/${subject}/${id}`}> */}{" "}
            {fileType === "PDF" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            ) : (
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
            )}
            {/* </Link> */}
          </div>
        </div>
      </Link>
      <div className="py-2">
        {/* <div className="badge badge-ghost">44k</div> */}
        <h1 className="font-semibold text-clip overflow-hidden">{title}</h1>
        <div className="flex space-x-2 mb-1 mt-2">
          <span className="badge badge-success">{gradeKh}</span>
          <span className="badge badge-success truncate">{subjectKh}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
