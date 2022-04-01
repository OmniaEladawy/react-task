import React, { useState , useEffect} from "react";
import axios from "axios";
import {Table,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Posts(props){

  let [posts,setPosts] = useState([]);

  let {onBody,onTitle} = props;


  let getUsers = async ()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  
  let navigate = useNavigate();
  let postDetails = (e) =>{
    
  onBody(e.target.parentElement.previousElementSibling.innerText);
  onTitle(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
  navigate('/details');
  }

  useEffect(()=>{
   getUsers();
  },[])

  return(
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width:'100px' , textAlign:'center'}}>Id</th>
          <th style={{width:'500px' , textAlign:'center'}}>Title</th>
          <th style={{width:'700px' , textAlign:'center'}}>Body</th>
          <th style={{textAlign:'center'}}>Action</th>
        </tr>
      </thead>
      <tbody>
      {(posts)?posts.map((post,index)=>{
            return(
            <tr key={index}>
              <td style={{textAlign:'center'}}>{post.id}</td>
              <td className="p-3">{post.title}</td>
              <td className="p-3">{post.body}</td>
              <td className="p-3">
                <Button style={{marginRight:'20px'}} className="bg-info fw-bold border-0" onClick={(e)=>{
                  postDetails(e);
                }}>View</Button> 
                <Button className="bg-success fw-bold border-0" >Edit</Button>
              </td>
            </tr>
            )
          }):null
        }
      </tbody>
    </Table>
    </>
  )
}

export default Posts;