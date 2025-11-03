export interface Project {
  id: string
  title: string
  description: string
  isFeatured: boolean
  coverImage: string
  tags: string[]
  technologies: string[]
  role: string
  duration: string
  overview: string
  challenge: string
  solution: string
  results: string
  liveUrl: string
  sourceCode?: string
  images: string[]
}
