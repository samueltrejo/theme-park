//xhr = xml http request
let rides = [];

const domStringBuilder = (array) => {
  console.log(array);
}


function executeAfterLoad(){
  const data = JSON.parse(this.responseText);
  // console.log('dope', data);
  rides = data.rides;
  domStringBuilder(data.rides);
}

function executeIfError(){
  console.error('wack');
}

const getRidesData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeAfterLoad);
  myRequest.addEventListener('error', executeIfError);
  myRequest.open('GET', './db/rides.json');
  myRequest.send();
  // console.log(myRequest);
}


const init = () => {
  getRidesData();
}

init()