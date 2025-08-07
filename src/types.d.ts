import { ProjectType } from './utils'

declare type Project = {
  image: string
  title: string
  resume: string
  linkRepo: string
  published: boolean
  linkDeploy?: string
  detach?: boolean
  type: ProjectType.BACKEND | ProjectType.FRONTEND
  technologies: string[]
}

declare type Certificate = {
  school: string
  title: string
  date: string
  link: string
}
