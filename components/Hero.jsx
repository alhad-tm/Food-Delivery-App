import Image from "next/image"
import css from "../styles/Hero.module.css"
import Cherry from "../assets/s2.png"
import HeroImage from "../assets/chefmain.png"
import {UilPhone} from "@iconscout/react-unicons"
import  Pizza1 from "../assets/p1.jpg"
export default function Hero() {
    return(
        <div className={css.container}>
            {/* left section */}
            <div className={css.left}>
            <div className={css.cherrydiv}>
                <span>Don't Starve, Just Order...&nbsp;</span>
                <Image src={Cherry} alt="" width={70} height={65}/>
            </div>
            
            <div className={css.heroText}>
                <span>Be the fastest</span>
                <span>In Delivering</span>
                <span>Your <span style={{color:"var(--themeRed"}}>Pizza</span> </span>
            </div>
            <span className={css.smalltext}> Hungry? You're in the right place. Enjoy the best pizza in the town.
            </span>
            <button className={`btn ${css.btn}`}>Get Started</button>
            </div>
            {/* right section */} 
            <div className={css.right}> 
                 <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                 </div>
                 <div className={css.contact}>
                    <span>Contact us</span>
                    <div>
                        <UilPhone color="white" />
                    </div>
                 </div>
                 <div className={css.Pizza}>
                    <div>
                        <Image src ={Pizza1} objectFit="cover" layout="intrinsic" alt=""/>
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span> <span style={{color:"var(--themeRed)"}}>$</span> 7.43</span>
                    </div>
                 </div>
            </div>
        </div>
    )
}