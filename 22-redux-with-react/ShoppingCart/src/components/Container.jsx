
const Container = ({ children }) => {
  return (
    <>
      <div className="card" style={{ width: "50%", margin: "200px 250px" }}>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};
export default Container;
