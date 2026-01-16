export default function MaintenanceBanner() {
  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden bg-yellow-200 border-b border-yellow-400">
      <div className="animate-marquee whitespace-nowrap py-2 text-yellow-900 text-sm font-medium">
        ⚠️ Website is under maintenance, all features will be live soon.
      </div>
    </div>
  );
}
