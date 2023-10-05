// (3) Geometry

// rotate //////////////////////////////////////////////////////
osc().out()
osc().rotate(2).out(o0)
// rotate( angle = 10, speed )

// scale //////////////////////////////////////////////////////
shape().out()
shape().scale(2).out(o0)
shape().scale(2,.1).out(o0)

// scale(scaleX, ScaleY )

// pixelate //////////////////////////////////////////////////////
noise().out()
noise().pixelate(20, 20).out()
noise().pixelate(20,2).out()

// pixelate( pixelX = 20, pixelY = 20 )

// repeat //////////////////////////////////////////////////////
shape().out()
shape().repeat().out()
shape().repeat(3,9).out()
shape().repeat(3,3,.9,.8).out()

// repeat( repeatX = 3, repeatY = 3, offsetX, offsetY )

// repeat //////////////////////////////////////////////////////

osc().out()
osc().kaleid().out()
osc().kaleid(6).out()
osc(30,-.1,2).kaleid(99).out()

// kaleid( nSides = 4 )

// https://hydra.ojack.xyz/?code=JTJGJTJGJTIwKDEpJTIwSGVsbG8lMjBXb3JsZCUwQSUwQW9zYygpLm91dCgpJTBBJTBBJTJGJTJGJTIwb3NjKCklMjBjcmVhJTIwdW4lMjBvc2NpbGxhdG9yZSUyMHZpc2l2byUwQSUwQSUyRiUyRiUyMEklMjBwYXJhbWV0cmklMjBkaSUyMG9zYygpJTBBJTJGJTJGJTIwb3NjKGZyZXF1ZW5jeSUyQyUyMHN5bmMlMkMlMjBvZmZzZXQpJTBBJTBBJTJGJTJGJTIwZnJlcXVlbmN5JTBBJTJGJTJGJTIwZGVmaW5pc2NlJTIwbGElMjBjb21wYXR0ZXp6YSUyMGRlbGxlJTIwbGluZWUlMEElMkYlMkYlMjBzeW5jJTBBJTJGJTJGJTIwbGElMjB2ZWxvY2l0JUMzJUEwJTIwZGklMjBzY29ycmltZW50byUwQSUyRiUyRiUyMG9mZnNldCUwQSUyRiUyRiUyMGFnZ2l1bmdlJTIwY29sb3Jl

