import Landing from "@/components/landing/landing";
import Navigation from "./components/navigation/navigation";
import AboutMe from "./components/aboutme/aboutme";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Head from "next/head";

export default function Page() {
    return (
        <main className="">
            <div className="text-space">
                <Navigation/>
                <Landing/>
                <AboutMe/>
                <Resume/>
                <Projects/>
            </div>
            
        </main>
    );
}