import React from 'react';



const StatData = (props) => {
    const {stats}=props;
    const color = {
        speed: "bg-yellow-400",
        hp: "bg-red-400",
        "special-defense":"bg-green-400",
        "special-attack":"bg-pink-400",
        attack:"bg-orange-400",
        defense:"bg-blue-400",


    }
    return (
        <div className="flex flex-col justify-between items-center" >
            <h2 className="text-3xl font-bold text-gray-600 m-5">Pokemon Statistic</h2>
            <div className="bg-gray-400 p-10 w-[70%]">
                {stats.map((stat) => (
                    <div key={stat.stat.name} className="mb-4 flex justify-between">
                        <div><h1 className="text-xl font-light text-gray-800">{stat.stat.name.slice(0,1).toUpperCase()+stat.stat.name.slice(1).toLowerCase()}</h1></div>
                        <div><h1 className="text-lg font-semibold">{stat.base_stat}</h1></div>
                        <div className="w-96 bg-gray-500 rounded-lg">
                            <div
                                className={`${color[stat.stat.name]}  h-8 `}
                                style={{ width: `${stat.base_stat}%` }}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatData;