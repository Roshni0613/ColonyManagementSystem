import { imgSrcToBlob } from "blob-util";
import { Carousel } from "react-carousel-minimal"
import dpooja from "./img/dpooja.jpg";


function HomeCarousel() {
 const data = [
    // {
    //   image: "http://CdacProject/gharkul/src/components/img/bnr.jpg",
    //   caption: "San Francisco"
    // },
    {
      // <img src={dpooja}/> ,
      image :"https://adda.io/assets/images/home-page-new/adda.io-masthead%20copy-2.png",
    
      // ./img/image.png
    },
    {
      image: "https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-9/p960x960/136682229_550986739192438_8202218499100737107_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8631f5&_nc_ohc=aVbPWNMXUjcAX9PA9Jf&_nc_ht=scontent.fbom3-1.fna&oh=470d1613f24dbfab2f73d56f4bfefd55&oe=61750382",
     
    },
    {
      image: "https://i.guim.co.uk/img/media/8c9101004187b486588f776c2f38204fab8a732d/254_1513_5686_3407/master/5686.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=28640a5ac5e858eb206ffcce9b982ce4",
    
    },
    {
      image: "https://cdn.cdnparenting.com/articles/2018/06/289559627-H.webp",
     
    },
    {
      image: "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.6435-9/155512878_1767272073433802_4718766048599633316_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=HIyISJ_J7PoAX9muDZl&_nc_ht=scontent.fbom3-2.fna&oh=604ccac4b00cc19de338b2188de7f328&oe=6177DB89",
      
    },
    {
      image: "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.6435-9/230605932_374151327389445_6169823380984738545_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=44856e&_nc_ohc=f37Sa1L-ls8AX-yExCK&_nc_ht=scontent.fbom3-2.fna&oh=1d40cd009fb3f97f82a7fde4f22642a4&oe=6178C545",
     
    },
    {
      image: "https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-9/242806554_4044111029049393_975349327179184233_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=jV5VVJfioOQAX8DInTT&_nc_ht=scontent.fbom3-1.fna&oh=43d88dcd54af865500949c82d2063396&oe=61771DF5",
      
    },
    {
      image: "https://scontent.fbom3-2.fna.fbcdn.net/v/t31.18172-8/16700593_392237964463932_6275900741076132615_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8631f5&_nc_ohc=njwTXRj3XGgAX_AT0XI&tn=0HAHuiA1dS4JnqtU&_nc_ht=scontent.fbom3-2.fna&oh=0c477a8f549d0130a00ebc643de90e7d&oe=61787DD4",
    
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1500px",
              maxHeight: "700px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;