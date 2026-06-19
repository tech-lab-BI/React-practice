import { MdScreenSearchDesktop } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { IoBagCheck } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <a href="#">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <span className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </span>
        <div className="search_bar">
          <MdScreenSearchDesktop size={30}/>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CgProfile size={25}/>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <GrFavorite size={25}/>
            <span className="action_name">Wishlist</span>
          </div>

          <a className="action_container" href="pages/bag.html">
            <IoBagCheck size={25}/>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
