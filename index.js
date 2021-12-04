let difference = distanceTravelledInFeet(start, destination)

function distanceFromHqInBlocks(location) {
    return Math.abs(location-42);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start, destination){
    let n = distanceTravelledInFeet(start, destination)
    if (n<400) {
        return 0;
    } else if (n>400 && n<2000){ //using x<n<z is not well read by JS**
        return (n-400)*0.02;
    } else if (n>2000&&n<2500) {
        return 25
    } else if (n>2500) {
        return "cannot travel that far"
    }
}



// const HQ = 42

// function distanceFromHqInBlocks(start) {
//     return start>HQ?start-HQ:HQ-start;
// }

// function distanceFromHqInFeet(start) {
//     return distanceFromHqInBlocks(start) * 264
// }

// function distanceTravelledInFeet(start, current) {
//     return Math.abs(start-current)*264;
// }

// function calculatesFarePrice(start, current){
//     let n = distanceTravelledInFeet(start, current);
//     if (n<=400) {
//         return 0;
//     } else if (n>=400 && n<=2000) {
//         return (n%400)*0.02;
//     } else if (n>2000 && n<2500) {
//         return 25;
//     } else if (n>2500) {
//         return "cannot travel that far"
//     }
// }

// console.log(calculatesFarePrice(34, 24))