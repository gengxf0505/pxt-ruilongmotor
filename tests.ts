{
  
  
  ruilongmotor.motor(1, 1023);
  ruilongmotor.motor(2, -1023);
  basic.pause(1000);

  ruilongmotor.motor(1, -1023);
  ruilongmotor.motor(2, 1023);
  basic.pause(1000);

  ruilongmotor.motor(1, 0);
  ruilongmotor.motor(2, 0);
  basic.pause(1000);
}
