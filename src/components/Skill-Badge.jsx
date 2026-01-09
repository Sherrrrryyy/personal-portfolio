export default function SkillBadge({ name, level }) {
  return (
    <div className="rounded-lg border border-white dark:border-white bg-white dark:bg-black shadow-sm">
      <div className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{name}</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">{level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
            <div className="bg-white  h-2 rounded-full" style={{ width: `${level}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
