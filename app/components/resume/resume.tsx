import Timeline from "./timeline";

export default function Resume() {
    return (
        <div className="bg-gray-100 text-space py-12" id='#resume'>
            <h1 className="text-4xl mx-auto text-center mb-8 pt-12 font-semibold font-lato">My Journey So Far</h1>
            <h3 className="text-xl text-center mx-auto">A collection of my education and work experience</h3>
            <Timeline/>
        </div>
    )
}