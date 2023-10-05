// (1) Hello World

osc().out()

// osc() crea un oscillatore visivo

// I parametri di osc()
// osc(frequency, sync, offset)

// frequency
// definisce la compattezza delle linee (default 10)
// sync
// la velocità di scorrimento
// offset
// aggiunge colore ( valore da 0 a PI*2 - ruota colore)


// per visualizzare un ciclo completo (con frequenza 10) e statico a schermo:
osc(Math.PI*2*10,0).out()

// https://hydra.ojack.xyz/?code=JTJGJTJGJTIwKDEpJTIwSGVsbG8lMjBXb3JsZCUwQSUwQW9zYygpLm91dCgpJTBBJTBBJTJGJTJGJTIwb3NjKCklMjBjcmVhJTIwdW4lMjBvc2NpbGxhdG9yZSUyMHZpc2l2byUwQSUwQSUyRiUyRiUyMEklMjBwYXJhbWV0cmklMjBkaSUyMG9zYygpJTBBJTJGJTJGJTIwb3NjKGZyZXF1ZW5jeSUyQyUyMHN5bmMlMkMlMjBvZmZzZXQpJTBBJTBBJTJGJTJGJTIwZnJlcXVlbmN5JTBBJTJGJTJGJTIwZGVmaW5pc2NlJTIwbGElMjBjb21wYXR0ZXp6YSUyMGRlbGxlJTIwbGluZWUlMEElMkYlMkYlMjBzeW5jJTBBJTJGJTJGJTIwbGElMjB2ZWxvY2l0JUMzJUEwJTIwZGklMjBzY29ycmltZW50byUwQSUyRiUyRiUyMG9mZnNldCUwQSUyRiUyRiUyMGFnZ2l1bmdlJTIwY29sb3Jl