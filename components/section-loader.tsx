export function SectionLoader() {
  return (
    <div
      className="py-24 px-4 text-center text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading section...</span>
      Loading...
    </div>
  );
}
