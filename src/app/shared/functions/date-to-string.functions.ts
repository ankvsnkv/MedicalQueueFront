export function dateToStringDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}-${month}-${year}`;
}

export function dateToStringTT(date: Date) {
  var formatDate = dateToStringDD(date);

  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${formatDate} ${hour}:${minute}`;

}