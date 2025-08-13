import { Box, Typography } from "@mui/material";

const ProfileSertificates = () => {
    return (
        <Box sx={{
            position: 'relative',
            pl: '36px',
            width: '554px',
            minHeight: '216px',
            background: 'rgba(255, 255, 255, 0.73)',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: '5px'
        }}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '7px', pt: '15px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
                    <g clip-path="url(#clip0_1_361)">
                    <path d="M23.7856 14.8931V18.4274C23.7856 19.7112 22.9352 20.8568 21.6186 21.3931C20.0184 22.0431 17.5953 22.7499 14.6419 22.7499C11.6885 22.7499 9.26548 22.0431 7.65619 21.3931C6.34865 20.8568 5.49829 19.7112 5.49829 18.4274V14.8931L11.9994 17.5337C12.8315 17.8749 13.7276 18.0456 14.6419 18.0456C15.5563 18.0456 16.4524 17.8749 17.2845 17.5337L23.7856 14.8931Z" fill="#345375"/>
                    <path d="M27.4432 13.4062V18.6875C27.4432 19.1344 27.0318 19.5 26.5289 19.5C26.026 19.5 25.6145 19.1344 25.6145 18.6875V14.1538L27.4432 13.4062Z" fill="#345375"/>
                    <path d="M12.7566 16.0581C13.3555 16.3011 13.9983 16.4229 14.6421 16.4229C15.2858 16.4229 15.9277 16.3019 16.5275 16.0581L28.2048 11.3148C28.8632 11.0474 29.2719 10.4811 29.2719 9.83682C29.2719 9.1925 28.8632 8.62538 28.2048 8.35807L16.5275 3.6155C15.3287 3.12882 13.9563 3.12882 12.7576 3.6155L1.07927 8.35725C0.420929 8.62538 0.012207 9.19169 0.012207 9.836C0.012207 10.4803 0.420929 11.0466 1.07927 11.3148L12.7566 16.0581Z" fill="#345375"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_361">
                    <rect width="29.2597" height="26" fill="white" transform="translate(0.012207)"/>
                    </clipPath>
                    </defs>
                </svg>
                <Typography variant="h2" sx={{fontSize: '20px', fontWeight: '700', color: '#345375'}}>Eğitim</Typography>
            </Box>
            <Box sx={{position: 'absolute', top: '0', right: '15px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="72" viewBox="0 0 51 72" fill="none">
                    <path d="M0 0H51V67.4568C51 70.8486 47.0435 72.7011 44.4384 70.529L28.0616 56.8739C26.5779 55.6369 24.4221 55.6369 22.9384 56.8739L6.56159 70.5289C3.95648 72.7011 0 70.8486 0 67.4568V0Z" fill="url(#paint0_linear_1_366)"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_366" x1="25.8806" y1="98.1667" x2="25.9534" y2="-27" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#69A2E3"/>
                    <stop offset="1" stop-color="white"/>
                    </linearGradient>
                    </defs>
                </svg>
            </Box>
        </Box>
    ) 
}

export default ProfileSertificates;