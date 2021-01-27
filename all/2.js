var x = 4,
  y = '',
  a = 'foo' + x + 2 + 'bar',
  b = 'bar' + (x + 3) + 'foo',
  c = 'before' + x * 2 + 'after',
  d = y || (x && a) || c;