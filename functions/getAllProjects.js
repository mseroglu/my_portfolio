import { gql } from 'graphql-request'
import { graphcms } from '../client'

export const getAllProjects = async () => {
   const query = gql`
   {
      projects(last: 3) {
      id
      description
      tags
      title
      sourceCode
      image {
         url
         }
      }
   }
   `
   const { projects } = await graphcms.request(query)

   return projects
}