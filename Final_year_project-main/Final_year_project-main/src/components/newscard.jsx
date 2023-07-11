import React, { useEffect, useState } from 'react'



function NewsCard() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://finakyrback.onrender.com/news/newss')
      .then((response) => response.json())
      .then((data) => {
        const randomNews = data.sort(() => 0.5 - Math.random()).slice(0, 3); // Select three random news articles
        setNews(randomNews);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return(
    <div style={{height:"100%"}}>
    <section className='main-newscard--cointainer' >
   {
     news.slice(0, 3).map((curElem,id)=>{
         const {title,urlToImage}=curElem;
         return (
           <Card
           id={id}
           img={urlToImage}
           title={title}
          />
         );
     })
   }
   </section>
   
 </div>
)
}






class Card extends React.Component {
render() {
 return(
     <div className="newscard">
       <img src={this.props.img} alt=""/>
       <div className="newscard-body">
         <h2>{this.props.title}</h2>
       
       </div>
     </div>
 )
}
}
export default NewsCard
