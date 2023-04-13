import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#fff",
            zIndex: 10000,
            overflow: "hidden",
          }}
        >
          <div className="preloader-logo">
            <img
              src="/assets/img/favicon.png"
              width="140"
              height="80"
              alt="pre-loader"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Preloader;
