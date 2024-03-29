import "./index.css";
import PageCard from "./components/PageCard";

const Home = () => {
    
    return (
        <div className="Home flex center">
            <PageCard title="Weather" description="Check the weather" link="/weather" />
            <PageCard title="Notes" description="Take some notes" link="/notes" />
            <PageCard title="Calculator" description="Use the calculator" link="/calculator" />
        </div>
    );
}

export default Home;