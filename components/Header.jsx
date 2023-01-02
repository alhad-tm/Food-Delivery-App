import Image from "next/image"
import Logo from "../assets/logomain.png"
import css from "../styles/Header.module.css"
import {UilShoppingBag,UilReceipt} from "@iconscout/react-unicons" 
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
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
            <span>Foodie</span>
            </div>
            {/* menu section */}
            <ul className={css.menu}>
            <li>
                <Link href="../">Home</Link></li>
            <li>Menu</li>
            <li>Contact</li>
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