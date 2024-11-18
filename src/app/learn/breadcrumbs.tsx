export default function Breadcrumbs({ chapter, title }: { chapter: string, title: string }) {
  return (
    <div className="mb-5 text-base text-white font-normal">
      <p className="flex gap-2 items-center">
        <span className="text-violet-100 bg-violet-900 bg-opacity-50 px-2 py-1 rounded-full">{chapter}</span>
        <span className="text-2xl">&gt;</span>
        <span className="text-violet-100 bg-violet-900 bg-opacity-50 px-2 py-1 rounded-full">{title}</span>
      </p>
    </div>
  )
}
