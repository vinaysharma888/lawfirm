import Header from "../usercomponents/Header";
import MainSlider from "../usercomponents/MainSlider";
import Footer from "../usercomponents/Footer";
import Result from "../usercomponents/Result";
import Highlight from "../usercomponents/Highlight";
import { useStyles } from "./HomeCss";

export default function Home(){
    var classes=useStyles()
    return(
        <div className={classes.mainContainer} >
        <div>
            <Header />
        </div>

        
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
                <MainSlider />
                
                <div style={{ width: '90%',alignItems:"center" }}>
                    <Highlight />
                </div>
            </div>
           
            <div style={{ marginBottom:100}}>
                    <Result />
                </div>
            <div style={{ width: '100%' }}>
            <Footer />
            </div>
        </div>
    </div>
    )
}