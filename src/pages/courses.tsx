'use client'
import CourseInformation from "@/components/Courses/CourseInformation";
import HeroImageCourses from "@/components/Courses/HeroImage";
import Layout from "@/components/Layout";

export interface CoursesI {
    name: string,
    structure: {
        name: string,
        duration: string
    }[]
}

const Courses = () => {

    const coursesData = [
        {
            link: 'music-production',
            name: 'Producción Musical',
            detail: 'Descubre el poder de la producción musical y lleva tu creatividad al siguiente nivel. Nuestro curso te brinda una formación completa en Ableton Live, síntesis, lenguaje musical y creación de Tracks, con un enfoque práctico y adaptado a tus necesidades.',
            duration: '4 meses (56 clases de 2hs c/u)',
            format: 'Clases en vivo + MasterClass + Material Complementario (PDFs, videos, tutoriales, documentales)',
            recordings: 'Todas las sesiones quedan grabadas para repaso.',
            discount: '50% en MasterClass',
            cadence: '1 clase por semana por materia',
            supportSession: 'Sábados a las 12:00pm.',
            structure: [
                {
                    name: 'Ableton Live 1 y 2',
                    duration: '16 sesiones'
                },
                {
                    name: 'Sintesis 1 y 2',
                    duration: '16 sesiones'
                },
                {
                    name: 'Lenguaje Musical 1 y 2',
                    duration: '16 sesiones'
                },
                {
                    name: 'Sesiones de Dudas y Preguntas',
                    duration: '4 sesiones'
                },
                {
                    name: 'Creación de un Track desde Cero',
                    duration: '4 sesiones'
                },
            ],
        },
        {
            link: 'dj',
            name: 'Curso de DJ',
            detail: 'Descubre el poder de la producción musical y lleva tu creatividad al siguiente nivel. Nuestro curso te brinda una formación completa en Ableton Live, síntesis, lenguaje musical y creación de Tracks, con un enfoque práctico y adaptado a tus necesidades.',
            duration: '4 meses (56 clases de 2hs c/u)',
            format: 'Clases en vivo + MasterClass + Material Complementario (PDFs, videos, tutoriales, documentales)',
            recordings: 'Todas las sesiones quedan grabadas para repaso.',
            discount: '50% en MasterClass',
            cadence: '1 clase por semana por materia',
            supportSession: 'Sábados a las 12:00pm.',
            structure: [
                {
                    name: 'Ableton Live 1 y 2',
                    duration: '16 sesiones'
                },
                {
                    name: 'Sintesis 1 y 2',
                    duration: '16 sesiones'
                },
                {
                    name: 'Lenguaje Musical 1 y 2',
                    duration: '16 sesiones'
                },
                {
                    name: 'Sesiones de Dudas y Preguntas',
                    duration: '4 sesiones'
                },
                {
                    name: 'Creación de un Track desde Cero',
                    duration: '4 sesiones'
                },
            ],
        }
    ]

    return (
        <Layout>
            <HeroImageCourses />
            <CourseInformation data={coursesData} />
        </Layout>
    )
};

export default Courses