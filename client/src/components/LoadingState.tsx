interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Connecting to Discord..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="mb-6">
        <div className="w-16 h-16 border-4 border-[hsl(var(--discord-blurple))] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h2 className="text-xl font-medium">{message}</h2>
      <p className="text-[hsl(var(--discord-text-muted))] mt-2">Please wait while we process your request.</p>
    </div>
  );
}
