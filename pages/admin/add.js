import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../../pages/context/authContext";

const Add = () => {
  const { loggedIn } = useContext(AuthContext);
  //   console.log(jwt_decode(loggedIn));

  const [item, setItem] = useState([]);
  const [grade, setGrade] = useState("");
  const [showSubject, setShowSubject] = useState([]);
  //   const [loading, setLoading] = useState("");
  const [buttonGrade, setButtonGrade] = useState(false);
  const [buttonSubject, setButonSubject] = useState(false);
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [showType, setShowType] = useState(false);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // setLoading(true);
    fetch(`https://unicef.koompi.app/public/api/sidebar`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    const tokenn = localStorage.getItem("token");
    setToken(tokenn);
  }, []);
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("thumbnail", thumbnail);
      const response = await fetch(
        `https://unicef.koompi.app/private/api/upload/${grade}/${subject}/${type}`,

        {
          method: "POST",
          body: form,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubject("");
      setType("");
      setGrade("");
      setFile("");
      setThumbnail("");
      // const data = await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-12 ">
      <h1 className="text-gray-700 text-4xl mb-12 underline">Add Content</h1>
      {loggedIn ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 ">
              <h3>Grade</h3>
              <div className="relative mt-3">
                <div
                  onClick={() => setButtonGrade(!buttonGrade)}
                  //   onClick={() => setGrade("hello")}
                  className="bg-base-200 p-3 w-96 rounded-lg cursor-pointer"
                >
                  {grade === "" ? "Select Grade" : grade}
                </div>
                <div
                  className={buttonGrade === false ? "hidden" : "absolute z-10"}
                >
                  <div className="bg-base-300 p3 w-96 rounded-lg ">
                    {item.map((res, index) => (
                      <div
                        onClick={() => {
                          setShowSubject(res.subcategory);
                          setGrade(res.category_id);
                        }}
                        key={index}
                      >
                        <div
                          onClick={() => setButtonGrade(!buttonGrade)}
                          className="p-2 mt-2 hover:bg-white cursor-pointer"
                        >
                          {res.category_id}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* =============>>subject<<============== */}
            {grade === "" ? (
              <div className="mb-6">
                <h4>Subject</h4>
                <div
                  onClick={() => setButonSubject(!buttonSubject)}
                  className="bg-base-200 p-3 mt-2 w-96 rounded-lg cursor-not-allowed text-gray-300"
                >
                  Select Subject
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <h4>Subject</h4>
                <div className="relative mt-3">
                  <div
                    onClick={() => setButonSubject(!buttonSubject)}
                    className="bg-base-200 p-3 w-96 rounded-lg cursor-pointer"
                  >
                    {subject === "" ? "Select Subject" : subject}
                  </div>
                  <div
                    className={
                      buttonSubject === false ? "hidden" : "absolute z-10"
                    }
                  >
                    <div className="bg-base-300 p3 w-60 rounded-lg ">
                      {showSubject.map((res, index) => (
                        <div
                          onClick={() => {
                            //   setButonSubject(res.subcategory);
                            setSubject(res.subcategory_id);
                          }}
                          key={index}
                        >
                          <div
                            //   onClick={() => setLoading("hello")}
                            onClick={() => setButonSubject(!buttonSubject)}
                            className="p-2 mt-2 hover:bg-white cursor-pointer"
                          >
                            {res.subcategory_id}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =================>>type<<============== */}

            <div className="mb-6">
              <h4>Type</h4>
              {grade === "" || subject === "" ? (
                <div
                  onClick={() => setButonSubject(!buttonSubject)}
                  className="bg-base-200 p-3 mt-2 w-96 rounded-lg cursor-not-allowed text-gray-300"
                >
                  Select Type
                </div>
              ) : (
                <>
                  <div
                    onClick={() => setShowType(!showType)}
                    className="bg-base-200 p-3 w-96 rounded-lg cursor-pointer mt-2"
                  >
                    {type === "" ? "Select Type" : type}
                  </div>
                  <div
                    className={showType === false ? "hidden" : "absolute z-10"}
                  >
                    <div className="bg-base-300 p3 w-60 rounded-lg mt-2">
                      <div
                        onClick={() => {
                          setType("Audio");
                          setShowType(!showType);
                        }}
                        className="p-2 mt-2 hover:bg-white cursor-pointer"
                      >
                        Audio
                      </div>
                      <div
                        onClick={() => {
                          setType("Video");
                          setShowType(!showType);
                        }}
                        className="p-2 mt-2 hover:bg-white cursor-pointer"
                      >
                        Video
                      </div>
                      <div
                        onClick={() => {
                          setType("PDF");
                          setShowType(!showType);
                        }}
                        className="p-2 mt-2 hover:bg-white cursor-pointer"
                      >
                        PDF
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* //==========>>upload file<<================= */}
            <div className="mb-6">
              <label>Add File</label>
              <br />
              <input
                // onChange={uploadFileHandler}
                name="file"
                ref={inputRef}
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
            {/* //==========>>upload thumbnail<<================= */}
            <div className="mb-6">
              <label>Add Thumbnail</label>
              <br />

              <input
                ref={inputRef}
                type="file"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                }}
              />
            </div>
            {grade === "" ||
            subject === "" ||
            type === "" ||
            file === null ||
            thumbnail === null ? (
              <button disabled className="btn btn-success w-96">
                Submit
              </button>
            ) : (
              <button type="submit" className="btn btn-success w-96">
                Submit
              </button>
            )}
          </form>
        </>
      ) : (
        <>nothing</>
      )}
    </div>
  );
};

export default Add;
Add.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
