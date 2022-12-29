import css from "../../styles/Pizza.module.css"
import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import LeftArrow from "../../assets/arrowLeft.png"
import RightArrow from "../../assets/arrowRight.png"

export default function Pizza({pizza}) { 
    const src= urlFor(pizza.image).url()
    // console.log(pizza);
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

                <span> <span style={{color:"var(--themeRed"}}>$</span> {pizza.price[1]}</span>
             <div className={css.size}>
                <span>Size</span>
                <div className={css.sizeVariants}>
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                </div>
             </div>

             {/* quantity count */}
             <div className={css.quantity}>
                <span>Quantity</span>
                <div className={css.counter}>
                    <Image src={LeftArrow} height={20} width={20} alt="" objectFit="contain"/>
                    <span>1</span>
                    <Image src={RightArrow} height={20} width={20} alt="" objectFit="contain"/>
                </div>
             </div>
             {/* button */}
             <div className={`btn ${css.btn}`}>
                Add to cart
             </div>

             </div>
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