export default function ProgressBar({ progress }: { progress: number }) {
  return (
    // <div className="progress-bar bg-neutral_gray w-full h-3 relative rounded">
    //   <div className="absolute bg-primary_blue h-3 rounded-full"
    //     style={{ width: ${progress} }}></div>
    // </div>

    <progress
      className="w-full h-2"
      value={progress}
      max={100}>
    </progress>
  )
}