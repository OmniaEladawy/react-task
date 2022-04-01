import React from "react";
import Cards from "./Cards";

function Home(){
  let children = [
    {
      id:1,
      title: 'Leanne Graham',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU'
    },
    {
      id:2,
      title: 'Ervin Howell',
      img: 'https://previews.123rf.com/images/topvectors/topvectors1910/topvectors191000180/130828177-emotion-of-laughter-on-the-face-of-a-brunette-woman-vector-illustration-.jpg?fj=1'
    },
    {
      id:3,
      title: 'Kurtis Weissnat',
      img: 'https://previews.123rf.com/images/yupiramos/yupiramos2004/yupiramos200436847/145498923-.jpg?fj=1'
    },
    {
      id:4,
      title: 'Nicholas Runolfsdottir V',
      img: 'https://pickaface.net/gallery/avatar/jquan0755a199bfcb71d.png'
    },
    {
      id:5,
      title: 'Glenna Reichert',
      img: 'https://i.pinimg.com/564x/77/70/5c/77705c2de53d8306ebed9ffda8f9986a.jpg'
    },
    {
      id:6,
      title: 'Clementina DuBuque',
      img: 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_792/v1/media/gmg/X462YQ4HIJEGHHX2I3LXRV4G7A.jpg?_a=ATABlAA0'
    },
  ]
  return(
    <div className='mt-5 p-5 d-flex flex-wrap'>
    {
      children.map((child,index) => {
        return (
          <Cards key={child.id} title={child.title} img={child.img}/>
        )
      })
    }
    </div>
  )
}

export default Home;