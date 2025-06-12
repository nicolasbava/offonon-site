export interface SubCourse {
  name: string
  structure: string[]
  detail?: string
}
export interface Course {
    link: string
    name: string
    intro: string
    structure: string[]
    sub_course?: SubCourse[]
    detail?: string
    outro?: string
}