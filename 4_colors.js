// (4) Colori

// COLOR //////////////////////////////////////////////////////
osc(30,0).out(o0)
osc(30,0).color(1,0,1).out(o0)
// color( r = 1, g = 1, b = 1, a = 1 )

// SATURATE //////////////////////////////////////////////////////
osc(30,0,1).out(o0)
osc(30,0,1).saturate(2).out(o0)
// color( r = 1, g = 1, b = 1, a = 1 )

// HUE //////////////////////////////////////////////////////
// utile per fare degli spostamenti colore secondo lo spazio colore HSV (hue, saturation, value). Viene modificato solamente il valore della hue e preservati saturation e value (luminosità). Utile in caso di feedback
osc(30,0,1).out(o0)
osc(30,0,1).hue().out(o0)

// COLORAMA //////////////////////////////////////////////////////
// a differenza del precedente, colorama esegue spostamenti in tutti i parametri dello spazio HSV. Basato su un frattale, produce risultati imprevedibili.

osc(30,0,1).colorama().out(o0)
hush()

// POSTERIZE //////////////////////////////////////////////////////
// Applica una posterizzazione riducendo il numero di colori e aumentando il contrasto
gradient().posterize(10).out(o0)
gradient().posterize(3).out(o0)

// INVERT //////////////////////////////////////////////////////
solid().out(o0)
solid().invert().out(o0)

// THRESH //////////////////////////////////////////////////////
// Applica una soglia di luminosità (simile ad un HPF)

noise().out(o0)
noise().thresh(0.3).out(o0)

// thresh( threshold = 0.5, tolerance = 0.04 )

// RAINBOW //////////////////////////////////////////////////////

osc().out()

// impostando un offset pari a Mat.PI/2 si ottiene un rainbow effect

osc(6,0,Math.PI/2).out()

// con un offset pari a Math.PI si mandano il canale rosso ed il blu in fase e quindi si visualizzano solamente i colori della tinta

osc(6,0,Math.PI).out()

// Questo invece mostra solo le tonalità calde e fredde

osc(6,0,Math.PI/4).out()

hush()