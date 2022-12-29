import css from "../styles/Services.module.css"
import Image from "next/image"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"

export default function Services() {
    return(
        <>
        <div className={css.heading}>
            <span>WHAT WE SERVE</span>
            <span>Your Favourite Food</span>
            <span>Delivery Partner</span>
        </div>
        {/* services */}
        <div className={css.services}>
            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit="cover" layout="intrinsic"/>
                </div>
                <span>Easy To Order</span>
                <span>U Only Need A few steps in ordering </span>
            </div>


            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit="cover" layout="intrinsic"/>
                </div>
                <span>Fast Delivery</span>
                <span>Delivery tahat is on time even faster </span>
            </div>


            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit="cover" layout="intrinsic"/>
                </div>
                <span>Order from anywhere</span>
                <span>Not only fast,also number one i quality </span>
            </div>

           
        </div>
        </>
    )
}