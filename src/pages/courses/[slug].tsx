'use client'
import CourseInformation from "@/components/Courses/CourseInformation";
import HeroImageCourses from "@/components/Courses/HeroImage";
import Layout from "@/components/Layout";
import { Course } from "@/types/courses";
 

const coursesData : Course[] = [
    {
        link: 'music-production',
        duration: '2 meses (16 clases de 2hs cada una)',
        format: 'Clases en vivo + MasterClass + Material Complementario (PDFs, videos, tutoriales, documentales)',
        recordings: 'Todas las sesiones quedan grabadas para repaso.',
        discount: '50% en todas nuestras actividades',
        name: 'Taller Pioneer DJ',
        detail: 'Descubre el poder de la producción musical y lleva tu creatividad al siguiente nivel. Nuestro curso te brinda una formación completa en Ableton Live, síntesis, lenguaje musical y creación de Tracks, con un enfoque práctico y adaptado a tus necesidades.',
        cadence: '1 clase por semana por materia',
        supportSession: 'Sábados a las 12:00pm.',
        structure: [
            {
                name: 'Ableton Live 1 y 2',
                duration: '16 sesiones',
                description: [
                    'Dominar el uso de Ableton Live como plataforma principal para la producción de música electrónica.',
                    'Comprender y aplicar conceptos fundamentales de audio digital, MIDI y estructura de canales.',
                    'Crear y programar bases rítmicas, líneas de bajo y secuencias melódicas usando instrumentos nativos y plugins externos.',
                    'Utilizar efectos, automatizaciones, envíos y retornos para dar profundidad y dinámica a las producciones.',
                    'Integrar escalas, acordes y estructuras musicales en la creación de tracks completos.',
                    'Usar procesadores MIDI y moduladores creativamente para enriquecer la expresión musical.',
                    'Preparar y presentar proyectos musicales completos con un enfoque profesional en la producción electrónica.',

                ]
            },
            {
                name: 'Sintesis 1 y 2',
                duration: '16 sesiones',
                description: [ 
                    'Comprender la historia, fundamentos y tipos de síntesis sonora utilizados en la música electrónica.',
                    'Identificar y operar las partes de un sintetizador (generadores, filtros, moduladores, envolventes, etc.).',
                    'Dominar diferentes técnicas de síntesis: sustractiva, aditiva, wavetable, FM, granular y modelado físico.',
                    'Aplicar conocimientos de síntesis al diseño de sonidos específicos: baterías, bajos, leads, pads, fx y atmósferas.',
                    'Desarrollar habilidades para manipular vocales mediante vocoders y formantes.',
                    'Explorar técnicas de grabación, edición y procesamiento de audio para crear timbres únicos y expresivos.',
                    'Integrar diseño sonoro con herramientas digitales para la producción musical profesional.'
                ]
            },
            {
                name: 'Lenguaje Musical 1 y 2',
                duration: '16 sesiones',
                description: [
                    'Comprender los elementos básicos del lenguaje musical (ritmo, armonía, melodía) aplicados a la música electrónica.',
                    'Dominar escalas, acordes e intervalos para crear armonías y melodías efectivas.',
                    'Aplicar el compás 4/4 y estructuras rítmicas en la producción de beats.',
                    'Usar herramientas como el cifrado inglés y el círculo de quintas para componer y transponer.',
                    'Entender la estructura de un track electrónico y desarrollar habilidades de composición y arreglo.',
                    'Traducir conceptos teóricos en ideas musicales usando herramientas digitales.'
                ]
            },
            {
                name: 'Sesiones de Dudas y Preguntas',
                duration: '4 sesiones',
                // description: [
                //     'Se abrira'
                // ]
            },
            {
                name: 'Creación de un Track desde Cero',
                duration: '4 sesiones'
            },
        ],
    },
    {
        link: 'pioneer-dj',
        name: 'DJ',
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
                duration: '16 sesiones',
                description: [
                    'Aplicar '
                ]
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
]

const Courses = () => {
    return (
        <Layout>
            <HeroImageCourses />
            <CourseInformation data={coursesData}  />
        </Layout>
    )
};

export default Courses