import { Promise } from 'es6-promise';

interface Callback <T> {
  (err: any, value?: T): any;
}

interface Callback2 <T1, T2> {
  (err: any, a: T1, b: T2): any;
}

interface Callback3 <T1, T2, T3> {
  (err: any, a: T1, b: T2, c: T3): any;
}

interface CallbackAll <TAll> {
  (err: any, ...args: TAll[]): any;
}

declare function thenify <U> (fn: (cb: Callback<U>) => any): () => Promise<U>;
declare function thenify <U1, U2> (fn: (cb: Callback2<U1, U2>) => any): () => Promise<[U1, U2]>;
declare function thenify <U1, U2, U3> (fn: (cb: Callback3<U1, U2, U3>) => any): () => Promise<[U1, U2, U3]>;
declare function thenify <UAll> (fn: (cb: CallbackAll<UAll>) => any): () => Promise<UAll[]>;

declare function thenify <T, U> (fn: (a: T, cb: Callback<U>) => any): (a: T) => Promise<U>;
declare function thenify <T, U1, U2> (fn: (a: T, cb: Callback2<U1, U2>) => any): (a: T) => Promise<[U1, U2]>;
declare function thenify <T, U1, U2, U3> (fn: (a: T, cb: Callback3<U1, U2, U3>) => any): (a: T) => Promise<[U1, U2, U3]>;
declare function thenify <T, UAll> (fn: (a: T, cb: CallbackAll<UAll>) => any): (a: T) => Promise<UAll[]>;

declare function thenify <T1, T2, U> (fn: (a: T1, b: T2, cb: Callback<U>) => any): (a: T1, b: T2) => Promise<U>;
declare function thenify <T1, T2, U1, U2> (fn: (a: T1, b: T2, cb: Callback2<U1, U2>) => any): (a: T1, b: T2) => Promise<[U1, U2]>;
declare function thenify <T1, T2, U1, U2, U3> (fn: (a: T1, b: T2, cb: Callback3<U1, U2, U3>) => any): (a: T1, b: T2) => Promise<[U1, U2, U3]>;
declare function thenify <T1, T2, UAll> (fn: (a: T1, b: T2, cb: CallbackAll<UAll>) => any): (a: T1, b: T2) => Promise<UAll[]>;

declare function thenify <T1, T2, T3, U> (fn: (a: T1, b: T2, c: T3, cb: Callback<U>) => any): (a: T1, b: T2, c: T3) => Promise<U>;
declare function thenify <T1, T2, T3, U1, U2> (fn: (a: T1, b: T2, c: T3, cb: Callback2<U1, U2>) => any): (a: T1, b: T2, c: T3) => Promise<[U1, U2]>;
declare function thenify <T1, T2, T3, U1, U2, U3> (fn: (a: T1, b: T2, c: T3, cb: Callback3<U1, U2, U3>) => any): (a: T1, b: T2, c: T3) => Promise<[U1, U2, U3]>;
declare function thenify <T1, T2, T3, UAll> (fn: (a: T1, b: T2, c: T3, cb: CallbackAll<UAll>) => any): (a: T1, b: T2, c: T3) => Promise<UAll[]>;

declare function thenify <T1, T2, T3, T4, U> (fn: (a: T1, b: T2, c: T3, d: T4, cb: Callback<U>) => any): (a: T1, b: T2, c: T3, d: T4) => Promise<U>;
declare function thenify <T1, T2, T3, T4, U1, U2> (fn: (a: T1, b: T2, c: T3, d: T4, cb: Callback2<U1, U2>) => any): (a: T1, b: T2, c: T3, d: T4) => Promise<[U1, U2]>;
declare function thenify <T1, T2, T3, T4, U1, U2, U3> (fn: (a: T1, b: T2, c: T3, d: T4, cb: Callback3<U1, U2, U3>) => any): (a: T1, b: T2, c: T3, d: T4) => Promise<[U1, U2, U3]>;
declare function thenify <T1, T2, T3, T4, UAll> (fn: (a: T1, b: T2, c: T3, d: T4, cb: CallbackAll<UAll>) => any): (a: T1, b: T2, c: T3, d: T4) => Promise<UAll[]>;

