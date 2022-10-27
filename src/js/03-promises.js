const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < amount.value; i += 1) {
    let mainDelayStep = Number(firstDelay.value) + Number(delayStep.value) * i;
      createPromise(i, mainDelayStep)
        .then(({ position, delay }) => {
          return console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          return console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
  } 
};


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}