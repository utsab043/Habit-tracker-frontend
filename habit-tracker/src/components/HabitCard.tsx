import { Menu, Check } from "react-feather";

type HabitCardProps = {
  habit: {
    name: string;
    isCompleted: boolean;
    color: string;
  },
  setHabit: React.Dispatch<React.SetStateAction<{
    name: string;
    isCompleted: boolean;
    color: string;
  }>>
}

export default function HabitCard({ habit, setHabit }: HabitCardProps) {
  const { isCompleted, name, color } = habit;

  return (
    <div className={`${isCompleted ? "rounded-md text-white" : "border-l-4"} p-2 my-4 mx-5`}
      style={{
        backgroundColor: isCompleted ? color : "transparent",
        borderColor: isCompleted ? "transparent" : color,
      }}
    >
      < div className="flex justify-between items-center">
        < h3 > {name}</h3 >
        <Menu />
      </div >
      {
        isCompleted ? (
          <div className="flex justify-between items-center" >
            <span className="flex items-center gap-1">
              <Check />
              Completed
            </span>
            <button onClick={() => setHabit(prev => ({ ...prev, isCompleted: false }))} className="text-sm">Undo</button>
          </div>
        ) : (
          <button onClick={() => setHabit(prev => ({ ...prev, isCompleted: true }))} className="w-full font-semibold text-primary_blue border-2 border-neutral-200 rounded-sm py-2">
            Mark Complete
          </button>
        )
      }
    </div >
  )
}