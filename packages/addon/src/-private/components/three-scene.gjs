import './three-scene.css';
import { setupScene } from '../lib/setup-scene';
import { modifier } from 'ember-modifier';

const setupCanvas = modifier((canvas) => {
  return setupScene(canvas);
});

<template>
  <canvas class='canvas-three' {{setupCanvas}} ...attributes></canvas>
</template>
