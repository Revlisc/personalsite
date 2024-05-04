import Entry from "./entry"
import Education from './education'

const workExperience = [
    {
        'place': 'GenesisCare',
        'dates': 'November 2022 - February 2024',
        'position': 'Software Engineer',
        'description': [
            "Built scalable and user-friendly full stack software solutions adopted by hundreds of medical professionals in over 300 clinics across the nation by leveraging C#, .NET, React, Bootstrap, and SQL.",
            "Designed and developed an enhanced patient treatment planning application with Agile team by migrating functionality to modernized .NET version reducing user training and treatment plan creation time by 30%.",
            "Built patient management dashboard with React, C# and Bootstrap to serve as a centralized platform for all providers, achieving higher satisfaction compared to existing systems among 100% of users.",
            "Refactored legacy insurance application to comply with 2024 Medicare standards by collaborating with end users and leveraging C# resulting in achieving compliance in over 300 clinics within one week.",
            "Collaborated with an Agile team to update and modernize existing treatment applications in .NET to improve workflows and user experience for centers nationwide leading to 40% fewer service tickets.",
            "Optimized SQL scripts for patient systems for data extraction, reporting, and storage reducing processing time by 40%.",
            "Improved codebase security and efficiency through migration of ETL pipelines to Microsoft Azure and refactoring data processing code for maintainability and software engineering principles."
        ],
    },
    {
        'place': 'REV Tech',
        'dates': 'January 2022 - September 2022',
        'position': 'Software Engineer',
        'description': [
            "Demonstrated ability to successfully develop software solutions for diverse clientele, simultaneously balancing up to four concurrent projects in multiple frameworks and languages within Agile development cycles. ",
            "Solved internal onboarding and inventory management system issues in first month by designing and implementing an application reducing onboarding time by 50% and used for 100% of new hires since release.",
            "Adapted an energy metric tracking fullstack web application to implement more than ten new features and fix downed systems using C# and ASP.NET/MVC while tracking tickets with Jira.",
            "Coordinated needs of two stakeholder groups to design and build the front-end of inventory management system utilizing React and integrating a REST API built in .NET and C#."
        ],
    },
    {
        'place': 'University of Washington - Stromberg Lab',
        'dates': 'June 2019 - August 2020',
        'position': 'Research Assistant',
        'description': [
            "Demonstrated ability in collaborative environment in a multidisciplinary team of over twenty individuals",
            "Driven to be self-starter and results-oriented by working independently weeks ahead of schedule",
            "Showcased knowledge of experimental design by independently producing over twenty products per quarter as metrics of meeting objectives",
            "Proven ability to conduct data entry by keeping up to date, detailed reports of sixteen samples concurrently"
        ],
    },
]
const educationExperience = [
    {
        'place': 'Arizona State University',
        'dates': '2023 - 2024',
        'position': 'Master of Computer Science',
        'description': [
            "GPA: 3.9/4.0"
        ],
    },
    {
        'place': 'Univeristy of Washington',
        'dates': '2017 - 2020',
        'position': 'Bachelor of Science, Biology',
        'description': [
            "Dean's List: 3 quarters",
            "Member of Beta Beta Beta Honor Society",
            "Completed Undergraduate Research"
        ],
    },
]

export default function Timeline() {
    return (
        <div className="pb-5 mb-12">
            <h4 className="text-3xl font-semibold mb-6 mt-5 pb-6 pt-6 mt-6 text-center mx-auto">Experience</h4>
            {workExperience.map((w, i) => 
                <Entry key={i} position={w.position} place={w.place} dates={w.dates} description={w.description} education={false}/>
            )} 
            <h4 className="text-3xl font-semibold mb-6 mt-5 pb-6 pt-6 mt-6 text-center mx-auto">Education</h4>
            {educationExperience.map((w, i) => 
                <Education key={i} position={w.position} place={w.place} dates={w.dates} description={w.description} education={true}/>
            )} 
        </div>
        
    )
}