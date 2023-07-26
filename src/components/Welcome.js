import React from 'react'

function Welcome() {
  return (
    <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures"/>
                    <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures"/>
                    <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures"/>
                    <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures"/>
                    <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures"/>
                </div>
                <h1>Welcome to the Gotel&nbsp;Hotel</h1>
                <p>The original Gotel Hotel perseveres after 50 years in the heart of SoHo. The cobblestoned neighborhood has something for everyone—from nightlife to dining to historic sights. And the not-to-miss Museum of Icecream is a great place for travelers and locals to engage. &nbsp;To learn more about sensational things to do in SoHo, browse here <a href="https://secretnyc.co/what-to-do-in-soho-nyc/#:~:text=From%20its%20Instagrammable%20cobblestone%20streets,celebrity%20sightings%20and%20restaurant%20staples.">Inside scoop on all the best spots around SoHo</a>.</p>
            </article>
        </div>
  )
}

export default Welcome;