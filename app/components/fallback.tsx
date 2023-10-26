export default function Fallback() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>
        </div>
      </div>
    </>
  );
}
