import { ExcludeFromTuple, PartialTyple, Reverse } from '../interfaces';

const reverseList = <T>(list: T[]) => [...list].reverse();

export const toFP =
  <I extends any[], O, VA extends PartialTyple<Reverse<I>>>(
    fn: (...args: I) => O,
    ...value: VA
  ) =>
  (...hearArgs: ExcludeFromTuple<I, VA[number]>) =>
    fn(...([...hearArgs, ...reverseList(value)] as I));

export const toPipeline =
  <
    FNS extends ((...args: any) => any)[],
    U extends ReturnType<Reverse<FNS>[0]>,
  >(
    ...fns: FNS
  ) =>
  (...args: Parameters<FNS[0]>) => {
    const returnValue = fns.reduce(
      (lastReturn, fn) => [fn(...lastReturn)],
      args as unknown[],
    );

    return returnValue[0] as U;
  };
