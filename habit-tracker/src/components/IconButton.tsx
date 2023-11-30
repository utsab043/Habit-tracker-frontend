import { ChevronLeft, ChevronRight } from 'react-feather'
export default function IconButton({ side }: { side: "left" | "right" }) {
  return (
    <>
      <div className='flex gap-4'>
        <button className='p-3 border-2  rounded-full'>
          {side === "left" ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
    </>
  )
}