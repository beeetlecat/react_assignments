import Projects from "../components/ProjectList";

function Home() {
    return (
       <div>
        <Projects limit={3} />
       </div>
    )
}


export default Home;