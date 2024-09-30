import Link from "next/link"
import Layout from "../../components/Layout"
import { FaArrowLeftLong } from "react-icons/fa6";
import { getAllProjects } from "../../functions/getAllProjects";
import ProjectCard from "../../components/ProjectCard";


const ProjectsPage = ({ projects }) => {
   console.log(projects)

   return (
      <Layout title={"Portfolio | Projects"} description={"My Projects"}>
         <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16 ">
            <Link href={"/"} className="flex gap-2 items-center">
               <FaArrowLeftLong />
               <span>Back to Home</span>
            </Link>

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
               {projects.map(project => (
                  <ProjectCard key={project.id} project={project}/>
               ))}
            </div>

         </section>
      </Layout>
   )
}

export default ProjectsPage

export const getStaticProps = async () => {
   const projects = await getAllProjects()

   return {
      props: {
         projects
      }
   }
}