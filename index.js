window.onload = () => init(document.getElementById("mainCanvas"))

function init(canvas) {
    // Create an empty project and a view for the canvas
    paper.setup(canvas);

    // const background = new paper.Path.Rectangle({
    //     from: [0, 0],
    //     to: [600, 450]
    // })
    // background.styles = {
    //     fillColor: {
    //         gradient: {
    //             stops: ['#040308', '#AD4A28', '#DD723C', '#FC7001', '#DCB697', '#9BA5AE', '#3E5879', '#020B1A']
    //         }
    //     }
    // }

    // Add fireflies to the canvas
    fireflies(60);

    // Draw the view now
    paper.view.draw();
}
