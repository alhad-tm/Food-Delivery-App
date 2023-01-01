import css from "../../styles/Pizza.module.css"
import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import LeftArrow from "../../assets/arrowLeft.png"
import RightArrow from "../../assets/arrowRight.png"
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

export default function Pizza({pizza}) {  
    const src= urlFor(pizza.image).url()
    // console.log(pizza);

    const[selected,setSelected]=useState(1)
    const[count,setCount]=useState(1)

    // add to cart function

    const addPizza=useStore((state)=>state.addPizza)
    const addToCart=()=>{
        addPizza({...pizza,price:pizza.price[selected],quantity:count,size:selected})
        toast.success("Added to cart")
    }
    
   
    return(
        <Layout>
            <div className={css.container}>
                <div className={css.ImageWrapper}>
                    <Image loader={()=>src} src={src} alt="" layout="fill" unoptimized objectFit="cover"/>
                </div>
            

          {/*right side  */}
            <div className={css.right}>
                <span>{pizza.name}</span>
                <span>{pizza.details}</span>

                <span> <span style={{color:"var(--themeRed"}}>$</span> {pizza.price[selected]}</span>
             <div className={css.size}>
                <span>Size</span>
                <div className={css.sizeVariants}>
                    <div  onClick={()=>setSelected(0)} 
                    className={selected==0? css.selected:""}>Small</div>
                    <div onClick={()=>setSelected(1)}  
                    className={selected==1? css.selected:""}>Medium</div>
                    <div onClick={()=>setSelected(2)}
                     className={selected==2? css.selected:""}>Large</div>
                </div>
             </div>

             {/* quantity count */}
             <div className={css.quantity}>
                <span>Quantity</span>
                <div className={css.counter}>
                    <Image  onClick={()=>count===1? null : setCount(count-1)}
                     src={LeftArrow} height={20} width={20} alt="" objectFit="contain"/>
                    <span>{count}</span>
                    <Image onClick={()=>setCount(count+1)} src={RightArrow} height={20} width={20} alt="" objectFit="contain"/>
                </div>
             </div>
             {/* button */}
             <div className={`btn ${css.btn}`} onClick={addToCart}>
                Add to cart
             </div>

             </div>
             <Toaster/>
            </div>

        </Layout>
    )
}


export async function getStaticPaths(){
    const paths= await client.fetch(
      `*[_type=="pizza" && defined(slug.current)][].slug.current`
    )
    return{
        paths:paths.map((slug)=>({params:{slug}})),
        fallback:"blocking",
    }
}
export async function getStaticProps(context){
    const {slug=""}= context.params;
    const pizza= await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );
    return{
        props:{
            pizza,
        },
    };
}