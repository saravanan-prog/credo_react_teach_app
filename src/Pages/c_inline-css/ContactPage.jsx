
export default function ContactPage(){

    const contactStyle = {
        border:"2px solid green",
        height:"100px",
        textAlign:"center",
        paddingTop:"20px"

    }


    return (
        <>
            <div>
                <h1 style = {
                        {
                            color:"red",
                            backgroundColor:"blue",
                            fontSize:"16px"
                        }
                    }
                > Contact Page </h1>
            
                <div style={contactStyle}>
                    <p> Email : saravanan@gmail.com </p> 
                    <p> Contact : + 91 91235859568 </p> 
                </div>
            </div>
        </>
    )
}