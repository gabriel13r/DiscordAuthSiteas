interface StatCardProps {
  title: string;
  value: string;
  statusColor?: string;
}

export default function StatCard({ title, value, statusColor }: StatCardProps) {
  return (
    <div className="bg-[hsl(var(--discord-background-tertiary))] rounded-lg p-4">
      <h3 className="text-[hsl(var(--discord-text-muted))] text-sm mb-1">{title}</h3>
      <div className="flex items-center">
        {statusColor && (
          <span className={`inline-block w-3 h-3 rounded-full ${statusColor} mr-2`}></span>
        )}
        <span className="text-lg font-medium">{value}</span>
      </div>
    </div>
  );
}
