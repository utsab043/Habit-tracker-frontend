import { Plus } from "react-feather";

export default function AddButton() {
  return (
    <button className="text-primary_blue font-semibold border-2 border-neutral_gray px-4 py-3 rounded-full flex">
      <Plus />
      Add Habit
    </button>
  )
}