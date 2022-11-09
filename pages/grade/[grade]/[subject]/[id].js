// import "./styles.css";
import { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useRouter } from "next/router";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../../../../components/pdf"), {
  ssr: false,
});

export default function App() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const { grade, subject, id } = router.query;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://unicef.koompi.app/public/api/query/${grade}/${subject}/${id}`
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
  return (
    <div>
      <br />
      {loading ? (
        "loading..."
      ) : (
        <>
          {item.file_type === "Video" ? (
            <Player
              // dimensions={{ width: "100%", height: "100%" }}
              primaryColor="#1991ff"
              src={[
                {
                  quality: "1080p",
                  url: `https://unicef.koompi.app/${item.location}/${item.filename}`,
                },
              ]}
              keyboardShortcut={false}
            >
              {(ref, props) => <video ref={ref} {...props} autoPlay />}
            </Player>
          ) : item.file_type === "Audio" ? (
            <div className="flex place-content-center place-items-center">
              <AudioPlayer
                className="rounded-xl"
                style={{ width: "500px" }}
                //   src={musicTracks[trackIndex].src}
                src={`https://unicef.koompi.app/${item.location}/${item.filename}`}
                showSkipControls={true}
                showJumpControls={false}
                header={
                  <div className="flex place-content-center place-items-center">
                    <div className="cd"></div>
                  </div>
                }
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
              />
            </div>
          ) : (
            <>
              <PDFViewer
                fileUrl={`https://unicef.koompi.app/${item.location}/${item.filename}`}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
