interface OverviewCardProps {
  label: string;
  value: number | string;
  unit?: string;
}

const OverviewCard = ({ label, value, unit }: OverviewCardProps) => (
  <div className='group flex flex-col self-center rounded-xl bg-card px-4 py-3 shadow-border transition-all duration-200'>
    <span className='text-card-foreground'>
      {label}
      {unit && <span> ({unit})</span>}
    </span>
    <div className='flex items-end font-cal'>
      <div>{value}</div>
    </div>
  </div>
);

export default OverviewCard;
