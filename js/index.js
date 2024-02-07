// Initialize Babylon.js
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

// Create a scene
var scene = new BABYLON.Scene(engine);

// Create a camera
var camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 0));

// Create a light source
var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

// Create an array to hold your image meshes
var imageMeshes = [];

// Function to create an image mesh
function createImageMesh(name, imageUrl, position) {
    var imageMesh = BABYLON.MeshBuilder.CreatePlane(name, { width: 1, height: 0.6 }, scene);
    imageMesh.position = position;

    var material = new BABYLON.StandardMaterial(name + "Material", scene);
    material.diffuseTexture = new BABYLON.Texture(imageUrl, scene);

    imageMesh.material = material;
    imageMeshes.push(imageMesh);
}

// Create image meshes for your gallery
createImageMesh("image1", "boy.jpg", new BABYLON.Vector3(0, 0, 0));
createImageMesh("image2", "girl.jpg", new BABYLON.Vector3(0, -1.2, 0));
createImageMesh("image3", "boy.jpg", new BABYLON.Vector3(0, -2.4, 0));
createImageMesh("image4", "girl.jpg", new BABYLON.Vector3(0, -3.6, 0));
createImageMesh("image5", "boy.jpg", new BABYLON.Vector3(0, -4.8, 0));
createImageMesh("image6", "girl.jpg", new BABYLON.Vector3(0, -6.0, 0));

// Register render loop
engine.runRenderLoop(function () {
    scene.render();
});

// Handle window resize
window.addEventListener("resize", function () {
    engine.resize();
});

// Handle scroll events
window.addEventListener("scroll", function () {
    // Calculate the scroll position
    var scrollY = window.scrollY;

    // Adjust the position of the image meshes based on scroll
    for (var i = 0; i < imageMeshes.length; i++) {
        var imageMesh = imageMeshes[i];
        imageMesh.position.y = -(i * 1.2) - scrollY / 100; // Adjust the scrolling speed and spacing
    }
});
