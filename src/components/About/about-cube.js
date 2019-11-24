import React, { useEffect } from 'react';
import * as THREE from 'three';

import "./about-cube.scss";

function toRadians(angle) {
	return angle * (Math.PI / 180);
}

function AboutCube() {

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, .01, 100000);
    const renderer = new THREE.WebGLRenderer({ alpha: true});
    renderer.setSize( document.getElementById("three-js-container").offsetWidth,  document.getElementById("three-js-container").offsetHeight);
    document.getElementById("three-js-container").appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshFaceMaterial([
      new THREE.MeshBasicMaterial({
          map: loader.load('images/felix.jpg')
      }),
      new THREE.MeshBasicMaterial({
          map: loader.load('images/engagement.JPG')
      }),
      new THREE.MeshBasicMaterial({
          map: loader.load('images/headshot.png')
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('images/half.jpg')
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('images/felix_backpack.JPG')
      }),
      new THREE.MeshBasicMaterial({
          map: loader.load('images/hersh.jpg')
      })
    ]);
    
    const cube = new THREE.Mesh( geometry, material );
    cube.rotation.x = Math.PI/4;
    cube.rotation.y = Math.PI/4;
    scene.add( cube );

    camera.position.z = 1.5;

    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0
    };

    document.getElementById("about").addEventListener("mousedown", e => {
      isDragging = true;
    })
    document.getElementById("about").addEventListener("mousemove", e => {
      const deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
      }

      if(isDragging) {
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));
        
        cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
      }

      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
      };
    });

    document.getElementById("about").addEventListener("mouseup", e => {
      isDragging = false;
    });

    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    var lastFrameTime = new Date().getTime() / 1000;
    var totalGameTime = 0;
    function update(dt, t) {
        //console.log(dt, t);
        
        //camera.position.z += 1 * dt;
        //cube.rotation.x += 1 * dt;
        //cube.rotation.y += 1 * dt;
        
        setTimeout(function() {
            var currTime = new Date().getTime() / 1000;
            var dt = currTime - (lastFrameTime || currTime);
            totalGameTime += dt;
            
            update(dt, totalGameTime);
        
            lastFrameTime = currTime;
        }, 0);
    }

    function render() {
      requestAnimationFrame( render );
      renderer.render( scene, camera );
    }
    render();
    update(0, totalGameTime);
  });

  return (
    <div id="three-js-container">
    </div>
  );
}

export default AboutCube;