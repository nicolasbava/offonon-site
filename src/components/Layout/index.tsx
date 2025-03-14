import React from "react"
import {useAppContext} from "@/context/app";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";


type LayoutProps = {
    children: any
}
const Layout: React.FC<LayoutProps> = ({children})=>{

    const {px} =  useAppContext()

    return (
        <>
            {/* <Header sx={{px}}/> */}
                {children}
            {/* <Footer sx={{px}} /> */}
        </>
    )

}
export default Layout