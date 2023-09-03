import './lazy-dynamic-import.css';
import { modifier } from 'ember-modifier';

const setupCanvas = modifier((canvas) => {
  let cleanupScene;

  // Lazy load the module that contains all three.js imports
  import('../-private/lib/setup-scene').then(
    ({ setupScene }) => (cleanupScene = setupScene(canvas)),
  );

  return () => {
    cleanupScene?.();
  };
});

<template>
  <canvas class='canvas-three' {{setupCanvas}} ...attributes></canvas>
</template>
