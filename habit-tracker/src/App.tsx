import AddButton from "./components/AddButton"
import CalenderTable from "./components/CalenderTable"
import { useState } from "react"
import HabitCard from "./components/HabitCard"
import FilterTab from "./components/FilterTab"
import IconButton from "./components/IconButton"
import ProgressBar from "./components/ProgressBar"

const tabList = [
  {
    id: 0,
    name: "Week",
  },
  {
    id: 1,
    name: "Month",
  },
  {
    id: 2,
    name: "Year",
  },
  {
    id: 3,
    name: "All Time",
  },
];

function App() {
  const [habit1, setHabit1] = useState(
    {
      name: "Read",
      isCompleted: false,
      color: "#ffd744"
    },
  )
  const [habit2, setHabit2] = useState(
    {
      name: "Workout",
      isCompleted: false,
      color: "#cd44ff"
    },
  )
  const [habit3, setHabit3] = useState(
    {
      name: "Meditate",
      isCompleted: false,
      color: "#44e3ff"
    },
  )
  const [habit4, setHabit4] = useState(
    {
      name: "Journal",
      isCompleted: false,
      color: "#ff5d44"
    },
  )
  const [habit5, setHabit5] = useState(
    {
      name: "Alcohol",
      isCompleted: false,
      color: "#44b1ff"
    },
  )
  const [habit6, setHabit6] = useState(
    {
      name: "Weed",
      isCompleted: false,
      color: "#5aff44"
    },
  )

  return (
    <main className="flex">

      <div className="font-primary_font w-2/3 mx-8">

        <section className="my-4">
          <h1>Hey There, Utsab</h1>
          <p className="text-gray-400">5 hrs 42 mins till bedtime</p>
        </section>

        <section className="flex justify-between my-3">
          <FilterTab tabList={tabList} />
          <AddButton />
        </section>

        <CalenderTable />

      </div>

      <div className="w-1/3 p-6">

        <section className="flex justify-between">
          <h3>Mon, Feb 18</h3>
          <span className="flex items-center gap-2">
            <IconButton side="left" />
            <IconButton side="right" />
          </span>
        </section>

        <ProgressBar progress={33} />
        <p className="flex justify-end">33% of daily goal achieved</p>

        <div className="border-2 p-4 rounded-xl my-5">
          <HabitCard habit={habit1} setHabit={setHabit1} />
          <HabitCard habit={habit2} setHabit={setHabit2} />
          <HabitCard habit={habit3} setHabit={setHabit3} />
          <HabitCard habit={habit4} setHabit={setHabit4} />
          <HabitCard habit={habit5} setHabit={setHabit5} />
          <HabitCard habit={habit6} setHabit={setHabit6} />
        </div>

      </div>

    </main>
  )
}
export default App