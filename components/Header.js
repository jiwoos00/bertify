import Image from 'next/image';
import Link from 'next/link';
import data from '../data/headerSection.json';

import Head from 'next/head'
import {React, useEffect, useState} from "react";







export default function Header ( {connectKaikas, account, isLogin, setIsLogin, setAccount, connectCol }) {

    const kaikasLoginButton=(e)=>{
        //로그인 버튼 기능
        if(!isLogin){
            connectKaikas();

        }
        if (isLogin){
            setAccount(account)
        }
        setIsLogin(!isLogin);
        console.log(isLogin)
    
    };

    return (
        <section className= "header-section">
             <div className="container-header">
             <div className="content-header">
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src={data.logo} width={165} height={65} />
                    </a>
                </Link>
            </div>


            <div className="btn-try">
            <main>
            <div className="logout">
                
        
                    
                    <Link href="/upload">
                        <button>Upload</button>
                    </Link>
                    
                    <Link href="/mypage">
                        <button>MyPage</button>
                    </Link>
                    {
                    isLogin? (
                        <button className="login" onClick={kaikasLoginButton}>
                            Logout
                        </button>
                    ): (
                        <button onClick={kaikasLoginButton}>
                            Login
                        </button>
                    )}
                    
                </div>
        
            </main>
            </div>
        </div>
        </div>
        </section>
    );
}
