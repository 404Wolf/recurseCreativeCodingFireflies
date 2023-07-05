const firefly = (size) => {
    const centroid = new paper.Point.random()
    centroid.x *= 600
    centroid.y *= 450

    const dot = paper.Path.Circle(
        centroid,
        size,
    )
    dot.style = {
        fillColor: "black",
        shadowColor: new paper.Color(246, 238, 95),
        shadowBlur: 8,
        shadowOffset: centroid
    }
}

const fireflies = (count) => {
    for (let i = 0; i < count; i++) {
        console.log("Firefly")
        firefly(5 + Math.random() * 5)
    }
}
