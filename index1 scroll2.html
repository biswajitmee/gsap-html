<!DOCTYPE html>
<html>
<head>
    <title>Vertical Image Gallery</title>
    <style>
        body {
            overflow-x: hidden;
            background-color: #000;
            margin: 0;
        }
        #galleryContainer {
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div id="galleryContainer"></div>
    <script src="https://threejs.org/build/three.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.158.0/three.module.min.js" integrity="sha512-XbDHYRyjxDMwR21BeH+JsAwasyQ0fR3fzxmaaVnkl3mwfHwFQdpKyr+o0EiGhCBlAyDio/Msr4i+EvS9h2IWsA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        // Initialize Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('galleryContainer').appendChild(renderer.domElement);

        // Define the radius of the circle and angle step
        const circleRadius = 7; // Adjust as needed
        const images = [
            'boy.jpg',
            'girl.jpg',
            'boy.jpg',
            'girl.jpg',
            'boy.jpg',
            'girl.jpg'
        ]; // Replace with your image paths
        const imageCount = images.length;
        const angleStep = (2 * Math.PI) / imageCount;
        const imageGroup = new THREE.Group(); // Create a group to hold the images

        // Load images and create planes in a circular arrangement
        const loader = new THREE.TextureLoader();
        
        images.forEach((img, index) => {
            const texture = loader.load(img);
            const geometry = new THREE.PlaneGeometry(9, 6); // Adjust size as needed
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
            const plane = new THREE.Mesh(geometry, material);
            const angle = angleStep * index;
            plane.position.x = circleRadius * Math.cos(angle);
            plane.position.y = circleRadius * Math.sin(angle);
            plane.lookAt(camera.position); // Make the image face the camera
            imageGroup.add(plane); // Add the plane to the group
        });

        scene.add(imageGroup); // Add the group to the scene
        camera.position.z = -1; // Adjust camera position as needed
        
        camera.rotation.x = 0 ; 
        camera.rotation.y = 1.5; 
       
        camera.position.x =  3 ;
        camera.position.y = 0 ;      

        // Update scroll event for wheel rotation
        window.addEventListener('wheel', (e) => {
            const rotationStep = e.deltaY * 0.001; // Adjust rotation sensitivity
            imageGroup.rotation.z += rotationStep; // Rotate the group
        });

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();
    </script>
</body>
</html>
