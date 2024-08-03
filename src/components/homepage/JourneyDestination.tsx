export default function JourneyDestination() {
  return (
    <div className="flex flex-col items-center justify-center mt-[10px] animation-150">
      <h1 className="xs:text-base font-medium text-lg mb-1 tracking-tight">
        Now
      </h1>

      <div className="xs:w-[20px] xs:h-[20px] w-[25px] h-[25px] rounded-full border-2 border-[hsl(var(--foreground))]" />

      <h1 className="text-xs font-semibold mt-6 text-tertiary">
        Last updated: 8/3/2024
      </h1>
    </div>
  );
}
