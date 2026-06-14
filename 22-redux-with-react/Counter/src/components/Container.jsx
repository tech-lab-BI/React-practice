const Container = ({children}) => {
  return (
    <div className="card container text-center" style={{ width: "70%", margin: "100px"}}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
export default Container;
