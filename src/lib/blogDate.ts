const blogDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Guayaquil"
});

export function formatBlogDate(value?: string | null): string | null {
  if (!value) return null;
  // Contentful GraphQL normalizes legacy calendar-only dates to midnight UTC.
  // Treat that sentinel as a calendar date; timestamped posts use Ecuador time.
  const calendarDate = /^\d{4}-\d{2}-\d{2}(?:T00:00:00(?:\.000)?Z)?$/.test(value);
  const date = new Date(calendarDate ? `${value.slice(0, 10)}T12:00:00-05:00` : value);
  return Number.isNaN(date.getTime()) ? null : blogDateFormatter.format(date);
}
