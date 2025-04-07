
export type CoursesItemProps = {
    titulo: string;
    resumen: string;
    descripcion: string[];
    foto: string;
    fotoAlt: string;
};


export type CoursesArrayProps = {
    titulo: string;
    descripcion: string;
    foto: string;
    fotoAlt: string
}[];


export interface CourseStructureItem {
    name: string
    duration: string
  }
  
  export interface Course {
    link: string
    name: string
    detail: string
    duration: string
    format: string
    recordings: string
    discount: string
    structure: CourseStructureItem[]
  }