import React from 'react';

const Header = () => {
    return (
        <header id="intro">
          <article class="fullheight">
            <div class="hgroup">
              <h1>Gotel Hotel</h1>
              <h2>SoHo</h2>
              <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
            </div>
          </article>

          <nav id="nav">
            <div className="navbar">
              <div className="brand"><a href="#welcome">Gotel <span>Hotel</span></a></div>
              <ul>
                <li><a class="icon info" href="#hotelinfo"><span>info</span></a></li>
                <li><a className="icon rooms" href="#rooms"><span>rooms</span></a></li>
                <li><a className="icon dining" href="#dining"><span>dining</span></a></li>
                <li><a className="icon events" href="#events"><span>events</span></a></li>
                <li><a className="icon attractions" href="#attractions"><span>attractions</span></a></li>
              </ul>
            </div>
          </nav>
        </header>
    )
}


export default Header;
