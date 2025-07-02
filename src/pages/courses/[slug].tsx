'use client'
import CourseInformation from "@/components/Courses/CourseInformation";
import HeroImageCourses from "@/components/Courses/HeroImage";
import Layout from "@/components/Layout";
import { Course } from "@/types/courses";
import { useRouter } from "next/router";
 

const coursesData : Course[] = [
    {
        link: 'music-production',
        name: 'Producción Musical Grupal',
        intro: 'Objetivos Generales del Curso Integral de Producción Musical:',
        detail: 'El objetivo general de este curso es proporcionar al estudiante una formación sólida y completa en los tres pilares fundamentales de la producción musical: teoría musical, diseño de sonido y producción digital. A lo largo de este programa, el alumno adquirirá las habilidades necesarias para:',
        structure: [
            'Comprender y aplicar los fundamentos del lenguaje musical, incluyendo armonía, melodía, ritmo, escalas y estructuras, con el fin de componer y estructurar piezas musicales de manera coherente y profesional.',
            'Diseñar y manipular sonido mediante técnicas de síntesis (sustractiva, aditiva, FM, granular, wavetable, modelado físico), desarrollando timbres complejos y expresivos para su aplicación en diversos estilos de música electrónica.',
            'Producir, editar y finalizar proyectos musicales completos utilizando Ableton Live, haciendo uso efectivo de instrumentos virtuales, efectos, procesadores MIDI, samplers y técnicas avanzadas de mezcla y automatización.'
        ],
        outro: 'Al finalizar el curso, el estudiante será capaz de desarrollar composiciones originales, diseñar sus propios sonidos, y ejecutar una producción profesional desde cero, consolidando así una base técnica y creativa robusta para su carrera musical.'
    },
    {
        link: 'dj',
        name: 'Curso de Dj',
        intro: 'Objetivos Generales del Curso Integral de DJ (Vinilos, Rekordbox + Timecode, CDJ 3000)',
        structure: [
            'Formar DJs completos y versátiles, capaces de desempeñarse con soltura en distintos entornos técnicos: desde equipos análogos (vinilos) hasta sistemas digitales de última generación (CDJ 3000 y Rekordbox).',
            'Desarrollar el oído musical y la percepción rítmica del alumno a través del beatmatching manual, la comprensión del compás y la estructura musical, fundamentales para una mezcla precisa y fluida.',
            'Fomentar el dominio técnico de los equipos Pioneer: mezcladoras, reproductores, procesadores de efectos y software, asegurando que el alumno sepa conectar, configurar y operar cada elemento de forma profesional.',
            'Enseñar el uso creativo de efectos, loops, hot cues y funciones avanzadas, aplicándolos con criterio musical y en función de la narrativa del set.',
            'Introducir el uso profesional de Rekordbox DJ y Rekordbox DVS, incluyendo la organización de librerías, la preparación de sets y la integración con hardware Pioneer.',
            'Guiar al alumno en la construcción de un set musical coherente, ayudándolo a definir su estilo, desarrollar criterio musical y estructurar una sesión completa.',
            'Preparar al estudiante para presentaciones en vivo, brindándole la confianza, técnica y conocimientos necesarios para desempeñarse como DJ en contextos profesionales, clubes, festivales o eventos privados'
        ],
    },
        {
        link: 'mix-master',
        name: 'Curso de Mix/Master',
        intro: 'Objetivos Generales del Curso:',
        structure: [
            'Comprender los fundamentos del audio digital y analógico, incluyendo conceptos como frecuencia, amplitud, fase, rango dinámico y cuantización, esenciales para una producción de sonido profesional.',
            'Dominar el uso de los principales procesadores de señal (ecualizadores, compresores, reverbs, delays, etc.) aplicados a la mezcla y masterización de música electrónica o cualquier género musical.',
            'Desarrollar criterio técnico y artístico para tomar decisiones informadas al procesar audio, con enfoque tanto correctivo como creativo.',
            'Aplicar técnicas de mezcla profesional sobre un track completo, desde la preparación del proyecto hasta la creación de un balance sonoro coherente y musical.',
            'Adquirir habilidades de masterización digital, entendiendo cómo preparar un track para su distribución final, manteniendo calidad sonora y cumpliendo con los estándares de plataformas digitales.',
            'Fomentar la autonomía del alumno para que pueda mezclar y masterizar sus propias producciones con confianza y consistencia, utilizando cualquier DAW o entorno profesional.',
            'Explorar técnicas avanzadas de procesamiento como compresión paralela, procesamiento Mid/Side y automatización, que aporten carácter y estilo propio a sus producciones.',
            'Finalizar el curso con un proyecto práctico completo, donde el alumno haya mezclado y masterizado al menos un track aplicando todo lo aprendido en un contexto real.'
        ],
    },
    {
        link: 'personalized-classes',
        name: 'Personalizadas',
        intro: 'Objetivos Generales de las Clases Personalizadas:',
        structure: [
            'Atender y resolver dudas específicas del alumno relacionadas con sus propios proyectos musicales, ya sea en mezcla, composición, síntesis, estructura, arreglos, diseño sonoro, workflow o exportación.',
            'Ofrecer acompañamiento personalizado que permita al alumno avanzar de forma eficiente en su proceso creativo y técnico, evitando bloqueos y acelerando resultados.',
            'Impulsar el desarrollo de proyectos musicales concretos, optimizando el tiempo de clase para que el alumno se lleve avances tangibles y aplicables inmediatamente.',
            'Fomentar el aprendizaje activo y contextualizado, donde cada herramienta, plugin o técnica se enseña desde la necesidad real del alumno y no solo desde la teoría.',
            'Fortalecer la confianza y el criterio creativo del alumno, ayudándolo a tomar mejores decisiones en su proceso de producción y a consolidar su identidad sonora.'
        ],
    },
    {
        link: 'private-mentoring',
        name: 'Mentorías Privadas (por hora)',
        intro: 'Objetivos Generales de la Mentoría:',
        structure: [
            'Sesiones 1:1 con un  instructor de OFFONON.',
            'Resolución de dudas sobre producción, mezcla o carrera.',
        ],
        sub_course: [
          {
            name: 'OFFONON BASIC',
            structure: [
              'Acompañar al alumno en el desarrollo técnico y creativo de un proyecto musical, brindando sesiones personalizadas que permitan avanzar de forma clara, eficiente y enfocada.',
              'Profundizar en procesos clave de producción profesional, como mezcla avanzada, mastering y toma de decisiones creativas, adaptadas al estilo y objetivos del alumno.',
              'Profundizar en procesos clave de producción profesional, como mezcla avanzada, mastering y toma de decisiones creativas, adaptadas al estilo y objetivos del alumno.',
              'Documentar el proceso con contenido para redes sociales, generando 3 reels que potencien la presencia digital del alumno y comuniquen su crecimiento artístico.',
              'Impulsar el desarrollo de identidad sonora y autonomía creativa, ayudando al alumno a tomar mejores decisiones técnicas y estéticas sobre su música.',
            ]
          },
             {
            name: 'OFFONON INTERMEDIATE',
            structure: [
              'Impulsar el lanzamiento profesional de un proyecto musical, brindando al artista las herramientas y contenidos clave para presentar su trabajo con calidad en plataformas digitales y redes sociales.',
              'Guiar al alumno en la finalización de una producción original, a través de sesiones personalizadas enfocadas en técnica, creatividad y narrativa musical, listas para distribución.',
              'Generar contenido audiovisual estratégico (reels, fotos y entrevistas) para fortalecer la presencia del artista en redes sociales y medios digitales, alineado con su identidad sonora y visual.',
              'Desarrollar un presskit profesional que sirva como carta de presentación ante sellos, bookers, medios o festivales, facilitando oportunidades reales de exposición y contratación.',
              'Ofrecer un acompañamiento intensivo pero accesible durante el proceso de lanzamiento, que combine producción, comunicación y visibilidad, todo bajo una misma dirección creativa.',
            ]
          },
             {
            name: 'OFFONON PRO',
            detail: 'Desarrollar y finalizar proyectos musicales con calidad profesional a través de asesoría personalizada en producción, mezcla y masterización.',
            structure: [
              'Crear contenido audiovisual atractivo y auténtico que refleje la identidad artística del alumno, para potenciar su presencia en redes sociales y medios digitales.',
              'Fortalecer la imagen y posicionamiento profesional del artista mediante sesiones fotográficas, presskits y entrevistas en medios especializados.',
              'Generar oportunidades reales de exposición en vivo, incluyendo fechas y presentaciones grabadas, con material promocional de alta calidad para ampliar su alcance.',
              'Incorporar tecnologías y herramientas innovadoras como el escaneo 3D para avatar, para diversificar el contenido y las posibilidades creativas del artista.',
              'Acompañar y apoyar al alumno durante todo el proceso, asegurando la resolución de dudas y la evolución constante de su proyecto musical y su marca personal.',
            ]
          }
        ]
    },
]

const getCourseBySlug = (slug: string): Course | undefined =>{
  return coursesData.find(course => course.link === slug);
}
const Courses = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Esperando el slug
  if (typeof slug !== 'string') {
    return (
      <Layout>
        <HeroImageCourses name={'cursos'} />
        <div className="py-12 text-center text-lg">Cargando curso...</div>
      </Layout>
    );
  }

  const course = getCourseBySlug(slug);

  // Si no se encuentra el curso
  if (!course) {
    return (
      <Layout>
        <HeroImageCourses name={'cursos'} />
        <div className="py-12 text-center text-lg text-red-500">
          El curso que estás buscando no fue encontrado.
        </div>
      </Layout>
    );
  }

  // Curso encontrado
  return (
    <Layout>
      <HeroImageCourses name={course.name} />
      <CourseInformation data={course} />
    </Layout>
  );
};

export default Courses;