// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    let hq = 42
    return Math.abs(blockNumber - hq);
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(blockNumber, destinationBlock) {
    return Math.abs((blockNumber - destinationBlock) * 264);   
}

function calculatesFarePrice(blockNumber, destinationBlock) {
    let distance = Math.abs((blockNumber - destinationBlock) * 264);
    if ( distance <= 400){
        return 0
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance >= 2500) {
        return 'cannot travel that far'
    } else {
        return (distance - 400) * 0.02
    }

}