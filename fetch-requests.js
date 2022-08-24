/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch('/products', {
    method: 'POST',
    headers: {'Content-Type': "application/x-www-form-urlencoded" },
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
})


/* ============================== Phase 2 ============================== */

// Your code here
const getProducts = async () => {
    const res = await fetch('/products', {
        method: 'POST',
        headers: {'Content-Type': "application/x-www-form-urlencoded" },
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    });
    console.log(res.status);

    console.log('response header', res.headers.get('Content-Type'));

    console.log(res.url);

    console.log(res.redirected);
}


/* ============================== Phase 3 ============================== */
const getProducts = async () => {
    const res = await fetch('/products', {
        method: 'POST',
        headers: {'Content-Type': "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            name: "Caribbean Delight Coffee",
            description: "Made by Manatee Coffee",
            price: 11.99,
            categories: "grocery"
          })
    });
    console.log(res.status);

    console.log('response header', res.headers.get('Content-Type'));

    console.log(res.url);

    console.log(res.redirected);
}
// Your code here
