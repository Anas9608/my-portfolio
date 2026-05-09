type Props = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4 text-xl font-semibold text-slate-900 md:text-2xl dark:text-slate-100">
      <span className="font-mono text-sm text-teal-700 dark:text-accent">
        {number}.
      </span>
      <h2>{title}</h2>
      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-800" />
    </div>
  );
}
