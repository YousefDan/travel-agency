const Heading = ({ title, subTitle }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <span style={{ color: "var(--blue-color)", fontSize: "2rem" }}>
        {title}
      </span>
      <h1 style={{ fontSize: "4rem", color: "white", marginTop: "0.5rem" }}>
        {subTitle}
      </h1>
    </div>
  );
};

export default Heading;
