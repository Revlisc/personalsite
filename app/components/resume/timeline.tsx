import Entry from "./entry"
import Education from './education'

const workExperience = [
    {
        'place': 'Selfless Solutions',
        'dates': 'May 2024 - Present',
        'position': 'Software Engineer (Volunteer)',
        'description': [
            "Conducted thorough data cleaning and analysis on three years of student data to demonstrate key trends in our English literacy application utilizing Python.",
            "Managed and optimized data storage in AWS S3 and developed QuickSight dashboards to provide clear, actionable insights through the creation of visualizations."
        ]
    },
    {
        'place': 'GenesisCare',
        'dates': 'November 2022 - February 2024',
        'position': 'Software Engineer',
        'description': [
            "Spearheaded the redesign of a treatment planning system for radiotherapy clinics with .NET, directly collaborating with users to resolve existing pain points resulting in improved user experience and maintainability",
            "Engineered a centralized full-stack patient management platform with React, C#, and Bootstrap; guided two junior developers, achieving 100% user approval among key stakeholders and improving system efficiency by 40%.",
            "Established automated test suite with xUnit adopted among all CI/CD pipelines using Octopus Deploy and TeamCity increasing project delivery speed by 25% and reducing testing time by 50%",
            "Refactored a complex insurance application to comply with 2024 Medicare and HIPAA standards by collaborating with end users and leveraging C# and SQL, resulting in compliance in over 300 clinics within two weeks.",
            "Collaborated with an Agile team of five to update and modernize existing large complex radiotherapy support systems in .NET to improve workflows for centers nationwide leading to 40% fewer service tickets.",
            "Optimized SQL scripts in Microsoft SQL Server for large complex billing and treatment automation systems for data extraction, reporting, and storage reducing processing time by 30%.",
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
            "Coordinated needs of two stakeholder groups to design and build the front-end of medical organization system in team of two utilizing React and integrating a REST API built in .NET and C#."
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
        'place': 'University of Washington',
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
        <div className="pb-12 font-roboto text-space">
            <h4 className="text-3xl font-semibold mb-6 mt-5 pb-6 pt-6 mt-6 text-center mx-auto font-lato">Experience</h4>
            {workExperience.map((w, i) => 
                <Entry key={i} position={w.position} place={w.place} dates={w.dates} description={w.description} education={false}/>
            )} 
            <h4 className="text-3xl font-semibold mb-6 mt-5 pb-6 pt-6 mt-6 text-center mx-auto font-lato">Education</h4>
            {educationExperience.map((w, i) => 
                <Education key={i} position={w.position} place={w.place} dates={w.dates} description={w.description} education={true}/>
            )} 
        </div>
        
    )
}