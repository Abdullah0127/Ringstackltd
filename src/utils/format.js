export function KFormatter(value) {
  if (typeof value !== 'number' && typeof value !== 'string') return String(value);
  const num = Number(value);
  if (Number.isNaN(num)) return String(value);
  return num.toLocaleString(undefined, { maximumFractionDigits: 1 });
}
