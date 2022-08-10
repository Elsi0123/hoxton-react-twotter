import { AiFillHome } from "react-icons/ai";
import {FaHashtag  } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import {BiMessageDetail } from "react-icons/bi";
import {BsBookmark} from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";


export function LeftMenu() {
    return (
        <div className="leftMenu">
            <button className="TweetLogo">
                <img src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0" width={40} alt="" />
            </button>
            <div className="menuLogo">
                <div className="homeButton">
            <button className="homebutton">
                <AiFillHome />
               <Link to={"/home"}><h5>Home</h5></Link>
            </button>
            </div>
            <button> 
                <FaHashtag />
              <Link to={"/explore"}> <h5>Explore</h5></Link>
            </button>
            <button>
                <MdOutlineNotifications />
              <Link to={"/notification"}><h5>Notification</h5> </Link>
            </button>
            <button>
           < BiMessageDetail />
               <Link to={"/messages"}><h5>Messages</h5></Link>
            </button>
            <button>
                <BsBookmark />
               <Link to={"/bookmarks"}><h5>Bookmarks</h5></Link>
            </button>
            <button>
                <RiFileList2Line />
               <Link to={"/lists"}><h5>Lists</h5></Link>
            </button>
            <button>
                <MdOutlinePersonOutline/>
              <Link to={"/profile"}> <h5>Profile</h5></Link>
            </button>
            <button>
               <CgMoreO />
             <Link to={"/more"}><h5>More</h5></Link>
            </button>
            </div>
            <div className="TweetButton">
            <button>
             <Link to={"/tweet"}> <h4>Tweet</h4></Link>
            </button>
            </div>
        </div>
    )
}