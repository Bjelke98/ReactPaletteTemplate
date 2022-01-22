import {Typography, Box} from '@mui/material'
const Annenside = (props) => {
    return (
        <div>
    
        <Box sx={{
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.light",
            width: 300,
            height: 300,
            display: 'flex',
            '&:hover': {
                backgroundColor: 'primary.main',
              },
        }}>

            <Typography variant="body1" >Hei</Typography>

            

        </Box>

        </div>
    );
};

Annenside.defaultProps = {
    tekst: "Hei"
}

export default Annenside;
