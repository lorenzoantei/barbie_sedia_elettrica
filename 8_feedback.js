// feedback

shape(99, 0.1, 0).out(o0)
osc(30, 0.1, 1.5).out(o1)

render(o0)

src(o0)
  .modulate(
    osc(6,0,1.5).modulate(noise(3).sub(gradient()),1)
    .brightness(-0.5)
  ,0.003)
  .layer(
  osc(30,0.1,1.5).mask(shape(4,0.3,0))
  ).out(o0)