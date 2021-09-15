export type Reverse<Tuple> = Tuple extends [infer Head, ...infer Rest]
  ? [...Reverse<Rest>, Head]
  : Tuple;

export type ExcludeFromTuple<T extends readonly any[], E> = T extends [
  infer F,
  ...infer R
]
  ? F extends E
    ? ExcludeFromTuple<R, E>
    : [F, ...ExcludeFromTuple<R, E>]
  : [];

export type PartialTyple<Tuple> = Tuple extends [...infer Heads, infer _last]
  ? Tuple | PartialTyple<Heads>
  : Tuple;
