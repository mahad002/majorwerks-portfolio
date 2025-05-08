import React, { useEffect, useRef, useState, memo } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

interface AudioSpectrumProps {
  scale?: number;
  position?: {
    x: number;
    y: number;
    z: number;
  };
}

const AudioSpectrum = memo<AudioSpectrumProps>(({ 
  scale = 1,
  position = { x: -22, y: 0, z: 90 }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const noise3D = createNoise3D();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = position.z;
    camera.position.x = position.x;
    camera.position.y = position.y;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor("#000000", 0);
    containerRef.current.appendChild(renderer.domElement);

    // Audio setup
    let audioContext: AudioContext;
    let analyser: AnalyserNode;
    let dataArray: Uint8Array;

    // Create icosahedron
    const baseRadius = 26 * scale;
    const geometry = new THREE.IcosahedronGeometry(baseRadius, 4);
    const material = new THREE.MeshLambertMaterial({
      color: "#ffffff",
      wireframe: true,
      opacity: 0.5,
      transparent: true
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add directional light
    const light = new THREE.DirectionalLight("#ffffff", 0.8);
    light.position.set(0, 50, 100);
    scene.add(light);

    // Helper functions
    const fractionate = (val: number, minVal: number, maxVal: number) => {
      return (val - minVal) / (maxVal - minVal);
    };

    const modulate = (val: number, minVal: number, maxVal: number, outMin: number, outMax: number) => {
      const fr = fractionate(val, minVal, maxVal);
      const delta = outMax - outMin;
      return outMin + (fr * delta);
    };

    const avg = (arr: Uint8Array) => {
      const sum = arr.reduce((a, b) => a + b);
      return sum / arr.length;
    };

    const max = (arr: Uint8Array) => {
      return arr.reduce((a, b) => Math.max(a, b));
    };

    const warpSphere = (mesh: THREE.Mesh, bassFr: number, treFr: number) => {
      const positions = mesh.geometry.attributes.position;
      const count = positions.count;
      
      for (let i = 0; i < count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positions, i);
        vertex.normalize();
        
        const amp = 1.5; // Reduced amplitude
        const time = Date.now();
        const rf = 0.00001;
        
        const distance = baseRadius + 
          noise3D(
            vertex.x + time * rf * 3,
            vertex.y + time * rf * 4,
            vertex.z + time * rf * 5
          ) * amp;
          
        vertex.multiplyScalar(distance);
        positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      
      positions.needsUpdate = true;
      mesh.geometry.computeVertexNormals();
    };
    
    // Initialize audio context after user interaction
    const initAudio = () => {
      if (audioContext) return;

      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;

      const oscillator = audioContext.createOscillator();
      oscillator.frequency.value = 440;
      oscillator.connect(analyser);
      oscillator.start();

      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (!isReady) setIsReady(true);

      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.002;
      sphere.rotation.z += 0.001;

      if (analyser) {
        analyser.getByteFrequencyData(dataArray);
        const lowerHalf = dataArray.slice(0, (dataArray.length / 2) - 1);
        const upperHalf = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);
        const lowerMax = max(lowerHalf);
        const upperAvg = avg(upperHalf);
        const lowerMaxFr = lowerMax / lowerHalf.length;
        const upperAvgFr = upperAvg / upperHalf.length;
        warpSphere(sphere, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 2), modulate(upperAvgFr, 0, 1, 0, 1));
      } else {
        warpSphere(sphere, 0.5, 0.25);
      }

      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', initAudio);
    
    setTimeout(initAudio, 2000);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', initAudio);
      
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      
      if (audioContext && audioContext.state !== 'closed') {
        audioContext.close();
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${isReady ? 'opacity-75' : 'opacity-0'}`}
      aria-hidden="true"
    />
  );
});

AudioSpectrum.displayName = 'AudioSpectrum';

export default AudioSpectrum;