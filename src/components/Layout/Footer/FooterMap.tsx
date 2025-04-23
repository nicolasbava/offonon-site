import { Box } from "@mui/material";

const FooterMap = () => {
    return (
        <Box sx={{'& iframe' : {maxWidth: {xs: '280px', sm: '380px', md: '420px'}, border: 'none', pt: '1px' }}}>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6091.146823962427!2d-99.17839108177915!3d19.414938841591763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff445e6ad69d%3A0xff5b5e32bf3a87b5!2sYautepec%202%2C%20Colonia%20Condesa%2C%20Cuauht%C3%A9moc%2C%2006140%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1745425242370!5m2!1ses-419!2smx" width="400" height="250"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    )
};
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d235.1836047526048!2d-99.17594552823697!3d19.415098624669493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1745429801311!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
export default FooterMap;