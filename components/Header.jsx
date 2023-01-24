import Image from "next/image"
import Logo from "../assets/logomain.png"
import css from "../styles/Header.module.css"
import {UilShoppingBag,UilReceipt} from "@iconscout/react-unicons" 
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
    const[Order,setOrder]=useState("")

    useEffect(()=>{
        setOrder(localStorage.getItem("order"))
    },[])
   
    const items=useStore((state)=>state.cart.pizzas.length)
    return(
        <div className={css.header}>
            {/* logo section */}
            <div className={css.logo}>
            <Image src={Logo} alt="" width={60} height={60}/>
            <span>Pizza Bites</span>
            </div>
            {/* menu section */}
            <ul className={css.menu}>
            <li>
                <Link href="../">Home</Link></li>
            <li><ScrollLink to="menulist" spy={true} smooth={true}>Menu</ScrollLink></li>
            <li><ScrollLink to="contact" spy={true} smooth={true}>Contact</ScrollLink></li>
            </ul>
            {/* right section */}
           <div className={css.rightSide}>
            <Link href="/Cart">
            <div className={css.cart}>
                <UilShoppingBag size={32} color="dargrey"/>
                <div className={css.badge}>{items}</div>
            </div>
            </Link>
            {Order && (
                <Link href={`/order/${Order}`}>
                    <div className={css.cart}>
                        <UilReceipt size={35} color="#2E2E2E"/>
                        {Order!= "" && <div className={css.badge}>1</div>}
                    </div>
                </Link>
            )}
           </div>
        </div>
    )
}