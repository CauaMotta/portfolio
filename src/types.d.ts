declare type Project = {
  id: number
  image: string
  title: string
  resume: string
  linkRepo: string
  published: boolean
  linkDeploy?: string
  tecnologies: string[]
}

declare type Certificate = {
  id: number
  school: string
  title: string
  date: string
  link: string
}
