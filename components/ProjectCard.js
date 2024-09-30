import { motion } from "framer-motion"

const ProjectCard = ({ project: { id, title, description, sourceCode, tags, image } }) => {

   return (
      <motion.a
         href={sourceCode}
         target="_blank"
         rel="noreferrer"
         className="rounded-xl w-full bg-gradient-to-r from-[#6EE787] via-[#3882f6] to-[#9333ea] p-1 hover:cursor-pointer "
         whileHover={{ scale: 1.05, transition: { duration: .4 } }}
      >
         <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-700">
            <div className="flex flex-col items-center justify-between gap-5 h-full">
               <div className="flex flex-col items-center ">
                  <img src={image[0].url} alt={title} className="object-cover w-full rounded-lg max-h-64" />
                  <h2 className="text-2xl font-semibold mt-3">{title}</h2>
                  <p className="text-md">{description}</p>
               </div>
               <div className="flex items-center gap-2">
                  {tags.map(tag => <span key={tag} className="bg-pink-600 px-3 rounded-md text-white">{tag}</span>)}
               </div>
            </div>

         </div>

      </motion.a>
   )
}

export default ProjectCard
