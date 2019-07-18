const workersList = {
  "Frans Storie": 0,
  "Fredi Brogan": 1,
  "Randal Charrett": 2,
  "Lynnell Michel": 3,
  "Ashien Galier": 4
};

export const fetchListingOrders = () => {
  return new Promise(function(resolve, reject) {
    fetch("https://www.hatchways.io/api/assessment/work_orders")
      .then(res => res.json())
      .then(json => {
        let orders = json.orders;
        console.log(orders);
        resolve(orders);
      })
      .catch(err => {
        console.error(reject());
      });
  });
};

export const fetchListingWorkers = (query = "Frans Storie") => {
  return new Promise(function(resolve, reject) {
    fetch(`https://www.hatchways.io/api/assessment/workers/${workersList[query]}`)
      .then(res => res.json())
      .then(json => {
        let workers = json.worker;
        console.log(workers);
        resolve(workers);
      })
      .catch(err => {
        console.error(reject());
      });
  });
};
