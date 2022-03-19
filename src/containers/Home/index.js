import Header from "../../components/Header";
import MainPanel from "../../components/MainPanel";
import "./style.scss";

export default function Home(){
    return <div className="page-split home">
        <div className="left">
           <MainPanel 
                preTitle={"Hello"}
                title={() => <>I'm <strong>Jovana</strong> Vulović</>}
                description="Digital marketing specialist"
           />
        </div>
        <div className="right">
            <Header/>
            <div></div>
        </div>
    </div>
}