// import "./styles.css";
import { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useRouter } from "next/router";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
// import dynamic from "next/dynamic";
import Link from "next/link";
import Pdf from "../../../../components/pdfviewer";
// const PDFViewer = dynamic(() => import("../../../../components/pdf"), {
//   ssr: false,
// });

export default function App() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const { grade, subject, id } = router.query;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://unicefbackend.koompi.app/public/api/query/${grade}/${subject}/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [grade, subject, id]);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const PDF = (
    <Pdf
      fileUrl={`https://unicefpdf.koompi.app/web/viewer.html?file=${item.location}/${item.filename}`}
    />
  );

  return (
    <div className="p-2 md:p-12">
      <div className="text-sm breadcrumbs p-9">
        <ul>
          <li>
            <Link href={`/grade/${grade}`}>{grade}</Link>
          </li>
          <li>
            <Link href={`/grade/${grade}/${subject}`}>{subject}</Link>
          </li>
          <li>
            <Link href="#">{item.file_type}</Link>
          </li>
        </ul>
      </div>
      <br />

      {loading ? (
        "loading..."
      ) : (
        <>
          {item.file_type === "Video" ? (
            <div className="lg:px-36 px-0">
              <Player
                // style={{ paddingBottom: "50%" }}
                // dimensions={{ width: "50%", height: "50%" }}
                primaryColor="#1991ff"
                src={[
                  {
                    quality: "1080p",
                    url: `https://unicefbackend.koompi.app/${item.location}/${item.filename}`,
                  },
                ]}
                keyboardShortcut={{
                  pause: true,
                  forward: true,
                  rewind: true,
                  fullScreen: true,
                  mute: true,
                  subtitle: true,
                }}
              >
                {(ref, props) => <video ref={ref} {...props} autoPlay />}
              </Player>
            </div>
          ) : item.file_type === "Audio" ? (
            <div className="lg:container lg:mx-auto justify-center flex">
              {/* place-content-center place-items-center absolute top-56 right-[600px] */}
              <AudioPlayer
                // className="rounded-xl bg-base-300 w-[500px]"
                style={{ width: "500px" }}
                //   src={musicTracks[trackIndex].src}
                src={`https://unicefbackend.koompi.app/${item.location}/${item.filename}`}
                showSkipControls={true}
                showJumpControls={false}
                header={
                  <div>
                    <div className="flex justify-center">
                      <img
                        className="rounded"
                        src={`https://unicefbackend.koompi.app/${item.thumbnail.thumbnail_location}/${item.thumbnail.thumbnail_name}`}
                      />
                    </div>
                  </div>
                  // <div className="flex place-content-center place-items-center">
                  //   <div className="cd"></div>
                  // </div>
                }
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
              />
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                {/* <PDFViewer
                  fileUrl={`https://unicefbackend.koompi.app/${item.location}/${item.filename}`}
                /> */}
                <Pdf
                  fileUrl={`https://unicefbackend.koompi.app/${item.location}/${item.filename}`}
                />
                <br />
              </div>
              <div className=" flex justify-center mt-4">
                <Link
                  target="_blank"
                  href={`https://unicefbackend.koompi.app/${item.location}/${item.filename}`}
                  className="btn btn-success"
                >
                  Download
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

// import React from "react";

// import Pdf from "../../../../components/pdfviewer";

// const PDF = () => {
//   return (
//     <div>
//       <div className="flex justify-center mt-6">
//         <Pdf
//           fileUrl="/pdf.pdf"
//           // fileUrl={`https://unicefbackend.koompi.app/${item.location}/${item.filename}`}
//         />
//       </div>
//     </div>
//   );
// };

// export default PDF;
