import { motion } from "framer-motion";
import { styles } from "../styles";
import rr2 from '../assets/spiral.svg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div  className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome, I am <span className="text-[#915eff]">Brian</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I develop  web3 softwares, <br className="sm: block hidden"/> user interfaces and web applications</p>
          <img src={rr2} alt="repeat" className="w-15 h-15 object-contain"/>
        </div>
      </div>
     
    </section>
  )
}

export default Hero