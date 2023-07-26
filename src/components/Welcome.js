import React from 'react'
import galleryImagesData from './data/gallery_images.json'

function Welcome() {
  return (
    <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {
                        galleryImagesData.map((image) => 
                            <img className={image.className} src={image.src} alt={image.alt}/>
                        )
                    }
        
                </div>
                <h1>Welcome to the Gotel&nbsp;Hotel</h1>
                <p>The original Gotel Hotel perseveres after 50 years in the heart of SoHo. The cobblestoned neighborhood has something for everyone—from nightlife to dining to historic sights. And the not-to-miss Museum of Icecream is a great place for travelers and locals to engage. &nbsp;To learn more about sensational things to do in SoHo, browse here <a href="https://secretnyc.co/what-to-do-in-soho-nyc/#:~:text=From%20its%20Instagrammable%20cobblestone%20streets,celebrity%20sightings%20and%20restaurant%20staples.">Inside scoop on all the best spots around SoHo</a>.</p>
            </article>
        </div>
  )
}

export default Welcome;