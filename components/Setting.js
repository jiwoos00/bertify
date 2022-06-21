import { useState, useRef,useEffect } from 'react'
import {
  Avatar,
  VStack,
  useClipboard
} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../styles/mynft.module.css";
import axios from "axios";
import Router from "next/router";
import swal from 'sweetalert';


export default function Setting({ account}){


  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState(null)

  /*프로필이름변경*/
  const submitData = async (e = React.SyntheticEvent) => {
    e.preventDefault();

    axios.post('http://localhost:3000//api/profileTable',{
            username:username,
            useraddr:account
          }).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err.res)
          })
    swal("변경되었습니다.", " ","success");
    setUsername("");
  }

 

  return (
    <section className="hero-section">
    <div className="container-hero">
    <div className="content-hero">
    <div class="container light-style flex-grow-1 container-p-y">
           
    <div className="Profile-title">
      <h1>프로필 이름 변경</h1>
    </div>

    <br/>
    <br/>

    <form className="upload-main" onSubmit={submitData}>
  

      <div className="name_change">
      <div>
      <label class="form-label">사용자 이름 / User Name<span className="require"> *</span></label>
        <input 
          type="text" 
          class="form-control input-lg"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        ></input>
      </div>
      </div>



      <div className={styles.change_btn}>
        <button type="submit">변경하기</button>
      </div>
    </form>

    </div>
    </div>
    </div>
    
    </section>
  )
}


