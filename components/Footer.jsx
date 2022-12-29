import {UilFacebook,UilGithub,UilInstagram} from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/logomain.png"
import css from "../styles/Footer.module.css"


export default function Footer() {
    return(
        <div className={css.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={css.socialicons}>
             <UilFacebook size={40}/>
             <UilGithub size={40}/>
             <UilInstagram size={40}/> 
            </div>

            <div className={css.logo}>
            <Image src={Logo} alt="" width={60} height={60}/>
            Developed by alhad.
            <span>Foodie</span>
            </div>
        </div>
    )
}