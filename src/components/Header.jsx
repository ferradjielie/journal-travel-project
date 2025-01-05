
import globeIcon from '../assets/globe.png';

function Header() {
   return( 
      <header>
          <img src={globeIcon} alt="globe icon" />
          <h1> my travel journal</h1>
      </header>
   )
}

export default Header;
