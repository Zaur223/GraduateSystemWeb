import { Box } from "@mui/system";
import MessageUser from "../UI/MessageUser";

const MessageUsers = () => {
    return (
        <Box sx={{
            height: '600px',
            width: '300px',
            background: 'rgba(209, 209, 209, 0.5)',
            borderRadius: '7px',
            py: '30px',
            px: '8px'
        }}>
            <MessageUser />
            <MessageUser />
            <MessageUser />
            <MessageUser />
            <MessageUser />
            <MessageUser />
        </Box>
    )
}

export default MessageUsers;