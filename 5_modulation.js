// (5) MODULATION

// Per modulazione intendiamo quando il comportamento di un oscillatore è influenzato da un segnale esterno.
// In genere, una modulazione spinge nelle direzioni della X e della Y in base ai valori di rosso e verde della texture spingente (alcune solo il rosso, altre entrambe).
// per evitare grosse soprese, applicare i modulate a delle texture in bianco e nero e applicare successivamente il colore.

// MODULATE //////////////////////////////////////////////////////
osc(30,0,2).out()
osc(30,0,2).modulate(noise(3),.5).out()

// modulate(TEXTURE(), quantityModulation)

// altri esempi
osc(30,.1,2).modulate(shape(3),.5).out()
osc(30,.1,2).modulate(voronoi(3),.5).out()
osc(30,.1,2).modulate(voronoi(3).modulate(osc(20)),1).out()

// MODULATE SCALE //////////////////////////////////////////////////////
// produce un effetto simile al modulate ma aggiunge più varietà

osc(30,.1,1).out()
osc(30,.1,1).modulate( osc(20,.1) ).out()
osc(30,.1,1).modulateScale( osc(20,.1) ).out()
osc(30,.1,1).modulateScale( osc(20,.1), 20 ).out()

shape(3,.1,.001).out()
shape(3,.1,.001).modulateScale( osc(20,.1) ).out()
shape(3,.1,.001).modulateScale( osc(20,.1), 3 ).out()

osc(60,0).kaleid(99).out(o0)
osc(60,0).modulateScale(osc(8,0)).kaleid(99).out(o0)
osc(60,.1).modulateScale(osc(8,0)).kaleid(99).out(o0)
osc(60,0).color(0,.9,.3).modulateScale(osc(8,0)).kaleid(3).out(o0)

noise(20).out()
noise(20).modulateScale(osc(20,0.1)).out()
noise(20).modulateScale(osc(20,0.1),5).out()
noise(20).modulateScale(noise(2,0.1),1.1).out()

// MODULATE REPEAT-X REPEAT-Y //////////////////////////////////////////////////////
shape(3,.1,.001).out()
shape(3,.1,.001).modulateRepeatX(osc(10),2).out()
shape(3,.1,.001).modulateRepeatY(osc(10),2).out()

// MODULATE HUE //////////////////////////////////////////////////////
// shape(4,0.5).out(o0)
// osc(5,1,2).modulate(noise(2,0),0.5).out(o1)
// src(o2).modulateHue(o1,8).blend(o0,0.01).out(o2)
// src(o2).luma(0.3,0.3).mult(o1).out(o3)
// render()

// MODULATE PIXELATE //////////////////////////////////////////////////////

// hush()
// shape(2).out(o0)
// osc(20,.3,Math.PI/2).modulate(noise(2)).out(o1)
// src(o0).modulateScale(noise()).out(o2)
// src(o2).modulateKaleid(osc(30)).out(o3)
// render()
// hush()

hush()
