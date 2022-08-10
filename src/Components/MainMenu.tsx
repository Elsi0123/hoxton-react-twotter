import { useState } from "react";

export function MainMenu() {
   const [hearts, setHearts] = useState(0)
   const [comments, setComments] = useState(0)
   const [users, setUsers] = useState(0)
  const [posts, setPosts] = useState([
    {
      id: 1,
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      user: "Boris Johnson",
      title: "Create a fighting spirit, to feel comfortable with yourself ✌",
      src: "https://i2-prod.mirror.co.uk/incoming/article22563786.ece/ALTERNATES/s615/2_JS217402303.jpg",
      
    },
    {
      id: 2,
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      user: "Nicolas Marcora",
      title: "My first conference about python",
      src: "https://i.ytimg.com/vi/ymMeu3foD_0/maxresdefault.jpg",
      
    },
    {
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      id: 3,
      user: "Ed Putans",
      title: "Tower Bridge ✌✌🙌",
      src: "https://miro.medium.com/fit/c/231/231/1*Nlc2Xfqw6cHbmAvS0u1lwg.jpeg",
      
    },
    {
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      id: 4,
      user: "Cristiano CR7",
      title: "Spend time with your family",
      src: "https://talksport.com/wp-content/uploads/sites/5/2022/04/d50a2357-d0dd-40ec-b2d7-0d93f31fac7e.jpg?strip=all&w=879&quality=100",
      
    },
    {
      onesrc:"https://images.hindustantimes.com/img/2022/01/02/550x309/michelle_obama_barack_obama_1641094869493_1641094876814.jpg " ,
      id: 5,
      user: "Barack Obama",
      title: "Happy New Year everyone",
      src: "https://images.hindustantimes.com/img/2022/01/02/550x309/michelle_obama_barack_obama_1641094869493_1641094876814.jpg",
      
    },
    {
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      id: 6,
      user: "Bradd Pit",
      title: "It's time to take a coffe!!",
      src: "https://people.com/thmb/FcF2FtnptqRJoNAzjSvCf_XqwV0=/1500x1000/filters:fill(auto,1)/brad-pitt-delonghi1-cac20ffbb9684d4fba5c726f12ec5eb4.jpg",
      
    },
    {
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      id: 7,
      user: "Jeff Bezos",
      title: "Spend time with your family",
      src: "https://images.hola.com/us/images/0274-14f2432b14c1-9532e54c42ae-1000/horizontal-1200/jeff-bezos-and-lauren-s-nchez.png",
      
    },
    {
      onesrc:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png " ,
      id: 8,
      user: "Elon Musk",
      title: " Tesla",
      src: "https://abcnews.al/wp-content/uploads/2021/03/elon-musk-warning-about-ai-1612808010413_v2_900x506-780x439-1.jpg",
    
    },
  ]);

  return (
      
    <div className="mainMenu">

     
{posts.map((post) => {
        return (
          <div className="image-one">
           <div className="userphoto"><img src= {post.onesrc} width='30' 
             /> 
            <h4>
              {post.user}'s post:</h4> 
            </div>
            <h5>{post.title}:</h5>
            <img
              src={post.src}
              width={500}
              
            />
            <div className="likeComments">
            <button className="heartButton" onClick={() => {
              setHearts(hearts + 1)
            }}> ❤ {hearts}</button>

            <button className="comments" onClick={() => {
              setComments(comments + 1)
            }}>💬{comments}</button>

            <button className="sharePost" onClick={() => {
              setUsers(users + 1)
            }}> 📨{users} </button>
            
            </div>






{/* 
        <div className="firstPost">
        <div className="username">
          <img src="" alt="" />
          <h2>Elsi Ahmesula</h2>
        </div>
        <img
          src="https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={700}
          alt=""
        />
        <div className="underSection">
          <button> </button>
          <button>{}qfd</button>
          <button>{}qwf</button>
          <button>{}qwdf</button>
        </div>
      </div>
      <div className="secondtPost">
        <div className="username">
          <img src="" alt="" />
          <h2>Elsi Ahmesula</h2>
        </div>
        <img
          src="https://i.ytimg.com/vi/ymMeu3foD_0/maxresdefault.jpg"
          width={700}
          alt=""
        />
        <div className="underSection"></div>
      </div>   */}
   </div>
    
)
})}
  
  </div>
  )
    
}
