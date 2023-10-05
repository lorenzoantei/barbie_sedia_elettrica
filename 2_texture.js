// (2) TEXTURE

noise(10, 2).out()

// noise() simula il rumore di Perlin

// I parametri di noise()
// noise(scale, offset)

// scale - grandezza
// offset - variazione di movimento casuale

//////////////////////////////////////////////////////

voronoi( scale = 5, speed = .5, blending = 1.5 ).out()

// genera un diagramma Voronoi

// I parametri di voronoi()
// voronoi( scale = 5, speed = 0.5, blending = 0.3 )
// scale - la grandezza delle forme
// speed - velocità
// blending - morbidezza dei gradienti

//////////////////////////////////////////////////////

shape(3,.5, .001).out(o0)

// shape genera un poligono. Il numero di lati è definito dal parametro sides (default sides=3)

// I parametri di shape()
// shape( sides = 3, radius = 0.3, smoothing = 0.01 )
// shape - il numero di lati
// radius - grandezza della forma
// smoothing - morbidezza (opposto di nitidezza - aliasing)

// Un numero abbastanza grande di shape produce un cerchio

shape(99).out()

//////////////////////////////////////////////////////

solid().out()

// shape() genera una tinta unita

// parametri di solid()

// solid( r, g, b, a = 1 )

//////////////////////////////////////////////////////

gradient().out()

// gradient() genera dei gradienti preconfigurati

// parametri

// gradient( speed = 0 )
// speed - la velocità di passaggio ad un'altro gradiente preinpostato

//////////////////////////////////////////////////////

// https://hydra.ojack.xyz/?code=JTJGJTJGJTIwKDEpJTIwSGVsbG8lMjBXb3JsZCUwQSUwQW9zYygpLm91dCgpJTBBJTBBJTJGJTJGJTIwb3NjKCklMjBjcmVhJTIwdW4lMjBvc2NpbGxhdG9yZSUyMHZpc2l2byUwQSUwQSUyRiUyRiUyMEklMjBwYXJhbWV0cmklMjBkaSUyMG9zYygpJTBBJTJGJTJGJTIwb3NjKGZyZXF1ZW5jeSUyQyUyMHN5bmMlMkMlMjBvZmZzZXQpJTBBJTBBJTJGJTJGJTIwZnJlcXVlbmN5JTBBJTJGJTJGJTIwZGVmaW5pc2NlJTIwbGElMjBjb21wYXR0ZXp6YSUyMGRlbGxlJTIwbGluZWUlMEElMkYlMkYlMjBzeW5jJTBBJTJGJTJGJTIwbGElMjB2ZWxvY2l0JUMzJUEwJTIwZGklMjBzY29ycmltZW50byUwQSUyRiUyRiUyMG9mZnNldCUwQSUyRiUyRiUyMGFnZ2l1bmdlJTIwY29sb3Jl