const years = [
    {
        "experience": 3,
        "skill": ['HTML', "JavaScript", 'CSS', 'React', 'Git', 'C#', '.NET']
    },
    {
        "experience": 2,
        "skill": ['Python', 'ASP.NET', "SQL", 'NumPy', 'Pandas']
    },
    {
        "experience": 1,
        'skill': ['Node.js', 'MongoDB', 'Microsoft Power Platform', 'TypeScript', 'Docker', 'Java', 'NextJS', 'AWS']
    }
]

export default function Years() {
    return (
        <div className="font-semibold text-center w-full mt-8 mb-8 pb-8">
            <div className="w-5/6 sm:w-3/5 lg:w-2/5 mx-auto">
                {years.map((y, index) => (
                    <div className="bg-white shadow-lg rounded-lg p-4 mb-4" key={index}>
                        <h4 className="text-xl text-space mb-2 inline">{y.experience} {y.experience === 1 ? 'Year' : 'Years'}</h4>
                        <div className="flex flex-wrap mt-4">
                            {y.skill.map((skill, skillIndex) => (
                                <span key={skillIndex} className="bg-gray-100 text-space px-3 py-1 rounded-full mr-2 mb-2">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


