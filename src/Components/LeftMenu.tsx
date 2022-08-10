export function LeftMenu() {
    return (
        <div className="leftMenu">
            <button className="TweetLogo">
                <img src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0" width={40} alt="" />
            </button>
            <div className="menuLogo">
            <button>
                {/* i */}
             <a href=""> <h5> Home</h5></a>
            </button>
            <button> 
                {/* i */}
               <a href=""> <h5>Explore</h5> </a>
            </button>
            <button>
                {/* i */}
               <a href=""> <h5>Notification</h5> </a>
            </button>
            <button>
               {/* i */}
              <a href="">  <h5>Messages</h5></a>
            </button>
            <button>
                {/* i */}
               <a href=""> <h5>Bookmarks</h5></a>
            </button>
            <button>
                {/* i */}
              <a href="">  <h5>Lists</h5></a>
            </button>
            <button>
                {/* i */}
              <a href="">  <h5>Profile</h5></a>
            </button>
            <button>
                {/* i */}
              <a href=""> <h5>More</h5></a>
            </button>
            </div>
            <div className="TweetButton">
            <button>
             <a href="">  <h4>Tweet</h4></a>
            </button>
            </div>
        </div>
    )
}