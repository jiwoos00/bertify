import data from '../data/footerSection.json';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className="header-footer">

            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src={data.logo} width={165} height={65} />
                    </a>
                </Link>
            </div>
                <h5>{data.owner}</h5>
                <h5>{data.address}</h5>
                <h5>{data.number}</h5>
                <a><h5>{data.service}</h5></a>

            </div>

            <form>
                <div className="form-group">
                    {/*<input type="email" placeholder="Name@company.com" />*/}
                    <button>의견남기기</button>
                    {/* 의견 남길 수 있는 문서? docs? 연결
                    밑에 개인정보 방침 ~ 카피라이터 등 추가하기 */}
                </div>
            </form>
      
        </footer>

        
    )
};

export default Footer;