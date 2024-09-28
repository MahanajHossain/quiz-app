import React, { useContext } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { QuizContext } from "../Roots/Roots";


const Statistics = () => {
    const loadedData = useContext(QuizContext);
    const data = loadedData.data
    return (
        <div>
            <p className="mt-10 mx-5 md:mx-0 text-xl md:text-3xl lg:text-4xl font-bold">Here You Can See Our Quiz Quantity Statistics</p>
            <div className="mt-20" style={{ width: "100%", height: 600 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#4c1d95" fill="#4c1d95" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Statistics
