// (6) CAMERA, AUDIO, VIDEO


// WEBCAM //////////////////////////////////////////////////////
s0.initCam(0)
// s1.initCam(0)
// s2.initCam(2)
// potete avere più camere...

src(s0).scale(1,-1).out() // utilizzate la variabile istanziata nel metodo src()

// AUDIO //////////////////////////////////////////////////////

a.show()
a.hide()
a.setBins(6) // numero di barre da visualizzare

a.setSmooth(0.8) // livellamento - 0 nessun livellamento (più veloce) e 1 il valore non cambia mai
a.setCutoff(4) // minimo valore rilevabile
a.setScale(5) // aumenta l'intensità al diminuire del valore impostato

// a.fft[0] stampa il valore attuale della prima barra (quella più bassa) e può assumere un valore tra 0 e 1

osc(20, 0, () => (a.fft[0]*4)).out()

osc().modulate(noise(3),()=>a.fft[0]).out(o0)

// IMMAGINI //////////////////////////////////////////////////////

// https://commons.wikimedia.org
s2.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/SL_Bundala_NP_asv2020-01_img17.jpg/750px-SL_Bundala_NP_asv2020-01_img17.jpg")
osc(6).modulate(src(s2),1).out(o0)

// CONDIVISIONE SCHERMO //////////////////////////////////////////////////////

s0.initScreen()
s1.initScreen()
src(s0).out(o0)
src(o0).blend(s1).out(o2)
render()

// esempio multicam //////////////////////////////////////////////////////

// s0.initCam(1)
// s1.initCam(0)
// s2.initCam(2)

// src(s0).out(o0)
// src(s1).rotate(Math.PI).out(o1)
// src(s2).rotate(Math.PI).out(o2)
// noise().out(o2)

// src(s0).diff(o1).blend(o2).out(o3)

// render()
// hush()

