
export default function Education({ position, dates, place, description, education }: { position: string, dates: string, place: string, description: string[], education: boolean }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 w-5/6 md:w-2/5 mx-auto mb-8 rounded-md shadow-md bg-white overflow-hidden text-space`}>
            <div className="md:p-6 md:mb-4 p-4 mb-2">
                <h4 className="text-lg md:text-xl font-semibold mb-2">{position}</h4>
                <h6 className="text-sm">{dates}</h6>
            </div>
            <div className="md:p-6 md:mb-4 p-4 mb-2">
                <h4 className="text-lg md:text-xl font-semibold mb-2">{place}</h4>
                <ul className="list-disc list-inside text-sm md:text-base text-space">
                    {description.map((d, idx) =>
                        <li key={idx} className="py-1">{d}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}