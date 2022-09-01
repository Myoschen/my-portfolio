interface SkillItemProps {
  icon: JSX.Element;
  label: string;
}

export default function SkillItem({ icon, label }: SkillItemProps) {
  return (
    <div className="shadow card-bordered card bg-base-100">
      <div className="card-body">
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex-none">{icon}</div>
          <h2 className="flex-1 hidden text-2xl tracking-wide text-center md:block">
            {label}
          </h2>
        </div>
      </div>
    </div>
  );
}
