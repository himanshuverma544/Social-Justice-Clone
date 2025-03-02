export default function LowerFooter() {

  return (
    <div className="lower-footer w-full flex flex-col justify-between items-center gap-1 px-5 py-5 bg-darkGreen text-white md:flex-row">

      <div className="visitors-cont w-full flex justify-center items-center gap-1 text-sm md:w-1/2 md:justify-start xs:text-base">
        <div className="label">
          No. of visitors:
        </div>
        <div className="num">
          3,935
        </div>
      </div>

      <div className="last-updated-date w-full flex justify-center gap-1 md:w-1/2 md:justify-end xs:text-lg">
        <div className="label">
          Last updated on:
        </div>
        <div className="date">
          27 January 2025
        </div>
      </div>
    </div>
  );
}