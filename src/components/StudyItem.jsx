import PropTypes from "prop-types";

const StudyItem = ({ year, title, academy, duration }) => {
  return (
    <ol className="flex flex-col md:flex-row relative ">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs">
          <span className="inline-block px-2 py1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="text-lg font-semibold text-[#6a6a6c]">
            {academy}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
      </li>
    </ol>
  );
};
StudyItem.propTypes = {
  year: PropTypes.number.isRequired, // Assuming year is a number
  title: PropTypes.string.isRequired,
  academy: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
export default StudyItem;
