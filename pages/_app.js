
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotLogin from '../components/NotLogin';

import '../styles/globals.css'
import '../styles/style.css'
import '../styles/responsive.css'

import { useState, useEffect } from "react";
import Caver from 'caver-js';
import {useRouter} from 'next/router';
import axios from "axios";




function App({ Component, pageProps }) {
  const [account, setAccount]=useState("");
  const [isLogin, setIsLogin]=useState(false);
  const [newKip17addr, setNewKip17Addr]=useState("0x383bc12536080550Cc173e3ff82998c6F7B4D1C7");
  const [caver, setCaver]=useState();
  const [user, setUser]=useState(true);
  const router=useRouter();
  const [myToken, setMyToken]=useState(0);
  

  let accounts; //사용자주소

  useEffect(()=>{
    if (typeof klaytn!=="undefined"){
      try
      {
        const caver=new Caver(klaytn);
        setCaver(caver);
        
       
      }
      catch(err){
        console.log(err);
      }
    }
    
  },[]);

  //로그인을 안 한 상태로 들어가면 메인화면으로 쫓아냄
  useEffect(()=>{
    if (!isLogin){
      if (document.location.href!=="http://localhost:3000/"){
        document.location.href="/";
      }
    }
  },[isLogin]);

  
  

  

  //isLogin을 1로 만들어줌
  const connectKaikas = async () =>{
    accounts=await klaytn.enable();
    setAccount(accounts[0]);

    console.log("제대로 들어오니?")
    //사용자의 주소를 데이터베이스에 저장하고, 존재한다면 저장하지 않음
    axios.post('http://localhost:3000/api/userGet',{
      addr: accounts[0]
    }).then(res=>{
      console.log(res.data.user)
      if(res.data.user==null){
        setUser(false)
        //console.log(res.data.user.addr)
        console.log(user)
      }
      console.log(user)
    })


    if (user==false){
      axios.post('http://localhost:3000/api/userTable',{
        addr: accounts[0]
      }).then(res=>{
        console.log(res);
        setUser(true)
      })
    }
    
  };



  return (
    <>
        <Header
          connectKaikas={connectKaikas}
          account={account}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setAccount={setAccount}
       
          
        />
        {(!isLogin && router.route ==="/")? (
          <Component 
              
            caver={caver}
            account={account}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            connectKaikas={connectKaikas}
            newKip17addr={newKip17addr}
      
          />
            
          ) : isLogin? (
          <Component 
              
            
            caver={caver}
            account={account}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            connectKaikas={connectKaikas}
            newKip17addr={newKip17addr}
    

          />
          ) :(
          
            <NotLogin isLogin={isLogin} setIsLogin={setIsLogin} connectKaikas={connectKaikas}/> 
          //(오류페이지 설정, 로그인하라고 하는 페이지>
       
        )}
        <Footer />
  
    </>
  );
  
}

export default App;
