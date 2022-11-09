import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Document, Page, pdfjs } from "react-pdf";

// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// import workerSrc from "./pdf-worker";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ fileUrl }) {
  //   const [file, setFile] = useState("./pdf.pdf");
  const [numPages, setNumPages] = useState(null);

  //   function onFileChange(event) {
  //     setFile(event.target.files[0]);
  //   }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      {/* <div>
        <label htmlFor="file">Load from file:</label>{" "}
        <input onChange={onFileChange} type="file" />
      </div> */}
      <div>
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// import demoFile from "./demo.pdf";

// export default function App() {
//   const renderToolbar = (Toolbar) => (
//     <Toolbar>
//       {(slots) => {
//         const { ZoomOut } = slots;
//         return (
//           <div
//             style={{
//               alignItems: "center",
//               display: "flex",
//             }}
//           >
//             <div style={{ padding: "0px 2px" }}>
//               <ZoomOut>
//                 {(props) => (
//                   <button
//                     style={{
//                       backgroundColor: "#357edd",
//                       border: "none",
//                       borderRadius: "4px",
//                       color: "#ffffff",
//                       cursor: "pointer",
//                       padding: "8px",
//                     }}
//                     onClick={props.onClick}
//                   >
//                     Zoom out
//                   </button>
//                 )}
//               </ZoomOut>
//             </div>
//             ...
//           </div>
//         );
//       }}
//     </Toolbar>
//   );

//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
//       <div style={{ height: "720px" }}>
//         <Viewer
//           fileUrl="./demo.pdf"
//           //   fileUrl="https://unicef.koompi.app/contents/Grade3/PreWriting/00000000-0000-0000-0000-018456410726TEdSIENoZWF0IFNoZWV0.pdf"
//           plugins={[defaultLayoutPluginInstance]}
//         />
//       </div>
//     </Worker>
//   );
// }
