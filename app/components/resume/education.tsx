
export default function Education({ position, dates, place, description, education }: { position: string, dates: string, place: string, description: string[], education: boolean }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 sm:w-3/5 mx-auto mb-4 shadow-sm py-3 px-3">
            <div className="col-span-1 justify-center justify-between">
                <h4 className="text-lg md:text-xl font-semibold mb-1">{position}</h4>
                <h6 className="text-sm text-gray-500">{dates}</h6>
            </div>
            <div className="col-span-1">
                <h4 className="text-lg md:text-xl font-semibold mb-1">{place}</h4>
                <ul className="text-gray-600 list-disc list-inside">
                    {description.map((d, i) =>
                        <li key={i}>{d}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}



