import Header from "../../components/Header";
import MainPanel from "../../components/MainPanel";
import "./style.scss";

export default function Experience(){
    return <div className="page-split experience">
        <div className="left">
            <MainPanel 
                preTitle={"Experience"}
                title={() => <>Skills <strong>&amp;</strong> Experience</>}
                description="Work history and projects I've been working on"
            />
        </div>
        <div className="right">
            <Header/>
            <div>
                <h2>Work history and projects</h2>
                <div className="description">
                    <a href="https://jovulovic.com" target={"_blank"} rel="noreferrer">Personal website</a>
                    <ul>
                        <li>Website content</li>
                        <li>Image content creation</li>
                        <li>Basic and social meta tags</li>
                        <li>Google analytics implementation</li>
                        <li>Google search console and sitemaps files</li>
                        <li>Google campaigns adjusting</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Professional Skills</h2>
                <div className="description">
                    <ul>
                        <li>Content writing</li>
                        <li>HTML metadata</li>
                        <li>Google analytics</li>
                        <li>Google search console</li>
                        <li>Google compaigns and advertisments</li>
                    </ul>
                </div>
            </div>
            {/* <div>
                <h2>Courses &amp; Certificates</h2>
                <div className="description">
                    <ul>
                        <li>Cerfiticate name 1</li>
                        <li>Certificate name 2</li>
                    </ul>
                </div>
            </div> */}
             <div>
                <h2>Language skills</h2>
                <div className="description">
                    <ul>
                        <li>Serbian - Native</li>
                        <li>English - Effective Operational Proficiency</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Education</h2>
                <div className="description">
                    <a href="http://new.fil.bg.ac.rs/" target={"_blank"} rel="noreferrer">Faculty of philology</a>
                    <p>Serbian and English languages</p>
                    <p>Belgrade, Serbia</p>
                </div>
            </div>
        </div>
    </div>
}