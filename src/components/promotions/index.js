import { Box } from "@mui/material"
import { MessageText, PromotionsContainer } from "../../styles/promotions"
import { useState } from "react"


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "please like and subscribe"
]

export default function Promotions() {
    const [messageIndex , setMessageIndex] = useState(0)
    return (
        <>
            <PromotionsContainer>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <MessageText>
                        {messages[messageIndex]}    
                    </MessageText>                 
                </Box>
            </PromotionsContainer>
        </>
    )
}