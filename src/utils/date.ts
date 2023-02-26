
export function getFirstAndLastDayOfWeek(date: Date): Array<Date> {
  const first = date.getDate() - date.getDay()
  const firstDay = new Date(date.setDate(first))
  const lastDay = new Date(date.setDate(firstDay.getDate() + 6))
  return [firstDay, lastDay]
}

export function dateToString(date: Date): string {
  const yyyy = date.getFullYear()
  const mm = `${date.getMonth() + 1}`.padStart(2, '0')
  const dd = `${date.getDate()}`.padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}
