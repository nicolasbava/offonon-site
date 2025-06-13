export type SubServiceDetailI = {
  price: string
  stems: string
}

export interface SubServiceI {
  title: string
  description: SubServiceDetailI[]
}
export interface ServiceI {
  link: string
  title: string
  title_structure?: string
  structure?: string[]
  description?: string
  outro?: string[]
  sub_service?: SubServiceI[]
}


// sub_service: [
//             {
//                 title: 'Mixdown',
//                 description: [
//                     {
//                         price: '$1,000 MX',
//                         stems: 'Up to 15 stems',