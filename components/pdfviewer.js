// import React, { useState, useRef } from "react";
// import { usePdf } from "@mikecousins/react-pdf";

// const MyPdfViewer = ({ fileUrl }) => {
//   const [page, setPage] = useState(1);
//   const canvasRef = useRef(null);

//   const { pdfDocument, pdfPage } = usePdf({
//     file: fileUrl,
//     page,
//     canvasRef,
//   });

//   return (
//     <div>
//       {!pdfDocument && <span>Loading...</span>}
//       <canvas ref={canvasRef} />
//       {Boolean(pdfDocument && pdfDocument.numPages) && (
//         <nav>
//           <ul className="pager flex space-x-3 mt-3">
//             <li className="previous">
//               <button
//                 className="bg-base-300 px-4 rounded"
//                 disabled={page === 1}
//                 onClick={() => setPage(page - 1)}
//               >
//                 Previous
//               </button>
//             </li>
//             <li className="next">
//               <button
//                 className="bg-base-300 px-4 rounded"
//                 disabled={page === pdfDocument.numPages}
//                 onClick={() => setPage(page + 1)}
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default MyPdfViewer;

import React from "react";

const Pdf = ({ fileUrl }) => {
  return (
    <div>
      <iframe src={fileUrl} width="100%" height="500px"></iframe>
      {/* <a id="id2239" href="http://example.com:8080/client/attachment/filename.pdf" class="act01">filename.pdf</a> */}
    </div>
  );
};

export default Pdf;
