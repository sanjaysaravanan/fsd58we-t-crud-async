// Simple Loading Indicator when an API is ongoing

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        backgroundColor: "white",
      }}
    >
      <i className="fa-solid fa-spinner fa-3x fa-spin"></i>
    </div>
  );
};

export default Loader;
