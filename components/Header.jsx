import Image from "next/image"
import Logo from "../assets/logomain.png"
import css from "../styles/Header.module.css"
import {UilShoppingBag} from "@iconscout/react-unicons" 
export default function Header() {
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
            <div className={css.cart}>
                <UilShoppingBag size={32} color="dargrey"/>
                <div className={css.badge}>1</div>
            </div>
           </div>
        </div>
    )
}