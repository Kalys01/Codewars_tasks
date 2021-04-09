function warnTheSheep(queue) {
    queue.reverse();
    for (let i = 0; i < queue.length; i++) {
        return queue[0] == "wolf" ? `Pls go away and stop eating my sheep` : `Oi! Sheep number ${queue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
    }
}
console.log(warnTheSheep( ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"] ));