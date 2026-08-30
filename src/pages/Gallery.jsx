import appleImage from '../assets/images/apple-image.jpg'

export default function Gallery(){

    return(
        <>
            <div className="title">
                <h3>Gallery</h3>
            </div>
            <div>
                <img 
                    src = {appleImage} 
                    alt = {"apple-image"}
                    height={300}
                    width={300}
                
                />

                <img 
                    src = {appleImage} 
                    alt = {"apple-image"}
                    height={300}
                    width={300}
                
                />
            </div>
        
        
        </>
    )
}