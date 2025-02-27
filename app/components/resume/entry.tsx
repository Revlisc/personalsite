"use client"
export default function Entry({ position, dates, place, description, education }: { position: string, dates: string, place: string, description: string[], education: boolean }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-5/6 md:w-3/5 mx-auto mb-8 rounded-md shadow-md bg-white overflow-hidden text-space`}>
            <div className="col-span-1 md:col-span-3 p-6">
                <div className="mb-4">
                    <h4 className="text-lg md:text-xl font-semibold mb-2">{position}</h4>
                    <h6 className="text-sm text-gray-500">{dates}</h6>
                </div>
                <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">{place}</h4>
                    <ul className="list-disc list-inside text-sm md:text-base text-space">
                        {description.map((d, idx) =>
                            <li key={idx} className="py-1">{d}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}



