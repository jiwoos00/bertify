import * as React from 'react';
import { useState, useEffect } from "react";
import {nfts} from '../components/MyNFTs';
import styles from "../styles/mynft.module.css";

import KIP from '../components/KIP';
import COL from '../components/COL'

import Image from 'next/image';
import { Button, Dimmer, Divider, Icon, Label, Loader, Segment } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import axios from "axios";



export default function mypage({ caver, account, newKip17addr }) {
  const [isLoading, setIsLoading]=useState(true);
  const [value, setValue] = React.useState('1');
  const [nftlist, setNftlist]=useState([]);
  const [category, setCategory]=useState([]);
  const [username, setUsername] = useState([]);
  const [auth, setAuth]=useState(false);

 //탭 기능
  const handleChange = (event= React.SyntheticEvent, newValue= string) => {
    setValue(newValue);
  };


  useEffect(async()=>{

    axios.get('http://localhost:3000//api/nameTable',{
      params:{addr:account}
    }).then(res=>{
      console.log(res);

      setUsername(res.data.ok2) //이름세팅
      setAuth(res.data.ok3) //권한세팅
    }).catch(err=>{
      console.log(err.res)
    });

    saveMyToken();
  },[]);

 
  //모든 nft 가져오기
  const saveMyToken=async()=>{
    
    //컨트랙트
    const tokenContract="";
    tokenContract=await new caver.klay.Contract(nfts.abi, newKip17addr);

    //모든 nft개수
    const totalSupply= await tokenContract.methods.totalSupply().call()
    console.log(totalSupply)

    const result=[]; //카테고리 잠깐 담을 변수
    let arr=[]; //카테고리 중복과정 변수

    //두번반복안하고 한번에 가져오는 방법 연구하기
    for (let tokenId=1; tokenId<=totalSupply; tokenId++){
  
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call(); //토큰주인
      let photo = await tokenContract.methods.getPhoto(tokenId).call(); //파일
      
      //자신의 토큰개수 ( 원소유자와 받은 사람만 갖고 있기 )
      if (String(tokenOwner).toLowerCase() === account || String((photo[1])[0]).toLowerCase()===account) {
        console.log(photo[1])
        setNftlist((prevState) => {
          return [...prevState, { tokenId, photo }];
        })

        //카테고리 중복 제거
        arr.push(photo[5]);
        const set= new Set(arr);
        result = [...set];
        console.log(result)
      }
    }

    for (let j=0; j<result.length; j++){
      setCategory((prevState) => {
        const res=result[j]
        console.log(res)
        return [...prevState, { res }];
      })
    }


    setIsLoading(false);
  };



/* *********************************************************** */
  
  return (
    <div>
      <div style={{ paddingTop: "110px" }}>
        <div className={styles.profileContainer}>
          <div className={styles.topContainer}></div>
          <div className={styles.middleContainer}>
            <div className={styles.profile}></div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.useContainer}>

              {auth && (
              <p className={styles.nameFont}>{username} <Image src="/verified.png" width="20px" height="20px"/></p>
              )}

              {!auth && (
              <p className={styles.nameFont}>{username} </p>
              )}


              <div className={styles.button} >
             
                <CopyToClipboard text={account} title="COPY">
                  <button className={styles.accountbutton}>{account}</button>
                </CopyToClipboard>

                <Link href="/settings">
                  <button className={styles.settingbutton} ><img src='/setting.png' width="40px"></img></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
   
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          
            <Tab label="My Collection" value="1" />
            <Tab label="Collected" value="2" />

          </TabList>
        </Box>


        <TabPanel value="1">
        <div className={styles.contentContainer}>
        <div className={styles.tokenContainer}>

          {isLoading && (
            <Segment basic>
              <div style={{ height: "140px" }}>
                <Image src="/loading.gif" width="180px" height="180px"/>
              </div>
            </Segment>
          )}

          {!isLoading && (
            <COL caver={caver}  account={account} category={category} nftlist={nftlist} mine={true} />
          )}

        </div>
      </div>

        </TabPanel>



        <TabPanel value="2">
      
        <div className={styles.contentContainer}>
        <div className={styles.tokenContainer}>
          {isLoading && (
            <Segment basic>
              <div style={{ height: "140px" }}>
                <Image src="/loading.gif" width="180px" height="180px"/>
              </div>
            </Segment>
          )}
          {!isLoading && (
            <KIP caver={caver}  account={account} nftlist={nftlist} newKip17addr={newKip17addr} mine={true} />
          )}
        </div>
      </div>
    
    </TabPanel>

        
      </TabContext>
    </Box>
</div>
  );
}
