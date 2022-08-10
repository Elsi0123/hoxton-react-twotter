import { useState } from "react";

export function MainMenu() {
   
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Boris Johnson  8h ago ",
      title: "Create a fighting spirit, to feel comfortable with yourself ✌",
      likes: 9885,
      src: "https://i2-prod.mirror.co.uk/incoming/article22563786.ece/ALTERNATES/s615/2_JS217402303.jpg",
      comments:0,
      share:12
    },
    {
      id: 2,
      user: "Nicolas Marcora",
      title: "My first coference about python",
      likes: 194,
      src: "https://i.ytimg.com/vi/ymMeu3foD_0/maxresdefault.jpg",
      comments:44,
      share:12
    },
    {
      id: 3,
      user: "Ed Putans",
      title: "Tower Bridge ✌✌🙌",
      likes: 205,
      src: "https://miro.medium.com/fit/c/231/231/1*Nlc2Xfqw6cHbmAvS0u1lwg.jpeg",
      comments:34,
      share:12
    },



    {
      id: 4,
      user: "CR7",
      title: "Spend time with your family",
      likes: 20577,
      src: "https://talksport.com/wp-content/uploads/sites/5/2022/04/d50a2357-d0dd-40ec-b2d7-0d93f31fac7e.jpg?strip=all&w=879&quality=100",
      comments:8499,
      share:12
    },
    {
      id: 5,
      user: "Elon Musk",
      title: "Tesla",
      likes: 34123,
      src: "https://abcnews.al/wp-content/uploads/2021/03/elon-musk-warning-about-ai-1612808010413_v2_900x506-780x439-1.jpg",
      comments:5774,
      share:12
    },
  ]);

  return (
      
    <div className="mainMenu">

     
{posts.map((post) => {
        return (
          <div className="image-one">
            <h4>{post.user}'s post:</h4>
            <h5>{post.title}</h5>
            <img
              src={post.src}
              width={650}
              
            />
            <button className="heart-button"> ❤{post.likes} </button>
            
  






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
