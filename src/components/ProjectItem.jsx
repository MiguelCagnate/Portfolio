
const ProjectItem = ({img,title }) => {
  return (
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
          <div>
              { title}
          <img src={img} alt="/" className="rounded-xl group-hover:opacity-10"/>
          </div>
    
    </div>
  )
}

export default ProjectItem
