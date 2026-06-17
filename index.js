/**
 * Simple Date Dataset Generator
 * Generates an array of date objects with useful fields.
 */

function generateDateDataset(startDate, endDate) {
  const dataset = [];
  const current = new Date(startDate);
  const end = new Date(endDate);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth();
    const date = current.getDate();
    const dayOfWeek = current.getDay();

    dataset.push({
      date: current.toISOString().split('T')[0],   // YYYY-MM-DD
      year,
      month: month + 1,
      monthName: months[month],
      day: date,
      dayOfWeek: dayOfWeek,
      dayName: days[dayOfWeek],
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
      quarter: Math.ceil((month + 1) / 3),
      timestamp: current.getTime(),
    });

    current.setDate(current.getDate() + 1);
  }

  return dataset;
}

// --- Example usage ---
const dataset = generateDateDataset('2025-01-01', '2025-12-31');

console.log(`Total dates: ${dataset.length}`);
console.log('\nFirst 5 entries:');
dataset.slice(0, 5).forEach((d) => console.log(JSON.stringify(d)));

console.log('\nLast 5 entries:');
dataset.slice(-5).forEach((d) => console.log(JSON.stringify(d)));

// Summary
const weekends = dataset.filter((d) => d.isWeekend).length;
console.log(`\nSummary for ${dataset[0].year}:`);
console.log(`  Total days : ${dataset.length}`);
console.log(`  Weekends   : ${weekends}`);
console.log(`  Weekdays   : ${dataset.length - weekends}`);

module.exports = { generateDateDataset };
