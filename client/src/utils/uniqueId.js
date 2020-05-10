export function uniqueId() {
    let timeStamp = new Date().getTime();
    // let randomString = parseInt(Math.random()*88888) + 100000;
    return timeStamp.toString();
}