import Projects from "../components/ProjectList";

function Home() {
    return (
       <div className="homepage">
        <h3>Take a look at the projects I have completed over my semester taking Programming for Web by clicking on "Projects" above</h3>
        <Projects limit={2} />
       </div>
    )
}


export default Home;