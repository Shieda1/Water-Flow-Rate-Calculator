// https://calculator.swiftutors.com/water-flow-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const waterFlowRateRadio = document.getElementById('waterFlowRateRadio');
const waterCollectedinContainerRadio = document.getElementById('waterCollectedinContainerRadio');
const timeTakenRadio = document.getElementById('timeTakenRadio');

let waterFlowRate;
let waterCollectedinContainer = v1;
let timeTaken = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

waterFlowRateRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Water Collected in Container (L)';
  variable2.textContent = '(T) Time Taken (sec)';
  waterCollectedinContainer = v1;
  timeTaken = v2;
  result.textContent = '';
});

waterCollectedinContainerRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Water Flow Rate (L/sec)';
  variable2.textContent = '(T) Time Taken (sec)';
  waterFlowRate = v1;
  timeTaken = v2;
  result.textContent = '';
});

timeTakenRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Water Flow Rate (L/sec)';
  variable2.textContent = '(V) Water Collected in Container (L)';
  waterFlowRate = v1;
  waterCollectedinContainer = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(waterFlowRateRadio.checked)
    result.textContent = `Water Flow Rate = ${computeWaterFlowRate().toFixed(2)} L/sec`;

  else if(waterCollectedinContainerRadio.checked)
    result.textContent = `Water Collected in Container = ${computeWaterCollectedinContainer().toFixed(2)} L`;

  else if(timeTakenRadio.checked)
    result.textContent = `Time Taken = ${computeTimeTaken().toFixed(2)} sec`;
})

// calculation

function computeWaterFlowRate() {
  return Number(waterCollectedinContainer.value) / Number(timeTaken.value);
}

function computeWaterCollectedinContainer() {
  return Number(waterFlowRate.value) * Number(timeTaken.value);
}

function computeTimeTaken() {
  return Number(waterCollectedinContainer.value) / Number(waterFlowRate.value);
}