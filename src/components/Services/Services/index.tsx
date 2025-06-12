import { Box, Grid2, Stack } from "@mui/material";
import { SuperiorShadow } from "../../Home/RentsDJProduction/RentsDJProductionSection";
import CourseStructure from "./CourseStructure";
import CourseDetail from "./CourseDetail";
import { Course } from "@/types/courses";
// import BasicTable from "./CoursesCalendar";
import GroupScheduleTable from "./CoursesCalendar";
import CourseDetail2 from "./CourseDetail2";

const ServiceInformation = ({data} : {data: Course[]}) => {
    const groupData = [
        {
          name: 'Grupo 1 Matutino',
          schedule: {
            Lunes: '10:00 - 12:00 am',
            Miércoles: '10:00 - 12:00 am',
          },
        },
        {
          name: 'Grupo 1 Vespertino',
          schedule: {
            Lunes: '9:00 - 10:00 pm',
            Miércoles: '9:00 - 10:00 pm',
          },
        },
        {
          name: 'Grupo 2 Matutino',
          schedule: {
            Martes: '10:00 - 12:00 am',
            Jueves: '10:00 - 12:00 am',
          },
        },
        {
          name: 'Grupo 2 Vespertino',
          schedule: {
            Martes: '9:00 - 10:00 pm',
            Jueves: '9:00 - 10:00 pm',
          },
        },
        {
          name: 'Grupo 3',
          schedule: {
            Sábado: '9:00 am - 1:00 pm',
          },
        },
      ];

    return (
        <Box
            sx={{
                minHeight: '170vh',
                background: '#1d1923',
                paddingBottom: '30vh',
                position: 'relative',
                zIndex: 10
            }}
        >
            <SuperiorShadow />

            <Grid2 container spacing={0} sx={{
                maxWidth: {xs: '90%',  lg: '70%'},
                margin: 'auto',
                paddingTop: {xs:12, md:35},
                marginBottom: 8,
            }}>
                <Grid2 
                    size={{ xs: 12, md: 6 }} 
                >
                    <CourseStructure data={data} />
                </Grid2>
                <Grid2 
                    size={{ xs: 12, md: 6 }}
                >
                    <CourseDetail data={data[0]} />
                    {/* <GroupScheduleTable groups={groupData} className="bg-transparent" /> */}
                </Grid2>
            </Grid2>
            <Stack sx={{maxWidth: {xs: '100%', md: '60%'}, margin: 'auto'}}>
                <CourseDetail2 data={data[0]} />
                <GroupScheduleTable groups={groupData} className="bg-transparent" />
            </Stack>
        </Box>
    )
};

export default ServiceInformation;