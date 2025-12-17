// formes - the life simulation engine
// made by: lucaz37
// contributors: none yet

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js' // this thing imports three.js
// scene setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// formes setup
let organisms = []
const dStick = {genome = "",vert = [],nn = []}
const dCell = {genome = "",cells = []}
const dForam = {genome = "",chambers = []}
const dRigid = {genome = "",obj = [],motors = []}
const dModular = {genome = "",chambers = []}
const dModule = {shape = 0,offset = {v=0,sx=1,sy=1,sz=1},logic = []}
