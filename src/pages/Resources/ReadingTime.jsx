export default function ReadingTime({ minutes }) {
  if (!minutes) return null;
  return <span className="reading-time" aria-hidden="true">{minutes} min read</span>;
}
