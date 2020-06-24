/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Textures = require('Textures');
const Materials = require('Materials');
const Diagnostics = require('Diagnostics');


Promise.all([
    Textures.findFirst('galleryTexture0'),
    Textures.findFirst('cameraTexture0'),
    Materials.findFirst('mat_fundo')
])
.then(function(objects) {
    const texturaGaleria = objects[0];
    const cameraTexture = objects[1];
    const material_fundo =  objects[2];
    material_fundo.diffuse = cameraTexture;
    texturaGaleria.height.monitor().subscribe(valor => {
        if (valor.newValue > 0) {
            material_fundo.diffuse = texturaGaleria;           
        }
    });       
});
