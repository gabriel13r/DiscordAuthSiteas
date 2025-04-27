interface StatCardProps {
  title: string;
  value: string;
  statusColor?: string;
}

export default function StatCard({ title, value, statusColor }: StatCardProps) {
  return (
    <div className="bg-[hsl(var(--discord-background-tertiary))] rounded-lg p-5 shadow-inner hover:shadow-md transition-shadow border border-[#2c2f3380] hover:border-[#3a3d4280]">
      <h3 className="text-[hsl(var(--discord-text-muted))] text-sm mb-2 font-medium">{title}</h3>
      <div className="flex items-center">
        {statusColor && (
          <span className={`inline-block w-3 h-3 rounded-full ${statusColor} mr-2 animate-pulse`}></span>
        )}
        <span className="text-xl font-bold">{value}</span>
      </div>
    </div>
  );
}
