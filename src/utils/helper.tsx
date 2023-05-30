export function extractAllDates(data) {
  const dates = data.map(item => item.date);
  return Array.from(new Set(dates));
}

export function retrieveTimesByDate(selectedDate, data) {
  const selectedObject = data.find(item => item.date === selectedDate);
  return selectedObject ? selectedObject.times : [];
}
