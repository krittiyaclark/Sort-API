export const fetchListing1 = () => {
    return new Promise(function(resolve, reject) {
        fetch('https://www.hatchways.io/api/assessment/work_orders')
        .then(res => res.json())
        .then(json => {
            let items = json.orders
            console.log(items); 
            resolve(items);
        })
        .catch(err => {
        console.error(reject())
        })
    })
}

export const fetchListing2 = () => {
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
