// import { useState } from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import { Document, Page, pdfjs } from "react-pdf";

// // import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// // import workerSrc from "./pdf-worker";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// // pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// export default function PDFViewer({ fileUrl }) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
//   function nexPage() {
//     setPageNumber(pageNumber + 1);
//   }
//   function backPage() {
//     setPageNumber(pageNumber - 1);
//   }
//   //   const [file, setFile] = useState("./pdf.pdf");
//   // const [numPages, setNumPages] = useState(null);

//   //   function onFileChange(event) {
//   //     setFile(event.target.files[0]);
//   //   }

//   // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//   //   setNumPages(nextNumPages);
//   // }

//   return (
//     <div>
//       {/* <div>
//         <label htmlFor="file">Load from file:</label>{" "}
//         <input onChange={onFileChange} type="file" />
//       </div> */}
//       <div>
//         <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from({ length: numPages }, (_, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//             />
//           ))}
//         </Document>
//       </div>
//       {/* <div>
//         <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <br />
//         <div className="flex justify-between items-center">
//           <p>
//             Page {pageNumber} of {numPages}
//           </p>
//           <div className="space-x-2">
//             {pageNumber === 1 ? (
//               <button className="bg-base-300 px-5 py-1 rounded-full" disabled>
//                 back
//               </button>
//             ) : (
//               <button
//                 className="bg-base-300 px-5 py-1 rounded-full"
//                 onClick={backPage}
//               >
//                 back
//               </button>
//             )}
//             {pageNumber === numPages ? (
//               <button className="bg-base-300 px-5 py-1 rounded-full" disabled>
//                 next
//               </button>
//             ) : (
//               <button
//                 className="bg-base-300 px-5 py-1 rounded-full"
//                 onClick={nexPage}
//               >
//                 next
//               </button>
//             )}
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }
import React from "react";

const pdf = () => {
  return <div>pdf</div>;
};

export default pdf;
