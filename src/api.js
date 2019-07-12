export const fetchListingOrders = () => {
    return new Promise(function(resolve, reject) {
        fetch('https://www.hatchways.io/api/assessment/work_orders')
        .then(res => res.json())
        .then(json => {
            let orders = json.orders
            console.log(orders); 
            resolve(orders);
        })
        .catch(err => {
        console.error(reject())
        })
    })
}

export const fetchListingWorkers = () => {
        return new Promise(function(resolve, reject) {
        fetch('https://www.hatchways.io/api/assessment/workers/0')
        .then(res => res.json())
        .then(json => {
            let workers = json.worker
            console.log(workers);
            resolve(workers);
        })
        .catch(err => {
            console.error(reject())
        })
    })
}