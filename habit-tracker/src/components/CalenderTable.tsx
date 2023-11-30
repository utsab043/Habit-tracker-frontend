import { AlignLeft, ArrowUp, Grid, X } from "react-feather";
import FilterTab from "./FilterTab";
import IconButton from "./IconButton";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

const tabIconList = [
  {
    id: 0,
    icon: <AlignLeft />,
  },
  {
    id: 1,
    icon: <Grid />,
  }
];

export default function CalenderTable() {
  const [habits] = useState([
    {
      id: 0,
      name: "Read",
      isCompleted: [true, false, true, true, null, true, true],
      color: "#ffd744",
      isNegative: false,
    },
    {
      id: 1,
      name: "Workout",
      isCompleted: [true, true, null, false, false, true, true],
      color: "#da44ff",
      isNegative: false,
    },
    {
      id: 2,
      name: "Meditate",
      isCompleted: [true, true, true, true, true, true, true],
      color: "#44e3ff",
      isNegative: false,
    },
    {
      id: 3,
      name: "Journal",
      isCompleted: [true, true, true, null, null, true, true],
      color: "#ff5d44",
      isNegative: false,
    },
    {
      id: 4,
      name: "Alcohol",
      isCompleted: [true, true, true, false, false, true, true],
      color: "#44b1ff",
      isNegative: true,
    },
    {
      id: 5,
      name: "Weed",
      isCompleted: [false, false, null, null, true, true, false],
      color: "#5aff44",
      isNegative: true,
    },
  ]);

  return (
    <section>
      {/* Top section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <IconButton side="left" />
          <IconButton side="right" />
          <h2>Mon, 2/4 - Sun, 2/10</h2>
        </div>
        <FilterTab tabList={tabIconList} />
      </div>

      {/* Progress section */}
      <ProgressBar progress={27} />

      {/* Small detail section */}
      <div className="flex items-center text_sm justify-between">
        <div className="flex items-center gap-2">
          <ArrowUp className="text-green-400" />
          <p>Up 23% from week before</p>
        </div>
        <p>27% achieved</p>
      </div>

      <hr className="my-4 border-2" />

      {/* Table section */}
      <table className="w-full">
        <thead className="text_sm text-gray-400">
          <tr>
            <th></th>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
            <td>Sun</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {habits.map(habit => (
            <tr key={habit.id} className="h-12">
              <td>
                {
                  habit.isNegative ? (
                    <X
                      className="inline-block mr-2 font-bold"
                      style={{ color: habit.color }}
                    />
                  ) : (
                    <div className="w-3 h-3 rounded-full inline-block mr-2" style={{ backgroundColor: habit.color }}></div>
                  )
                }
                {habit.name}
              </td>
              {habit.isCompleted.map((completed, index) => (
                <td key={index}>
                  {completed === null ? (<></>) : (
                    <>
                      {completed ? (
                        <div className="w-6 h-6 rounded-md"
                          style={{
                            backgroundColor: habit.color,
                          }}
                        ></div>
                      ) : (
                        <div className="w-6 h-6 rounded-md bg-gray-300"></div>
                      )}
                    </>
                  )}
                </td>
              ))}
              <td className="text_sm text-gray-300">
                {habit.isCompleted.filter(co => co).length}/{habit.isCompleted.filter(co => co !== null).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}