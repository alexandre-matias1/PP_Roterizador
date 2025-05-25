
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Routes
 * 
 */
export type Routes = $Result.DefaultSelection<Prisma.$RoutesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model RoutesChange
 * 
 */
export type RoutesChange = $Result.DefaultSelection<Prisma.$RoutesChangePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Routes
 * const routes = await prisma.routes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Routes
   * const routes = await prisma.routes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.routes`: Exposes CRUD operations for the **Routes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.routes.findMany()
    * ```
    */
  get routes(): Prisma.RoutesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routesChange`: Exposes CRUD operations for the **RoutesChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutesChanges
    * const routesChanges = await prisma.routesChange.findMany()
    * ```
    */
  get routesChange(): Prisma.RoutesChangeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Routes: 'Routes',
    Users: 'Users',
    RoutesChange: 'RoutesChange'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "routes" | "users" | "routesChange"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Routes: {
        payload: Prisma.$RoutesPayload<ExtArgs>
        fields: Prisma.RoutesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          findFirst: {
            args: Prisma.RoutesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          findMany: {
            args: Prisma.RoutesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>[]
          }
          create: {
            args: Prisma.RoutesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          createMany: {
            args: Prisma.RoutesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>[]
          }
          delete: {
            args: Prisma.RoutesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          update: {
            args: Prisma.RoutesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          deleteMany: {
            args: Prisma.RoutesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>[]
          }
          upsert: {
            args: Prisma.RoutesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesPayload>
          }
          aggregate: {
            args: Prisma.RoutesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutes>
          }
          groupBy: {
            args: Prisma.RoutesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutesCountArgs<ExtArgs>
            result: $Utils.Optional<RoutesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      RoutesChange: {
        payload: Prisma.$RoutesChangePayload<ExtArgs>
        fields: Prisma.RoutesChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutesChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutesChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>
          }
          findFirst: {
            args: Prisma.RoutesChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutesChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>
          }
          findMany: {
            args: Prisma.RoutesChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>[]
          }
          create: {
            args: Prisma.RoutesChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>
          }
          createMany: {
            args: Prisma.RoutesChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutesChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>[]
          }
          delete: {
            args: Prisma.RoutesChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>
          }
          update: {
            args: Prisma.RoutesChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>
          }
          deleteMany: {
            args: Prisma.RoutesChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutesChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutesChangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>[]
          }
          upsert: {
            args: Prisma.RoutesChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutesChangePayload>
          }
          aggregate: {
            args: Prisma.RoutesChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutesChange>
          }
          groupBy: {
            args: Prisma.RoutesChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutesChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutesChangeCountArgs<ExtArgs>
            result: $Utils.Optional<RoutesChangeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    routes?: RoutesOmit
    users?: UsersOmit
    routesChange?: RoutesChangeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Routes
   */

  export type AggregateRoutes = {
    _count: RoutesCountAggregateOutputType | null
    _avg: RoutesAvgAggregateOutputType | null
    _sum: RoutesSumAggregateOutputType | null
    _min: RoutesMinAggregateOutputType | null
    _max: RoutesMaxAggregateOutputType | null
  }

  export type RoutesAvgAggregateOutputType = {
    id: number | null
    LAT: number | null
    LNG: number | null
  }

  export type RoutesSumAggregateOutputType = {
    id: number | null
    LAT: number | null
    LNG: number | null
  }

  export type RoutesMinAggregateOutputType = {
    id: number | null
    VEICULO: string | null
    FILDOC: string | null
    DOC: string | null
    SERIE: string | null
    LAT: number | null
    LNG: number | null
    ENDERECO: string | null
  }

  export type RoutesMaxAggregateOutputType = {
    id: number | null
    VEICULO: string | null
    FILDOC: string | null
    DOC: string | null
    SERIE: string | null
    LAT: number | null
    LNG: number | null
    ENDERECO: string | null
  }

  export type RoutesCountAggregateOutputType = {
    id: number
    VEICULO: number
    FILDOC: number
    DOC: number
    SERIE: number
    LAT: number
    LNG: number
    ENDERECO: number
    _all: number
  }


  export type RoutesAvgAggregateInputType = {
    id?: true
    LAT?: true
    LNG?: true
  }

  export type RoutesSumAggregateInputType = {
    id?: true
    LAT?: true
    LNG?: true
  }

  export type RoutesMinAggregateInputType = {
    id?: true
    VEICULO?: true
    FILDOC?: true
    DOC?: true
    SERIE?: true
    LAT?: true
    LNG?: true
    ENDERECO?: true
  }

  export type RoutesMaxAggregateInputType = {
    id?: true
    VEICULO?: true
    FILDOC?: true
    DOC?: true
    SERIE?: true
    LAT?: true
    LNG?: true
    ENDERECO?: true
  }

  export type RoutesCountAggregateInputType = {
    id?: true
    VEICULO?: true
    FILDOC?: true
    DOC?: true
    SERIE?: true
    LAT?: true
    LNG?: true
    ENDERECO?: true
    _all?: true
  }

  export type RoutesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to aggregate.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RoutesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutesMaxAggregateInputType
  }

  export type GetRoutesAggregateType<T extends RoutesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutes[P]>
      : GetScalarType<T[P], AggregateRoutes[P]>
  }




  export type RoutesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutesWhereInput
    orderBy?: RoutesOrderByWithAggregationInput | RoutesOrderByWithAggregationInput[]
    by: RoutesScalarFieldEnum[] | RoutesScalarFieldEnum
    having?: RoutesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutesCountAggregateInputType | true
    _avg?: RoutesAvgAggregateInputType
    _sum?: RoutesSumAggregateInputType
    _min?: RoutesMinAggregateInputType
    _max?: RoutesMaxAggregateInputType
  }

  export type RoutesGroupByOutputType = {
    id: number
    VEICULO: string
    FILDOC: string
    DOC: string
    SERIE: string
    LAT: number
    LNG: number
    ENDERECO: string
    _count: RoutesCountAggregateOutputType | null
    _avg: RoutesAvgAggregateOutputType | null
    _sum: RoutesSumAggregateOutputType | null
    _min: RoutesMinAggregateOutputType | null
    _max: RoutesMaxAggregateOutputType | null
  }

  type GetRoutesGroupByPayload<T extends RoutesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutesGroupByOutputType[P]>
            : GetScalarType<T[P], RoutesGroupByOutputType[P]>
        }
      >
    >


  export type RoutesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    VEICULO?: boolean
    FILDOC?: boolean
    DOC?: boolean
    SERIE?: boolean
    LAT?: boolean
    LNG?: boolean
    ENDERECO?: boolean
  }, ExtArgs["result"]["routes"]>

  export type RoutesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    VEICULO?: boolean
    FILDOC?: boolean
    DOC?: boolean
    SERIE?: boolean
    LAT?: boolean
    LNG?: boolean
    ENDERECO?: boolean
  }, ExtArgs["result"]["routes"]>

  export type RoutesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    VEICULO?: boolean
    FILDOC?: boolean
    DOC?: boolean
    SERIE?: boolean
    LAT?: boolean
    LNG?: boolean
    ENDERECO?: boolean
  }, ExtArgs["result"]["routes"]>

  export type RoutesSelectScalar = {
    id?: boolean
    VEICULO?: boolean
    FILDOC?: boolean
    DOC?: boolean
    SERIE?: boolean
    LAT?: boolean
    LNG?: boolean
    ENDERECO?: boolean
  }

  export type RoutesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "VEICULO" | "FILDOC" | "DOC" | "SERIE" | "LAT" | "LNG" | "ENDERECO", ExtArgs["result"]["routes"]>

  export type $RoutesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      VEICULO: string
      FILDOC: string
      DOC: string
      SERIE: string
      LAT: number
      LNG: number
      ENDERECO: string
    }, ExtArgs["result"]["routes"]>
    composites: {}
  }

  type RoutesGetPayload<S extends boolean | null | undefined | RoutesDefaultArgs> = $Result.GetResult<Prisma.$RoutesPayload, S>

  type RoutesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutesCountAggregateInputType | true
    }

  export interface RoutesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routes'], meta: { name: 'Routes' } }
    /**
     * Find zero or one Routes that matches the filter.
     * @param {RoutesFindUniqueArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutesFindUniqueArgs>(args: SelectSubset<T, RoutesFindUniqueArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutesFindUniqueOrThrowArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutesFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesFindFirstArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutesFindFirstArgs>(args?: SelectSubset<T, RoutesFindFirstArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesFindFirstOrThrowArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutesFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.routes.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.routes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routesWithIdOnly = await prisma.routes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutesFindManyArgs>(args?: SelectSubset<T, RoutesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routes.
     * @param {RoutesCreateArgs} args - Arguments to create a Routes.
     * @example
     * // Create one Routes
     * const Routes = await prisma.routes.create({
     *   data: {
     *     // ... data to create a Routes
     *   }
     * })
     * 
     */
    create<T extends RoutesCreateArgs>(args: SelectSubset<T, RoutesCreateArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RoutesCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const routes = await prisma.routes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutesCreateManyArgs>(args?: SelectSubset<T, RoutesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RoutesCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const routes = await prisma.routes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routesWithIdOnly = await prisma.routes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutesCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routes.
     * @param {RoutesDeleteArgs} args - Arguments to delete one Routes.
     * @example
     * // Delete one Routes
     * const Routes = await prisma.routes.delete({
     *   where: {
     *     // ... filter to delete one Routes
     *   }
     * })
     * 
     */
    delete<T extends RoutesDeleteArgs>(args: SelectSubset<T, RoutesDeleteArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routes.
     * @param {RoutesUpdateArgs} args - Arguments to update one Routes.
     * @example
     * // Update one Routes
     * const routes = await prisma.routes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutesUpdateArgs>(args: SelectSubset<T, RoutesUpdateArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RoutesDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.routes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutesDeleteManyArgs>(args?: SelectSubset<T, RoutesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const routes = await prisma.routes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutesUpdateManyArgs>(args: SelectSubset<T, RoutesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RoutesUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const routes = await prisma.routes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routesWithIdOnly = await prisma.routes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoutesUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routes.
     * @param {RoutesUpsertArgs} args - Arguments to update or create a Routes.
     * @example
     * // Update or create a Routes
     * const routes = await prisma.routes.upsert({
     *   create: {
     *     // ... data to create a Routes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routes we want to update
     *   }
     * })
     */
    upsert<T extends RoutesUpsertArgs>(args: SelectSubset<T, RoutesUpsertArgs<ExtArgs>>): Prisma__RoutesClient<$Result.GetResult<Prisma.$RoutesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.routes.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RoutesCountArgs>(
      args?: Subset<T, RoutesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutesAggregateArgs>(args: Subset<T, RoutesAggregateArgs>): Prisma.PrismaPromise<GetRoutesAggregateType<T>>

    /**
     * Group by Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutesGroupByArgs['orderBy'] }
        : { orderBy?: RoutesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routes model
   */
  readonly fields: RoutesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Routes model
   */
  interface RoutesFieldRefs {
    readonly id: FieldRef<"Routes", 'Int'>
    readonly VEICULO: FieldRef<"Routes", 'String'>
    readonly FILDOC: FieldRef<"Routes", 'String'>
    readonly DOC: FieldRef<"Routes", 'String'>
    readonly SERIE: FieldRef<"Routes", 'String'>
    readonly LAT: FieldRef<"Routes", 'Float'>
    readonly LNG: FieldRef<"Routes", 'Float'>
    readonly ENDERECO: FieldRef<"Routes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Routes findUnique
   */
  export type RoutesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes findUniqueOrThrow
   */
  export type RoutesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes findFirst
   */
  export type RoutesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * Routes findFirstOrThrow
   */
  export type RoutesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * Routes findMany
   */
  export type RoutesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RoutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RoutesOrderByWithRelationInput | RoutesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RoutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * Routes create
   */
  export type RoutesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data needed to create a Routes.
     */
    data: XOR<RoutesCreateInput, RoutesUncheckedCreateInput>
  }

  /**
   * Routes createMany
   */
  export type RoutesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RoutesCreateManyInput | RoutesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routes createManyAndReturn
   */
  export type RoutesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RoutesCreateManyInput | RoutesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routes update
   */
  export type RoutesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data needed to update a Routes.
     */
    data: XOR<RoutesUpdateInput, RoutesUncheckedUpdateInput>
    /**
     * Choose, which Routes to update.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes updateMany
   */
  export type RoutesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RoutesUpdateManyMutationInput, RoutesUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RoutesWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Routes updateManyAndReturn
   */
  export type RoutesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RoutesUpdateManyMutationInput, RoutesUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RoutesWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Routes upsert
   */
  export type RoutesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * The filter to search for the Routes to update in case it exists.
     */
    where: RoutesWhereUniqueInput
    /**
     * In case the Routes found by the `where` argument doesn't exist, create a new Routes with this data.
     */
    create: XOR<RoutesCreateInput, RoutesUncheckedCreateInput>
    /**
     * In case the Routes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutesUpdateInput, RoutesUncheckedUpdateInput>
  }

  /**
   * Routes delete
   */
  export type RoutesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
    /**
     * Filter which Routes to delete.
     */
    where: RoutesWhereUniqueInput
  }

  /**
   * Routes deleteMany
   */
  export type RoutesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RoutesWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Routes without action
   */
  export type RoutesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routes
     */
    select?: RoutesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routes
     */
    omit?: RoutesOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    latFilial: number | null
    lngFilial: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    latFilial: number | null
    lngFilial: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    filial: string | null
    latFilial: number | null
    lngFilial: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    filial: string | null
    latFilial: number | null
    lngFilial: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    filial: number
    latFilial: number
    lngFilial: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    latFilial?: true
    lngFilial?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    latFilial?: true
    lngFilial?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    filial?: true
    latFilial?: true
    lngFilial?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    filial?: true
    latFilial?: true
    lngFilial?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    filial?: true
    latFilial?: true
    lngFilial?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    filial: string
    latFilial: number
    lngFilial: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filial?: boolean
    latFilial?: boolean
    lngFilial?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filial?: boolean
    latFilial?: boolean
    lngFilial?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filial?: boolean
    latFilial?: boolean
    lngFilial?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    filial?: boolean
    latFilial?: boolean
    lngFilial?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "filial" | "latFilial" | "lngFilial", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      filial: string
      latFilial: number
      lngFilial: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly filial: FieldRef<"Users", 'String'>
    readonly latFilial: FieldRef<"Users", 'Float'>
    readonly lngFilial: FieldRef<"Users", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model RoutesChange
   */

  export type AggregateRoutesChange = {
    _count: RoutesChangeCountAggregateOutputType | null
    _avg: RoutesChangeAvgAggregateOutputType | null
    _sum: RoutesChangeSumAggregateOutputType | null
    _min: RoutesChangeMinAggregateOutputType | null
    _max: RoutesChangeMaxAggregateOutputType | null
  }

  export type RoutesChangeAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RoutesChangeSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type RoutesChangeMinAggregateOutputType = {
    id: number | null
    wasRoute: string | null
    toRoute: string | null
    route_id: string | null
    user_id: number | null
    createdAt: Date | null
  }

  export type RoutesChangeMaxAggregateOutputType = {
    id: number | null
    wasRoute: string | null
    toRoute: string | null
    route_id: string | null
    user_id: number | null
    createdAt: Date | null
  }

  export type RoutesChangeCountAggregateOutputType = {
    id: number
    wasRoute: number
    toRoute: number
    route_id: number
    user_id: number
    createdAt: number
    _all: number
  }


  export type RoutesChangeAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RoutesChangeSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type RoutesChangeMinAggregateInputType = {
    id?: true
    wasRoute?: true
    toRoute?: true
    route_id?: true
    user_id?: true
    createdAt?: true
  }

  export type RoutesChangeMaxAggregateInputType = {
    id?: true
    wasRoute?: true
    toRoute?: true
    route_id?: true
    user_id?: true
    createdAt?: true
  }

  export type RoutesChangeCountAggregateInputType = {
    id?: true
    wasRoute?: true
    toRoute?: true
    route_id?: true
    user_id?: true
    createdAt?: true
    _all?: true
  }

  export type RoutesChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutesChange to aggregate.
     */
    where?: RoutesChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutesChanges to fetch.
     */
    orderBy?: RoutesChangeOrderByWithRelationInput | RoutesChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutesChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutesChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutesChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutesChanges
    **/
    _count?: true | RoutesChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutesChangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutesChangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutesChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutesChangeMaxAggregateInputType
  }

  export type GetRoutesChangeAggregateType<T extends RoutesChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutesChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutesChange[P]>
      : GetScalarType<T[P], AggregateRoutesChange[P]>
  }




  export type RoutesChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutesChangeWhereInput
    orderBy?: RoutesChangeOrderByWithAggregationInput | RoutesChangeOrderByWithAggregationInput[]
    by: RoutesChangeScalarFieldEnum[] | RoutesChangeScalarFieldEnum
    having?: RoutesChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutesChangeCountAggregateInputType | true
    _avg?: RoutesChangeAvgAggregateInputType
    _sum?: RoutesChangeSumAggregateInputType
    _min?: RoutesChangeMinAggregateInputType
    _max?: RoutesChangeMaxAggregateInputType
  }

  export type RoutesChangeGroupByOutputType = {
    id: number
    wasRoute: string
    toRoute: string
    route_id: string
    user_id: number
    createdAt: Date
    _count: RoutesChangeCountAggregateOutputType | null
    _avg: RoutesChangeAvgAggregateOutputType | null
    _sum: RoutesChangeSumAggregateOutputType | null
    _min: RoutesChangeMinAggregateOutputType | null
    _max: RoutesChangeMaxAggregateOutputType | null
  }

  type GetRoutesChangeGroupByPayload<T extends RoutesChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutesChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutesChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutesChangeGroupByOutputType[P]>
            : GetScalarType<T[P], RoutesChangeGroupByOutputType[P]>
        }
      >
    >


  export type RoutesChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wasRoute?: boolean
    toRoute?: boolean
    route_id?: boolean
    user_id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["routesChange"]>

  export type RoutesChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wasRoute?: boolean
    toRoute?: boolean
    route_id?: boolean
    user_id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["routesChange"]>

  export type RoutesChangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wasRoute?: boolean
    toRoute?: boolean
    route_id?: boolean
    user_id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["routesChange"]>

  export type RoutesChangeSelectScalar = {
    id?: boolean
    wasRoute?: boolean
    toRoute?: boolean
    route_id?: boolean
    user_id?: boolean
    createdAt?: boolean
  }

  export type RoutesChangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wasRoute" | "toRoute" | "route_id" | "user_id" | "createdAt", ExtArgs["result"]["routesChange"]>

  export type $RoutesChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutesChange"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wasRoute: string
      toRoute: string
      route_id: string
      user_id: number
      createdAt: Date
    }, ExtArgs["result"]["routesChange"]>
    composites: {}
  }

  type RoutesChangeGetPayload<S extends boolean | null | undefined | RoutesChangeDefaultArgs> = $Result.GetResult<Prisma.$RoutesChangePayload, S>

  type RoutesChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutesChangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutesChangeCountAggregateInputType | true
    }

  export interface RoutesChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutesChange'], meta: { name: 'RoutesChange' } }
    /**
     * Find zero or one RoutesChange that matches the filter.
     * @param {RoutesChangeFindUniqueArgs} args - Arguments to find a RoutesChange
     * @example
     * // Get one RoutesChange
     * const routesChange = await prisma.routesChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutesChangeFindUniqueArgs>(args: SelectSubset<T, RoutesChangeFindUniqueArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutesChange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutesChangeFindUniqueOrThrowArgs} args - Arguments to find a RoutesChange
     * @example
     * // Get one RoutesChange
     * const routesChange = await prisma.routesChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutesChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutesChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutesChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeFindFirstArgs} args - Arguments to find a RoutesChange
     * @example
     * // Get one RoutesChange
     * const routesChange = await prisma.routesChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutesChangeFindFirstArgs>(args?: SelectSubset<T, RoutesChangeFindFirstArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutesChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeFindFirstOrThrowArgs} args - Arguments to find a RoutesChange
     * @example
     * // Get one RoutesChange
     * const routesChange = await prisma.routesChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutesChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutesChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutesChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutesChanges
     * const routesChanges = await prisma.routesChange.findMany()
     * 
     * // Get first 10 RoutesChanges
     * const routesChanges = await prisma.routesChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routesChangeWithIdOnly = await prisma.routesChange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutesChangeFindManyArgs>(args?: SelectSubset<T, RoutesChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutesChange.
     * @param {RoutesChangeCreateArgs} args - Arguments to create a RoutesChange.
     * @example
     * // Create one RoutesChange
     * const RoutesChange = await prisma.routesChange.create({
     *   data: {
     *     // ... data to create a RoutesChange
     *   }
     * })
     * 
     */
    create<T extends RoutesChangeCreateArgs>(args: SelectSubset<T, RoutesChangeCreateArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutesChanges.
     * @param {RoutesChangeCreateManyArgs} args - Arguments to create many RoutesChanges.
     * @example
     * // Create many RoutesChanges
     * const routesChange = await prisma.routesChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutesChangeCreateManyArgs>(args?: SelectSubset<T, RoutesChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutesChanges and returns the data saved in the database.
     * @param {RoutesChangeCreateManyAndReturnArgs} args - Arguments to create many RoutesChanges.
     * @example
     * // Create many RoutesChanges
     * const routesChange = await prisma.routesChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutesChanges and only return the `id`
     * const routesChangeWithIdOnly = await prisma.routesChange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutesChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutesChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoutesChange.
     * @param {RoutesChangeDeleteArgs} args - Arguments to delete one RoutesChange.
     * @example
     * // Delete one RoutesChange
     * const RoutesChange = await prisma.routesChange.delete({
     *   where: {
     *     // ... filter to delete one RoutesChange
     *   }
     * })
     * 
     */
    delete<T extends RoutesChangeDeleteArgs>(args: SelectSubset<T, RoutesChangeDeleteArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutesChange.
     * @param {RoutesChangeUpdateArgs} args - Arguments to update one RoutesChange.
     * @example
     * // Update one RoutesChange
     * const routesChange = await prisma.routesChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutesChangeUpdateArgs>(args: SelectSubset<T, RoutesChangeUpdateArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutesChanges.
     * @param {RoutesChangeDeleteManyArgs} args - Arguments to filter RoutesChanges to delete.
     * @example
     * // Delete a few RoutesChanges
     * const { count } = await prisma.routesChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutesChangeDeleteManyArgs>(args?: SelectSubset<T, RoutesChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutesChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutesChanges
     * const routesChange = await prisma.routesChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutesChangeUpdateManyArgs>(args: SelectSubset<T, RoutesChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutesChanges and returns the data updated in the database.
     * @param {RoutesChangeUpdateManyAndReturnArgs} args - Arguments to update many RoutesChanges.
     * @example
     * // Update many RoutesChanges
     * const routesChange = await prisma.routesChange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoutesChanges and only return the `id`
     * const routesChangeWithIdOnly = await prisma.routesChange.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoutesChangeUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutesChangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoutesChange.
     * @param {RoutesChangeUpsertArgs} args - Arguments to update or create a RoutesChange.
     * @example
     * // Update or create a RoutesChange
     * const routesChange = await prisma.routesChange.upsert({
     *   create: {
     *     // ... data to create a RoutesChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutesChange we want to update
     *   }
     * })
     */
    upsert<T extends RoutesChangeUpsertArgs>(args: SelectSubset<T, RoutesChangeUpsertArgs<ExtArgs>>): Prisma__RoutesChangeClient<$Result.GetResult<Prisma.$RoutesChangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutesChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeCountArgs} args - Arguments to filter RoutesChanges to count.
     * @example
     * // Count the number of RoutesChanges
     * const count = await prisma.routesChange.count({
     *   where: {
     *     // ... the filter for the RoutesChanges we want to count
     *   }
     * })
    **/
    count<T extends RoutesChangeCountArgs>(
      args?: Subset<T, RoutesChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutesChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutesChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutesChangeAggregateArgs>(args: Subset<T, RoutesChangeAggregateArgs>): Prisma.PrismaPromise<GetRoutesChangeAggregateType<T>>

    /**
     * Group by RoutesChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesChangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutesChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutesChangeGroupByArgs['orderBy'] }
        : { orderBy?: RoutesChangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutesChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutesChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutesChange model
   */
  readonly fields: RoutesChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutesChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutesChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoutesChange model
   */
  interface RoutesChangeFieldRefs {
    readonly id: FieldRef<"RoutesChange", 'Int'>
    readonly wasRoute: FieldRef<"RoutesChange", 'String'>
    readonly toRoute: FieldRef<"RoutesChange", 'String'>
    readonly route_id: FieldRef<"RoutesChange", 'String'>
    readonly user_id: FieldRef<"RoutesChange", 'Int'>
    readonly createdAt: FieldRef<"RoutesChange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoutesChange findUnique
   */
  export type RoutesChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * Filter, which RoutesChange to fetch.
     */
    where: RoutesChangeWhereUniqueInput
  }

  /**
   * RoutesChange findUniqueOrThrow
   */
  export type RoutesChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * Filter, which RoutesChange to fetch.
     */
    where: RoutesChangeWhereUniqueInput
  }

  /**
   * RoutesChange findFirst
   */
  export type RoutesChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * Filter, which RoutesChange to fetch.
     */
    where?: RoutesChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutesChanges to fetch.
     */
    orderBy?: RoutesChangeOrderByWithRelationInput | RoutesChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutesChanges.
     */
    cursor?: RoutesChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutesChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutesChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutesChanges.
     */
    distinct?: RoutesChangeScalarFieldEnum | RoutesChangeScalarFieldEnum[]
  }

  /**
   * RoutesChange findFirstOrThrow
   */
  export type RoutesChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * Filter, which RoutesChange to fetch.
     */
    where?: RoutesChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutesChanges to fetch.
     */
    orderBy?: RoutesChangeOrderByWithRelationInput | RoutesChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutesChanges.
     */
    cursor?: RoutesChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutesChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutesChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutesChanges.
     */
    distinct?: RoutesChangeScalarFieldEnum | RoutesChangeScalarFieldEnum[]
  }

  /**
   * RoutesChange findMany
   */
  export type RoutesChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * Filter, which RoutesChanges to fetch.
     */
    where?: RoutesChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutesChanges to fetch.
     */
    orderBy?: RoutesChangeOrderByWithRelationInput | RoutesChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutesChanges.
     */
    cursor?: RoutesChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutesChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutesChanges.
     */
    skip?: number
    distinct?: RoutesChangeScalarFieldEnum | RoutesChangeScalarFieldEnum[]
  }

  /**
   * RoutesChange create
   */
  export type RoutesChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * The data needed to create a RoutesChange.
     */
    data: XOR<RoutesChangeCreateInput, RoutesChangeUncheckedCreateInput>
  }

  /**
   * RoutesChange createMany
   */
  export type RoutesChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutesChanges.
     */
    data: RoutesChangeCreateManyInput | RoutesChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutesChange createManyAndReturn
   */
  export type RoutesChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * The data used to create many RoutesChanges.
     */
    data: RoutesChangeCreateManyInput | RoutesChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutesChange update
   */
  export type RoutesChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * The data needed to update a RoutesChange.
     */
    data: XOR<RoutesChangeUpdateInput, RoutesChangeUncheckedUpdateInput>
    /**
     * Choose, which RoutesChange to update.
     */
    where: RoutesChangeWhereUniqueInput
  }

  /**
   * RoutesChange updateMany
   */
  export type RoutesChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutesChanges.
     */
    data: XOR<RoutesChangeUpdateManyMutationInput, RoutesChangeUncheckedUpdateManyInput>
    /**
     * Filter which RoutesChanges to update
     */
    where?: RoutesChangeWhereInput
    /**
     * Limit how many RoutesChanges to update.
     */
    limit?: number
  }

  /**
   * RoutesChange updateManyAndReturn
   */
  export type RoutesChangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * The data used to update RoutesChanges.
     */
    data: XOR<RoutesChangeUpdateManyMutationInput, RoutesChangeUncheckedUpdateManyInput>
    /**
     * Filter which RoutesChanges to update
     */
    where?: RoutesChangeWhereInput
    /**
     * Limit how many RoutesChanges to update.
     */
    limit?: number
  }

  /**
   * RoutesChange upsert
   */
  export type RoutesChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * The filter to search for the RoutesChange to update in case it exists.
     */
    where: RoutesChangeWhereUniqueInput
    /**
     * In case the RoutesChange found by the `where` argument doesn't exist, create a new RoutesChange with this data.
     */
    create: XOR<RoutesChangeCreateInput, RoutesChangeUncheckedCreateInput>
    /**
     * In case the RoutesChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutesChangeUpdateInput, RoutesChangeUncheckedUpdateInput>
  }

  /**
   * RoutesChange delete
   */
  export type RoutesChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
    /**
     * Filter which RoutesChange to delete.
     */
    where: RoutesChangeWhereUniqueInput
  }

  /**
   * RoutesChange deleteMany
   */
  export type RoutesChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutesChanges to delete
     */
    where?: RoutesChangeWhereInput
    /**
     * Limit how many RoutesChanges to delete.
     */
    limit?: number
  }

  /**
   * RoutesChange without action
   */
  export type RoutesChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesChange
     */
    select?: RoutesChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutesChange
     */
    omit?: RoutesChangeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoutesScalarFieldEnum: {
    id: 'id',
    VEICULO: 'VEICULO',
    FILDOC: 'FILDOC',
    DOC: 'DOC',
    SERIE: 'SERIE',
    LAT: 'LAT',
    LNG: 'LNG',
    ENDERECO: 'ENDERECO'
  };

  export type RoutesScalarFieldEnum = (typeof RoutesScalarFieldEnum)[keyof typeof RoutesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    filial: 'filial',
    latFilial: 'latFilial',
    lngFilial: 'lngFilial'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RoutesChangeScalarFieldEnum: {
    id: 'id',
    wasRoute: 'wasRoute',
    toRoute: 'toRoute',
    route_id: 'route_id',
    user_id: 'user_id',
    createdAt: 'createdAt'
  };

  export type RoutesChangeScalarFieldEnum = (typeof RoutesChangeScalarFieldEnum)[keyof typeof RoutesChangeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type RoutesWhereInput = {
    AND?: RoutesWhereInput | RoutesWhereInput[]
    OR?: RoutesWhereInput[]
    NOT?: RoutesWhereInput | RoutesWhereInput[]
    id?: IntFilter<"Routes"> | number
    VEICULO?: StringFilter<"Routes"> | string
    FILDOC?: StringFilter<"Routes"> | string
    DOC?: StringFilter<"Routes"> | string
    SERIE?: StringFilter<"Routes"> | string
    LAT?: FloatFilter<"Routes"> | number
    LNG?: FloatFilter<"Routes"> | number
    ENDERECO?: StringFilter<"Routes"> | string
  }

  export type RoutesOrderByWithRelationInput = {
    id?: SortOrder
    VEICULO?: SortOrder
    FILDOC?: SortOrder
    DOC?: SortOrder
    SERIE?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
    ENDERECO?: SortOrder
  }

  export type RoutesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutesWhereInput | RoutesWhereInput[]
    OR?: RoutesWhereInput[]
    NOT?: RoutesWhereInput | RoutesWhereInput[]
    VEICULO?: StringFilter<"Routes"> | string
    FILDOC?: StringFilter<"Routes"> | string
    DOC?: StringFilter<"Routes"> | string
    SERIE?: StringFilter<"Routes"> | string
    LAT?: FloatFilter<"Routes"> | number
    LNG?: FloatFilter<"Routes"> | number
    ENDERECO?: StringFilter<"Routes"> | string
  }, "id">

  export type RoutesOrderByWithAggregationInput = {
    id?: SortOrder
    VEICULO?: SortOrder
    FILDOC?: SortOrder
    DOC?: SortOrder
    SERIE?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
    ENDERECO?: SortOrder
    _count?: RoutesCountOrderByAggregateInput
    _avg?: RoutesAvgOrderByAggregateInput
    _max?: RoutesMaxOrderByAggregateInput
    _min?: RoutesMinOrderByAggregateInput
    _sum?: RoutesSumOrderByAggregateInput
  }

  export type RoutesScalarWhereWithAggregatesInput = {
    AND?: RoutesScalarWhereWithAggregatesInput | RoutesScalarWhereWithAggregatesInput[]
    OR?: RoutesScalarWhereWithAggregatesInput[]
    NOT?: RoutesScalarWhereWithAggregatesInput | RoutesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Routes"> | number
    VEICULO?: StringWithAggregatesFilter<"Routes"> | string
    FILDOC?: StringWithAggregatesFilter<"Routes"> | string
    DOC?: StringWithAggregatesFilter<"Routes"> | string
    SERIE?: StringWithAggregatesFilter<"Routes"> | string
    LAT?: FloatWithAggregatesFilter<"Routes"> | number
    LNG?: FloatWithAggregatesFilter<"Routes"> | number
    ENDERECO?: StringWithAggregatesFilter<"Routes"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    filial?: StringFilter<"Users"> | string
    latFilial?: FloatFilter<"Users"> | number
    lngFilial?: FloatFilter<"Users"> | number
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    filial?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    filial?: StringFilter<"Users"> | string
    latFilial?: FloatFilter<"Users"> | number
    lngFilial?: FloatFilter<"Users"> | number
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    filial?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    filial?: StringWithAggregatesFilter<"Users"> | string
    latFilial?: FloatWithAggregatesFilter<"Users"> | number
    lngFilial?: FloatWithAggregatesFilter<"Users"> | number
  }

  export type RoutesChangeWhereInput = {
    AND?: RoutesChangeWhereInput | RoutesChangeWhereInput[]
    OR?: RoutesChangeWhereInput[]
    NOT?: RoutesChangeWhereInput | RoutesChangeWhereInput[]
    id?: IntFilter<"RoutesChange"> | number
    wasRoute?: StringFilter<"RoutesChange"> | string
    toRoute?: StringFilter<"RoutesChange"> | string
    route_id?: StringFilter<"RoutesChange"> | string
    user_id?: IntFilter<"RoutesChange"> | number
    createdAt?: DateTimeFilter<"RoutesChange"> | Date | string
  }

  export type RoutesChangeOrderByWithRelationInput = {
    id?: SortOrder
    wasRoute?: SortOrder
    toRoute?: SortOrder
    route_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutesChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutesChangeWhereInput | RoutesChangeWhereInput[]
    OR?: RoutesChangeWhereInput[]
    NOT?: RoutesChangeWhereInput | RoutesChangeWhereInput[]
    wasRoute?: StringFilter<"RoutesChange"> | string
    toRoute?: StringFilter<"RoutesChange"> | string
    route_id?: StringFilter<"RoutesChange"> | string
    user_id?: IntFilter<"RoutesChange"> | number
    createdAt?: DateTimeFilter<"RoutesChange"> | Date | string
  }, "id">

  export type RoutesChangeOrderByWithAggregationInput = {
    id?: SortOrder
    wasRoute?: SortOrder
    toRoute?: SortOrder
    route_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    _count?: RoutesChangeCountOrderByAggregateInput
    _avg?: RoutesChangeAvgOrderByAggregateInput
    _max?: RoutesChangeMaxOrderByAggregateInput
    _min?: RoutesChangeMinOrderByAggregateInput
    _sum?: RoutesChangeSumOrderByAggregateInput
  }

  export type RoutesChangeScalarWhereWithAggregatesInput = {
    AND?: RoutesChangeScalarWhereWithAggregatesInput | RoutesChangeScalarWhereWithAggregatesInput[]
    OR?: RoutesChangeScalarWhereWithAggregatesInput[]
    NOT?: RoutesChangeScalarWhereWithAggregatesInput | RoutesChangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoutesChange"> | number
    wasRoute?: StringWithAggregatesFilter<"RoutesChange"> | string
    toRoute?: StringWithAggregatesFilter<"RoutesChange"> | string
    route_id?: StringWithAggregatesFilter<"RoutesChange"> | string
    user_id?: IntWithAggregatesFilter<"RoutesChange"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoutesChange"> | Date | string
  }

  export type RoutesCreateInput = {
    id: number
    VEICULO: string
    FILDOC: string
    DOC: string
    SERIE: string
    LAT: number
    LNG: number
    ENDERECO: string
  }

  export type RoutesUncheckedCreateInput = {
    id: number
    VEICULO: string
    FILDOC: string
    DOC: string
    SERIE: string
    LAT: number
    LNG: number
    ENDERECO: string
  }

  export type RoutesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    VEICULO?: StringFieldUpdateOperationsInput | string
    FILDOC?: StringFieldUpdateOperationsInput | string
    DOC?: StringFieldUpdateOperationsInput | string
    SERIE?: StringFieldUpdateOperationsInput | string
    LAT?: FloatFieldUpdateOperationsInput | number
    LNG?: FloatFieldUpdateOperationsInput | number
    ENDERECO?: StringFieldUpdateOperationsInput | string
  }

  export type RoutesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    VEICULO?: StringFieldUpdateOperationsInput | string
    FILDOC?: StringFieldUpdateOperationsInput | string
    DOC?: StringFieldUpdateOperationsInput | string
    SERIE?: StringFieldUpdateOperationsInput | string
    LAT?: FloatFieldUpdateOperationsInput | number
    LNG?: FloatFieldUpdateOperationsInput | number
    ENDERECO?: StringFieldUpdateOperationsInput | string
  }

  export type RoutesCreateManyInput = {
    id: number
    VEICULO: string
    FILDOC: string
    DOC: string
    SERIE: string
    LAT: number
    LNG: number
    ENDERECO: string
  }

  export type RoutesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    VEICULO?: StringFieldUpdateOperationsInput | string
    FILDOC?: StringFieldUpdateOperationsInput | string
    DOC?: StringFieldUpdateOperationsInput | string
    SERIE?: StringFieldUpdateOperationsInput | string
    LAT?: FloatFieldUpdateOperationsInput | number
    LNG?: FloatFieldUpdateOperationsInput | number
    ENDERECO?: StringFieldUpdateOperationsInput | string
  }

  export type RoutesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    VEICULO?: StringFieldUpdateOperationsInput | string
    FILDOC?: StringFieldUpdateOperationsInput | string
    DOC?: StringFieldUpdateOperationsInput | string
    SERIE?: StringFieldUpdateOperationsInput | string
    LAT?: FloatFieldUpdateOperationsInput | number
    LNG?: FloatFieldUpdateOperationsInput | number
    ENDERECO?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id: number
    name: string
    filial: string
    latFilial: number
    lngFilial: number
  }

  export type UsersUncheckedCreateInput = {
    id: number
    name: string
    filial: string
    latFilial: number
    lngFilial: number
  }

  export type UsersUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filial?: StringFieldUpdateOperationsInput | string
    latFilial?: FloatFieldUpdateOperationsInput | number
    lngFilial?: FloatFieldUpdateOperationsInput | number
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filial?: StringFieldUpdateOperationsInput | string
    latFilial?: FloatFieldUpdateOperationsInput | number
    lngFilial?: FloatFieldUpdateOperationsInput | number
  }

  export type UsersCreateManyInput = {
    id: number
    name: string
    filial: string
    latFilial: number
    lngFilial: number
  }

  export type UsersUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filial?: StringFieldUpdateOperationsInput | string
    latFilial?: FloatFieldUpdateOperationsInput | number
    lngFilial?: FloatFieldUpdateOperationsInput | number
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filial?: StringFieldUpdateOperationsInput | string
    latFilial?: FloatFieldUpdateOperationsInput | number
    lngFilial?: FloatFieldUpdateOperationsInput | number
  }

  export type RoutesChangeCreateInput = {
    wasRoute: string
    toRoute: string
    route_id: string
    user_id: number
    createdAt?: Date | string
  }

  export type RoutesChangeUncheckedCreateInput = {
    id?: number
    wasRoute: string
    toRoute: string
    route_id: string
    user_id: number
    createdAt?: Date | string
  }

  export type RoutesChangeUpdateInput = {
    wasRoute?: StringFieldUpdateOperationsInput | string
    toRoute?: StringFieldUpdateOperationsInput | string
    route_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesChangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wasRoute?: StringFieldUpdateOperationsInput | string
    toRoute?: StringFieldUpdateOperationsInput | string
    route_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesChangeCreateManyInput = {
    id?: number
    wasRoute: string
    toRoute: string
    route_id: string
    user_id: number
    createdAt?: Date | string
  }

  export type RoutesChangeUpdateManyMutationInput = {
    wasRoute?: StringFieldUpdateOperationsInput | string
    toRoute?: StringFieldUpdateOperationsInput | string
    route_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutesChangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wasRoute?: StringFieldUpdateOperationsInput | string
    toRoute?: StringFieldUpdateOperationsInput | string
    route_id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RoutesCountOrderByAggregateInput = {
    id?: SortOrder
    VEICULO?: SortOrder
    FILDOC?: SortOrder
    DOC?: SortOrder
    SERIE?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
    ENDERECO?: SortOrder
  }

  export type RoutesAvgOrderByAggregateInput = {
    id?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
  }

  export type RoutesMaxOrderByAggregateInput = {
    id?: SortOrder
    VEICULO?: SortOrder
    FILDOC?: SortOrder
    DOC?: SortOrder
    SERIE?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
    ENDERECO?: SortOrder
  }

  export type RoutesMinOrderByAggregateInput = {
    id?: SortOrder
    VEICULO?: SortOrder
    FILDOC?: SortOrder
    DOC?: SortOrder
    SERIE?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
    ENDERECO?: SortOrder
  }

  export type RoutesSumOrderByAggregateInput = {
    id?: SortOrder
    LAT?: SortOrder
    LNG?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filial?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filial?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filial?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    latFilial?: SortOrder
    lngFilial?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoutesChangeCountOrderByAggregateInput = {
    id?: SortOrder
    wasRoute?: SortOrder
    toRoute?: SortOrder
    route_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutesChangeAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type RoutesChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    wasRoute?: SortOrder
    toRoute?: SortOrder
    route_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutesChangeMinOrderByAggregateInput = {
    id?: SortOrder
    wasRoute?: SortOrder
    toRoute?: SortOrder
    route_id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutesChangeSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}