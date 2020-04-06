export default (ts: string) => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(parseInt(ts) / 10000);
  const minutes = date.getMinutes();
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getHours()}:${minutes > 9 ? minutes : "0" + minutes}`;
};
