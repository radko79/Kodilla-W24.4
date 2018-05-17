const timeManagement = (timeInSeconds = 0) => {

  if ( timeInSeconds === 0 ) { return "0s"; }

  getHours = Math.floor(timeInSeconds / 3600);
  getMinutes = Math.floor((timeInSeconds % 3600) / 60);
  getSeconds = Math.floor(timeInSeconds - (getHours * 3600) - (getMinutes * 60));
  
  hours = `${getHours}h`;
  minutes = `${getMinutes}m`;
  seconds = `${getSeconds}s`;

  value10 = 10;
  value1 = 1;

  //hours
  //if ( getHours < value10 ) { hours = `0${getHours}h`; }
  if ( getHours < value1 ) { hours = ""; }
  //minutes
  if ( getMinutes < value10 ) { minutes = `0${getMinutes}m`; }
  if ( getMinutes < value1 ) { minutes = ""; }
  //seconds
  if ( getSeconds < value10 ) { seconds = `0${getSeconds}s`; }
  if ( getSeconds < value1 ) { seconds = ""; }
  
  //return `${Math.floor(timeInSeconds)}s which totals in ${hours}${minutes}${seconds}`;
  return `${hours}${minutes}${seconds}`;
};

module.exports = timeManagement;