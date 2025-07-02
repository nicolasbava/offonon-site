'use client'
import HeroImageCourses from "@/components/Services/HeroImage";
import Layout from "@/components/Layout";
import ServiceInformation from "@/components/Services/Services";
import { ServiceI } from "@/types/services";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import HeroImageServices from "@/components/Services/HeroImage";
import MixMasterForm from "@/components/Services/Mix&Master/MixMasterForm";

 
const servicesData : ServiceI[] = [
    {
        link: 'dj-booth',
        title: 'Renta de Cabina Profesional',
        description: 'En OFFONON te ofrecemos una experiencia completa en cabina, equipada con CDJ 3000 + Mixer DJM-750MK2, en un entorno pensado para que tu música suene y luzca increíble.',
        title_structure: '¿Qué incluye la renta?',
        structure: [
            'Acceso a quien renta, 2 horas de uso exclusivo de la cabina OFFONON más un acompañante. (Acompañante extra tiene un costo de $150.)',
            'CDJ 3000 + DJM 750MK2, completamente calibrados',
            'Grabación de audio profesional del set (WAV o MP3)',
            'Grabación de video en HD desde 1 o 2 ángulos fijos',
            'Ambiente tratado acústicamente y visualmente atractivo',
            'Asistencia técnica básica durante la sesión'
        ],
        outro: [
            'Disponible bajo reservación previa (mínimo 48 hrs)',
            'Agrega servicio de edición de video, color, subtítulos o reels con costo adicional.'
        ]
    },
    {
        link: 'photos',
        title: 'Sesión de Fotos Profesional ',
        description: 'En OFFONON te ofrecemos una experiencia completa en cabina, equipada con CDJ 3000 + Mixer DJM-750MK2, en un entorno pensado para que tu música suene y luzca increíble.',
        structure: [
            'Fotografía en estudio OFFONON con iluminación profesional.',
            'Sesión de 50 fotos.',
            'Entrega de 25 fotos editadas.',
            'Incluye contenido en crudo.'
        ]
    },
    {
        link: 'presskit-bio-web',
        title: 'Presskit + Bio + Página Web',
        description: 'En OFFONON te ofrecemos una experiencia completa en cabina, equipada con CDJ 3000 + Mixer DJM-750MK2, en un entorno pensado para que tu música suene y luzca increíble.',
        structure: [
            'Diseño de presskit profesional (PDF + versión web).',
            'Redacción de biografía artística.',
            'Hosting y diseño one-page personalizado.',
        ]
    },
    {
        link: 'mix-master',
        title: 'Servicio de Mezcla y Master',
        description: 'Servicio de Mezcla y Master',
        sub_service: [
            {
                title: 'Mixdown',
                description: [
                    {
                        price: '$1,000 MX',
                        stems: 'Up to 15 stems',
                    },
                    {
                        price: '$1,500 MX',
                        stems: '15 to 30 stems',
                    },
                    {
                        price: '$2,000 MX',
                        stems: '31 to 45 stems',
                    },
                    {
                        price: '$2,500 MX',
                        stems: '+ than 45 stems',
                    },
                ]

            },

            {
                title: 'Mixdown & Mastering',
                description: [
                    {
                        price: '$1,500 MX',
                        stems: 'Up to 15 stems',
                    },
                    {
                        price: '$2,000 MX',
                        stems: '16 to 30 stems',
                    },
                    {
                        price: '$2,500 MX',
                        stems: '31 to 45 stems',
                    },
                    {
                        price: '$3,000 MX',
                        stems: '+ than 45 stems',
                    },
                ]
            },
            {
                title: 'Mastering',
                description: [
                    {
                        price: '$700 MX',
                        stems: 'Stereo Mastering',
                    },
                ]
            },
        ]
    }
]

const Services = () => {
    const router = useRouter();
    const {slug} = router.query;

    if (typeof slug !== 'string') {
        return (
        <Layout>
            <HeroImageServices name={'Servicios'} />
            <div className="py-12 text-center text-lg">Cargando curso...</div>
        </Layout>
        );
    }
    
    const getCourseBySlug = (slug: string): ServiceI | undefined =>{
      return servicesData.find(course => course.link === slug);
    }

    const service = getCourseBySlug(slug);
    if (!service) {
        return (
        <Layout>
            <HeroImageServices name={'Servicios'} />
            <div className="py-12 text-center text-lg text-red-500">
            El curso que estás buscando no fue encontrado.
            </div>
        </Layout>
        );
    }


    return (
        <>
        <Layout>
            <HeroImageServices name={service.title} />
            {service ? 
                <ServiceInformation data={service}  />
                : 'NO ENCONTRO SERVICIO' }

            {service && service.link === 'mix-master' && (
                <MixMasterForm />
            )}
        </Layout>
        </>
    )
};

export default Services