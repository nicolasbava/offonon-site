 'use client'
import {motion} from 'framer-motion'

const TextAnimation = ({text} : {text: string}) => {

    // const defaultAnimations = {
    //         hidden: {
    //             opacity: 0,
    //         },
    //         visible: {
    //             opacity: 1
    //         }
    // }

    return (
        <>
         
        {/* <motion.span aria-hidden
            style={{overflow: 'hidden', display: 'inline-block',  }}
            initial='hidden'
            animate='visible'
            transition={{staggerChildren: 0.001}}
        >
            {text.split("").map( (char, key) => (
                <motion.span key={key} variants={defaultAnimations} style={{ display: 'inline-block' }}  >
                    {char}
                </motion.span>
            ) ) }
        </motion.span> */}
        </>
    )
};

export default TextAnimation