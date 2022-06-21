import {useRouter} from "next/router";
import {useEffect} from "react";

export default function NotLogin({ isLogin, setIsLogin, connectKaikas}){
    const router=useRouter();
    
    const KaikasLogin=()=>{
        setIsLogin(!isLogin);
        connectKaikas();
    };

    useEffect(()=>{
        if(isLogin){
            moveToHome();
        }
    }, [isLogin]);

    const moveToHome=()=>{
        router.push("/");
    };

    return (
        <>
        <section className="not-section">
            <div className="container-not">
                <div className="btn-try">
                    <div className="logout">
                        <h5>Please connect account address first</h5>
                        <button type="submit" onClick={KaikasLogin}>Kaikas Login</button>
                        <button type="submit">Klip Login</button>
                    </div>
                
                </div>
            </div>       
        </section>  
        </>    
    );
}

