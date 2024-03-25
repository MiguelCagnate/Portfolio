import PropTypes from "prop-types";
const ProjectItem = ({ img, title, software, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-50 shadow-lg shadow-gray-300 rounded-lg group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={`${title} Project Image`}
        className="rounded-xl group-hover:opacity-10"
        loading="lazy"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{software}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="text-center p-3 rounded-xl bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  software: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ProjectItem;