declare namespace thenify {
  export function withCallback <U> (fn: (cb: Callback<U>) => any): (cb?: Callback<U>) => Promise<U>;
  export function withCallback <U1, U2> (fn: (cb: Callback2<U1, U2>) => any): (cb?: Callback2<U1, U2>) => Promise<[U1, U2]>;
  export function withCallback <U1, U2, U3> (fn: (cb: Callback3<U1, U2, U3>) => any): (cb?: Callback3<U1, U2, U3>) => Promise<[U1, U2, U3]>;
  export function withCallback <UAll> (fn: (cb: CallbackAll<UAll>) => any): (cb?: CallbackAll<UAll>) => Promise<UAll[]>;

  export function withCallback <T, U> (fn: (a: T, cb: Callback<U>) => any): (a: T, cb?: Callback<U>) => Promise<U>;
  export function withCallback <T, U1, U2> (fn: (a: T, cb: Callback2<U1, U2>) => any): (a: T, cb?: Callback2<U1, U2>) => Promise<[U1, U2]>;
  export function withCallback <T, U1, U2, U3> (fn: (a: T, cb: Callback3<U1, U2, U3>) => any): (a: T, cb?: Callback3<U1, U2, U3>) => Promise<[U1, U2, U3]>;
  export function withCallback <T, UAll> (fn: (a: T, cb: CallbackAll<UAll>) => any): (a: T, cb?: CallbackAll<UAll>) => Promise<UAll[]>;

  export function withCallback <T1, T2, U> (fn: (a: T1, b: T2, cb: Callback<U>) => any): (a: T1, b: T2, cb?: Callback<U>) => Promise<U>;
  export function withCallback <T1, T2, U1, U2> (fn: (a: T1, b: T2, cb: Callback2<U1, U2>) => any): (a: T1, b: T2, cb?: Callback2<U1, U2>) => Promise<[U1, U2]>;
  export function withCallback <T1, T2, U1, U2, U3> (fn: (a: T1, b: T2, cb: Callback3<U1, U2, U3>) => any): (a: T1, b: T2, cb?: Callback3<U1, U2, U3>) => Promise<[U1, U2, U3]>;
  export function withCallback <T1, T2, UAll> (fn: (a: T1, b: T2, cb: CallbackAll<UAll>) => any): (a: T1, b: T2, cb?: CallbackAll<UAll>) => Promise<UAll[]>;

  export function withCallback <T1, T2, T3, U> (fn: (a: T1, b: T2, c: T3, cb: Callback<U>) => any): (a: T1, b: T2, c: T3, cb?: Callback<U>) => Promise<U>;
  export function withCallback <T1, T2, T3, U1, U2> (fn: (a: T1, b: T2, c: T3, cb: Callback2<U1, U2>) => any): (a: T1, b: T2, c: T3, cb?: Callback2<U1, U2>) => Promise<[U1, U2]>;
  export function withCallback <T1, T2, T3, U1, U2, U3> (fn: (a: T1, b: T2, c: T3, cb: Callback3<U1, U2, U3>) => any): (a: T1, b: T2, c: T3, cb?: Callback3<U1, U2, U3>) => Promise<[U1, U2, U3]>;
  export function withCallback <T1, T2, T3, UAll> (fn: (a: T1, b: T2, c: T3, cb: CallbackAll<UAll>) => any): (a: T1, b: T2, c: T3, cb?: CallbackAll<UAll>) => Promise<UAll[]>;

  export function withCallback <T1, T2, T3, T4, U> (fn: (a: T1, b: T2, c: T3, d: T4, cb: Callback<U>) => any): (a: T1, b: T2, c: T3, d: T4, cb?: Callback<U>) => Promise<U>;
  export function withCallback <T1, T2, T3, T4, U1, U2> (fn: (a: T1, b: T2, c: T3, d: T4, cb: Callback2<U1, U2>) => any): (a: T1, b: T2, c: T3, d: T4, cb?: Callback2<U1, U2>) => Promise<[U1, U2]>;
  export function withCallback <T1, T2, T3, T4, U1, U2, U3> (fn: (a: T1, b: T2, c: T3, d: T4, cb: Callback3<U1, U2, U3>) => any): (a: T1, b: T2, c: T3, d: T4, cb?: Callback3<U1, U2, U3>) => Promise<[U1, U2, U3]>;
  export function withCallback <T1, T2, T3, T4, UAll> (fn: (a: T1, b: T2, c: T3, d: T4, cb: CallbackAll<UAll>) => any): (a: T1, b: T2, c: T3, d: T4, cb?: CallbackAll<UAll>) => Promise<UAll[]>;
}

export = thenify;
