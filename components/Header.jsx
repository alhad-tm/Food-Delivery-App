import Image from "next/image"
import Logo from "../assets/logomain.png"
import css from "../styles/Header.module.css"
import {UilShoppingBag} from "@iconscout/react-unicons" 
import { useStore } from "../store/store";
import Link from "next/link";
export default function Header() {
    // console statein terminal
    const state=useStore((state)=>state)
    console.log(state);

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
            <li>Home</li>
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
           </div>
        </div>
    )
}