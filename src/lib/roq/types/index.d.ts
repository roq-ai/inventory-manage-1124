/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model inventory
 *
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>;
/**
 * Model order
 *
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>;
/**
 * Model order_item
 *
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model product
 *
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventories
 * const inventories = await prisma.inventory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.inventoryDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   */
  get order(): Prisma.orderDelegate<ExtArgs>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Order_items
   * const order_items = await prisma.order_item.findMany()
   * ```
   */
  get order_item(): Prisma.order_itemDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    inventory: 'inventory';
    order: 'order';
    order_item: 'order_item';
    organization: 'organization';
    product: 'product';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'inventory' | 'order' | 'order_item' | 'organization' | 'product' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>;
        fields: Prisma.inventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[];
          };
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      order: {
        payload: Prisma.$orderPayload<ExtArgs>;
        fields: Prisma.orderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[];
          };
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder>;
          };
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderGroupByOutputType>[];
          };
          count: {
            args: Prisma.orderCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderCountAggregateOutputType> | number;
          };
        };
      };
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>;
        fields: Prisma.order_itemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>;
          };
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>;
          };
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[];
          };
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>;
          };
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>;
          };
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>;
          };
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>;
          };
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder_item>;
          };
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Order_itemGroupByOutputType>[];
          };
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>;
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      product: {
        payload: Prisma.$productPayload<ExtArgs>;
        fields: Prisma.productFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>[];
          };
          create: {
            args: Prisma.productCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$productPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.productCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_item: number;
  };

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | OrderCountOutputTypeCountOrder_itemArgs;
  };

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: order_itemWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    inventory: number;
    order: number;
    product: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | OrganizationCountOutputTypeCountInventoryArgs;
    order?: boolean | OrganizationCountOutputTypeCountOrderArgs;
    product?: boolean | OrganizationCountOutputTypeCountProductArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountOrderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: orderWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProductArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: productWhereInput;
  };

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventory: number;
    order_item: number;
  };

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | ProductCountOutputTypeCountInventoryArgs;
    order_item?: boolean | ProductCountOutputTypeCountOrder_itemArgs;
  };

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: inventoryWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrder_itemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: order_itemWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    order: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | UserCountOutputTypeCountOrderArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type InventorySumAggregateOutputType = {
    quantity: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    quantity: number | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    quantity: number | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    id: number;
    product_id: number;
    quantity: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    quantity?: true;
  };

  export type InventorySumAggregateInputType = {
    quantity?: true;
  };

  export type InventoryMinAggregateInputType = {
    id?: true;
    product_id?: true;
    quantity?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryMaxAggregateInputType = {
    id?: true;
    product_id?: true;
    quantity?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InventoryCountAggregateInputType = {
    id?: true;
    product_id?: true;
    quantity?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: inventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    id: string;
    product_id: string;
    quantity: number;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        product_id?: boolean;
        quantity?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        product?: boolean | productDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inventory']
    >;

  export type inventorySelectScalar = {
    id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    product?: boolean | productDefaultArgs<ExtArgs>;
  };

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'inventory';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      product: Prisma.$productPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        product_id: string;
        quantity: number;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<
    Prisma.$inventoryPayload,
    S
  >;

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    inventoryFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InventoryCountAggregateInputType | true;
  };

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory']; meta: { name: 'inventory' } };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends inventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends inventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__inventoryClient<
      $Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends inventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     **/
    create<T extends inventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Inventories.
     *     @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends inventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     **/
    delete<T extends inventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends inventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends inventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends inventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     **/
    upsert<T extends inventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>,
    ): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
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
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory model
     */
    readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    product<T extends productDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, productDefaultArgs<ExtArgs>>,
    ): Prisma__productClient<
      $Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<'inventory', 'String'>;
    readonly product_id: FieldRef<'inventory', 'String'>;
    readonly quantity: FieldRef<'inventory', 'Int'>;
    readonly organization_id: FieldRef<'inventory', 'String'>;
    readonly created_at: FieldRef<'inventory', 'DateTime'>;
    readonly updated_at: FieldRef<'inventory', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventories.
     */
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
  };

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>;
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput;
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>;
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>;
  };

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput;
  };

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput;
  };

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
  };

  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  export type OrderAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type OrderSumAggregateOutputType = {
    total_price: number | null;
  };

  export type OrderMinAggregateOutputType = {
    id: string | null;
    order_date: Date | null;
    total_price: number | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrderMaxAggregateOutputType = {
    id: string | null;
    order_date: Date | null;
    total_price: number | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrderCountAggregateOutputType = {
    id: number;
    order_date: number;
    total_price: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrderAvgAggregateInputType = {
    total_price?: true;
  };

  export type OrderSumAggregateInputType = {
    total_price?: true;
  };

  export type OrderMinAggregateInputType = {
    id?: true;
    order_date?: true;
    total_price?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrderMaxAggregateInputType = {
    id?: true;
    order_date?: true;
    total_price?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrderCountAggregateInputType = {
    id?: true;
    order_date?: true;
    total_price?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned orders
     **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderMaxAggregateInputType;
  };

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>;
  };

  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput;
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[];
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
    having?: orderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
  };

  export type OrderGroupByOutputType = {
    id: string;
    order_date: Date;
    total_price: number;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrderGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
          : GetScalarType<T[P], OrderGroupByOutputType[P]>;
      }
    >
  >;

  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      order_date?: boolean;
      total_price?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      order_item?: boolean | order$order_itemArgs<ExtArgs>;
      _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['order']
  >;

  export type orderSelectScalar = {
    id?: boolean;
    order_date?: boolean;
    total_price?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    order_item?: boolean | order$order_itemArgs<ExtArgs>;
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'order';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      order_item: Prisma.$order_itemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        order_date: Date;
        total_price: number;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['order']
    >;
    composites: {};
  };

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<
    Prisma.$orderPayload,
    S
  >;

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    orderFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrderCountAggregateInputType | true;
  };

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order']; meta: { name: 'order' } };
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     **/
    create<T extends orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, orderCreateArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Orders.
     *     @param {orderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     **/
    delete<T extends orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, orderDeleteArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     **/
    upsert<T extends orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpsertArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(
      args: Subset<T, OrderAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the order model
     */
    readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    order_item<T extends order$order_itemArgs<ExtArgs> = {}>(
      args?: Subset<T, order$order_itemArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<'order', 'String'>;
    readonly order_date: FieldRef<'order', 'DateTime'>;
    readonly total_price: FieldRef<'order', 'Int'>;
    readonly user_id: FieldRef<'order', 'String'>;
    readonly organization_id: FieldRef<'order', 'String'>;
    readonly created_at: FieldRef<'order', 'DateTime'>;
    readonly updated_at: FieldRef<'order', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>;
  };

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>;
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>;
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput;
  };

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput;
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>;
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>;
  };

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput;
  };

  /**
   * order.order_item
   */
  export type order$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    where?: order_itemWhereInput;
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[];
    cursor?: order_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[];
  };

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
  };

  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null;
    _avg: Order_itemAvgAggregateOutputType | null;
    _sum: Order_itemSumAggregateOutputType | null;
    _min: Order_itemMinAggregateOutputType | null;
    _max: Order_itemMaxAggregateOutputType | null;
  };

  export type Order_itemAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
  };

  export type Order_itemSumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
  };

  export type Order_itemMinAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    price: number | null;
    product_id: string | null;
    order_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Order_itemMaxAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    price: number | null;
    product_id: string | null;
    order_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Order_itemCountAggregateOutputType = {
    id: number;
    quantity: number;
    price: number;
    product_id: number;
    order_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Order_itemAvgAggregateInputType = {
    quantity?: true;
    price?: true;
  };

  export type Order_itemSumAggregateInputType = {
    quantity?: true;
    price?: true;
  };

  export type Order_itemMinAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
    product_id?: true;
    order_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Order_itemMaxAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
    product_id?: true;
    order_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Order_itemCountAggregateInputType = {
    id?: true;
    quantity?: true;
    price?: true;
    product_id?: true;
    order_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned order_items
     **/
    _count?: true | Order_itemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Order_itemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Order_itemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Order_itemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Order_itemMaxAggregateInputType;
  };

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>;
  };

  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput;
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[];
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum;
    having?: order_itemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_itemCountAggregateInputType | true;
    _avg?: Order_itemAvgAggregateInputType;
    _sum?: Order_itemSumAggregateInputType;
    _min?: Order_itemMinAggregateInputType;
    _max?: Order_itemMaxAggregateInputType;
  };

  export type Order_itemGroupByOutputType = {
    id: string;
    quantity: number;
    price: number;
    product_id: string;
    order_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Order_itemCountAggregateOutputType | null;
    _avg: Order_itemAvgAggregateOutputType | null;
    _sum: Order_itemSumAggregateOutputType | null;
    _min: Order_itemMinAggregateOutputType | null;
    _max: Order_itemMaxAggregateOutputType | null;
  };

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Order_itemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
          : GetScalarType<T[P], Order_itemGroupByOutputType[P]>;
      }
    >
  >;

  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        quantity?: boolean;
        price?: boolean;
        product_id?: boolean;
        order_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        order?: boolean | orderDefaultArgs<ExtArgs>;
        product?: boolean | productDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['order_item']
    >;

  export type order_itemSelectScalar = {
    id?: boolean;
    quantity?: boolean;
    price?: boolean;
    product_id?: boolean;
    order_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>;
    product?: boolean | productDefaultArgs<ExtArgs>;
  };

  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'order_item';
    objects: {
      order: Prisma.$orderPayload<ExtArgs>;
      product: Prisma.$productPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        quantity: number;
        price: number;
        product_id: string;
        order_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['order_item']
    >;
    composites: {};
  };

  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<
    Prisma.$order_itemPayload,
    S
  >;

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    order_itemFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Order_itemCountAggregateInputType | true;
  };

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item']; meta: { name: 'order_item' } };
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends order_itemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>,
    ): Prisma__order_itemClient<
      $Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Order_item that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__order_itemClient<
      $Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends order_itemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>,
    ): Prisma__order_itemClient<
      $Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__order_itemClient<
      $Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     *
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const order_itemWithIdOnly = await prisma.order_item.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends order_itemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     *
     **/
    create<T extends order_itemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>,
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Order_items.
     *     @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     *     @example
     *     // Create many Order_items
     *     const order_item = await prisma.order_item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends order_itemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     *
     **/
    delete<T extends order_itemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>,
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends order_itemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>,
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends order_itemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends order_itemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
     **/
    upsert<T extends order_itemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>,
    ): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
     **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemAggregateArgs>(
      args: Subset<T, Order_itemAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>;

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
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
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the order_item model
     */
    readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends orderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, orderDefaultArgs<ExtArgs>>,
    ): Prisma__orderClient<
      $Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    product<T extends productDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, productDefaultArgs<ExtArgs>>,
    ): Prisma__productClient<
      $Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the order_item model
   */
  interface order_itemFieldRefs {
    readonly id: FieldRef<'order_item', 'String'>;
    readonly quantity: FieldRef<'order_item', 'Int'>;
    readonly price: FieldRef<'order_item', 'Int'>;
    readonly product_id: FieldRef<'order_item', 'String'>;
    readonly order_id: FieldRef<'order_item', 'String'>;
    readonly created_at: FieldRef<'order_item', 'DateTime'>;
    readonly updated_at: FieldRef<'order_item', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput;
  };

  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput;
  };

  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[];
  };

  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[];
  };

  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` order_items.
     */
    skip?: number;
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[];
  };

  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>;
  };

  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>;
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput;
  };

  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>;
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput;
  };

  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput;
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>;
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>;
  };

  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput;
  };

  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput;
  };

  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tenant_id?: boolean;
        inventory?: boolean | organization$inventoryArgs<ExtArgs>;
        order?: boolean | organization$orderArgs<ExtArgs>;
        product?: boolean | organization$productArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | organization$inventoryArgs<ExtArgs>;
    order?: boolean | organization$orderArgs<ExtArgs>;
    product?: boolean | organization$productArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      order: Prisma.$orderPayload<ExtArgs>[];
      product: Prisma.$productPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inventory<T extends organization$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends organization$orderArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$orderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'> | Null>;

    product<T extends organization$productArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$productArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.inventory
   */
  export type organization$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * organization.order
   */
  export type organization$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    where?: orderWhereInput;
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    cursor?: orderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * organization.product
   */
  export type organization$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    where?: productWhereInput;
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    cursor?: productWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    quantity: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductSumAggregateInputType = {
    price?: true;
    quantity?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput;
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: productScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    quantity: number;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
          : GetScalarType<T[P], ProductGroupByOutputType[P]>;
      }
    >
  >;

  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      quantity?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      inventory?: boolean | product$inventoryArgs<ExtArgs>;
      order_item?: boolean | product$order_itemArgs<ExtArgs>;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type productSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | product$inventoryArgs<ExtArgs>;
    order_item?: boolean | product$order_itemArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'product';
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[];
      order_item: Prisma.$order_itemPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        price: number;
        quantity: number;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['product']
    >;
    composites: {};
  };

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<
    Prisma.$productPayload,
    S
  >;

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    productFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product']; meta: { name: 'product' } };
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends productFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__productClient<
      $Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends productFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends productFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends productFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     **/
    create<T extends productCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productCreateArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Products.
     *     @param {productCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends productCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     **/
    delete<T extends productDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productDeleteArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends productUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends productDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends productUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     **/
    upsert<T extends productUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productUpsertArgs<ExtArgs>>,
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the product model
     */
    readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    inventory<T extends product$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, product$inventoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    order_item<T extends product$order_itemArgs<ExtArgs> = {}>(
      args?: Subset<T, product$order_itemArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<'product', 'String'>;
    readonly name: FieldRef<'product', 'String'>;
    readonly description: FieldRef<'product', 'String'>;
    readonly price: FieldRef<'product', 'Int'>;
    readonly quantity: FieldRef<'product', 'Int'>;
    readonly organization_id: FieldRef<'product', 'String'>;
    readonly created_at: FieldRef<'product', 'DateTime'>;
    readonly updated_at: FieldRef<'product', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>;
  };

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>;
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>;
    /**
     * Filter which products to update
     */
    where?: productWhereInput;
  };

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput;
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>;
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>;
  };

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput;
  };

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput;
  };

  /**
   * product.inventory
   */
  export type product$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inventoryInclude<ExtArgs> | null;
    where?: inventoryWhereInput;
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[];
    cursor?: inventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * product.order_item
   */
  export type product$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_itemInclude<ExtArgs> | null;
    where?: order_itemWhereInput;
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[];
    cursor?: order_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[];
  };

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      order?: boolean | user$orderArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | user$orderArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      order: Prisma.$orderPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends user$orderArgs<ExtArgs> = {}>(
      args?: Subset<T, user$orderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.order
   */
  export type user$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    where?: orderWhereInput;
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    cursor?: orderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const InventoryScalarFieldEnum: {
    id: 'id';
    product_id: 'product_id';
    quantity: 'quantity';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const OrderScalarFieldEnum: {
    id: 'id';
    order_date: 'order_date';
    total_price: 'total_price';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

  export const Order_itemScalarFieldEnum: {
    id: 'id';
    quantity: 'quantity';
    price: 'price';
    product_id: 'product_id';
    order_id: 'order_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const ProductScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price: 'price';
    quantity: 'quantity';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[];
    OR?: inventoryWhereInput[];
    NOT?: inventoryWhereInput | inventoryWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    product_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    organization_id?: UuidFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    product?: XOR<ProductRelationFilter, productWhereInput>;
  };

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    product?: productOrderByWithRelationInput;
  };

  export type inventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: inventoryWhereInput | inventoryWhereInput[];
      OR?: inventoryWhereInput[];
      NOT?: inventoryWhereInput | inventoryWhereInput[];
      product_id?: UuidFilter<'inventory'> | string;
      quantity?: IntFilter<'inventory'> | number;
      organization_id?: UuidFilter<'inventory'> | string;
      created_at?: DateTimeFilter<'inventory'> | Date | string;
      updated_at?: DateTimeFilter<'inventory'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      product?: XOR<ProductRelationFilter, productWhereInput>;
    },
    'id'
  >;

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: inventoryCountOrderByAggregateInput;
    _avg?: inventoryAvgOrderByAggregateInput;
    _max?: inventoryMaxOrderByAggregateInput;
    _min?: inventoryMinOrderByAggregateInput;
    _sum?: inventorySumOrderByAggregateInput;
  };

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    OR?: inventoryScalarWhereWithAggregatesInput[];
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'inventory'> | string;
    product_id?: UuidWithAggregatesFilter<'inventory'> | string;
    quantity?: IntWithAggregatesFilter<'inventory'> | number;
    organization_id?: UuidWithAggregatesFilter<'inventory'> | string;
    created_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'inventory'> | Date | string;
  };

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[];
    OR?: orderWhereInput[];
    NOT?: orderWhereInput | orderWhereInput[];
    id?: UuidFilter<'order'> | string;
    order_date?: DateTimeFilter<'order'> | Date | string;
    total_price?: IntFilter<'order'> | number;
    user_id?: UuidFilter<'order'> | string;
    organization_id?: UuidFilter<'order'> | string;
    created_at?: DateTimeFilter<'order'> | Date | string;
    updated_at?: DateTimeFilter<'order'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    order_item?: Order_itemListRelationFilter;
  };

  export type orderOrderByWithRelationInput = {
    id?: SortOrder;
    order_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    order_item?: order_itemOrderByRelationAggregateInput;
  };

  export type orderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: orderWhereInput | orderWhereInput[];
      OR?: orderWhereInput[];
      NOT?: orderWhereInput | orderWhereInput[];
      order_date?: DateTimeFilter<'order'> | Date | string;
      total_price?: IntFilter<'order'> | number;
      user_id?: UuidFilter<'order'> | string;
      organization_id?: UuidFilter<'order'> | string;
      created_at?: DateTimeFilter<'order'> | Date | string;
      updated_at?: DateTimeFilter<'order'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      order_item?: Order_itemListRelationFilter;
    },
    'id'
  >;

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder;
    order_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: orderCountOrderByAggregateInput;
    _avg?: orderAvgOrderByAggregateInput;
    _max?: orderMaxOrderByAggregateInput;
    _min?: orderMinOrderByAggregateInput;
    _sum?: orderSumOrderByAggregateInput;
  };

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[];
    OR?: orderScalarWhereWithAggregatesInput[];
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'order'> | string;
    order_date?: DateTimeWithAggregatesFilter<'order'> | Date | string;
    total_price?: IntWithAggregatesFilter<'order'> | number;
    user_id?: UuidWithAggregatesFilter<'order'> | string;
    organization_id?: UuidWithAggregatesFilter<'order'> | string;
    created_at?: DateTimeWithAggregatesFilter<'order'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'order'> | Date | string;
  };

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[];
    OR?: order_itemWhereInput[];
    NOT?: order_itemWhereInput | order_itemWhereInput[];
    id?: UuidFilter<'order_item'> | string;
    quantity?: IntFilter<'order_item'> | number;
    price?: IntFilter<'order_item'> | number;
    product_id?: UuidFilter<'order_item'> | string;
    order_id?: UuidFilter<'order_item'> | string;
    created_at?: DateTimeFilter<'order_item'> | Date | string;
    updated_at?: DateTimeFilter<'order_item'> | Date | string;
    order?: XOR<OrderRelationFilter, orderWhereInput>;
    product?: XOR<ProductRelationFilter, productWhereInput>;
  };

  export type order_itemOrderByWithRelationInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    product_id?: SortOrder;
    order_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    order?: orderOrderByWithRelationInput;
    product?: productOrderByWithRelationInput;
  };

  export type order_itemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: order_itemWhereInput | order_itemWhereInput[];
      OR?: order_itemWhereInput[];
      NOT?: order_itemWhereInput | order_itemWhereInput[];
      quantity?: IntFilter<'order_item'> | number;
      price?: IntFilter<'order_item'> | number;
      product_id?: UuidFilter<'order_item'> | string;
      order_id?: UuidFilter<'order_item'> | string;
      created_at?: DateTimeFilter<'order_item'> | Date | string;
      updated_at?: DateTimeFilter<'order_item'> | Date | string;
      order?: XOR<OrderRelationFilter, orderWhereInput>;
      product?: XOR<ProductRelationFilter, productWhereInput>;
    },
    'id'
  >;

  export type order_itemOrderByWithAggregationInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    product_id?: SortOrder;
    order_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: order_itemCountOrderByAggregateInput;
    _avg?: order_itemAvgOrderByAggregateInput;
    _max?: order_itemMaxOrderByAggregateInput;
    _min?: order_itemMinOrderByAggregateInput;
    _sum?: order_itemSumOrderByAggregateInput;
  };

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[];
    OR?: order_itemScalarWhereWithAggregatesInput[];
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'order_item'> | string;
    quantity?: IntWithAggregatesFilter<'order_item'> | number;
    price?: IntWithAggregatesFilter<'order_item'> | number;
    product_id?: UuidWithAggregatesFilter<'order_item'> | string;
    order_id?: UuidWithAggregatesFilter<'order_item'> | string;
    created_at?: DateTimeWithAggregatesFilter<'order_item'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'order_item'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    tenant_id?: StringFilter<'organization'> | string;
    inventory?: InventoryListRelationFilter;
    order?: OrderListRelationFilter;
    product?: ProductListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    inventory?: inventoryOrderByRelationAggregateInput;
    order?: orderOrderByRelationAggregateInput;
    product?: productOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      tenant_id?: StringFilter<'organization'> | string;
      inventory?: InventoryListRelationFilter;
      order?: OrderListRelationFilter;
      product?: ProductListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[];
    OR?: productWhereInput[];
    NOT?: productWhereInput | productWhereInput[];
    id?: UuidFilter<'product'> | string;
    name?: StringFilter<'product'> | string;
    description?: StringNullableFilter<'product'> | string | null;
    price?: IntFilter<'product'> | number;
    quantity?: IntFilter<'product'> | number;
    organization_id?: UuidFilter<'product'> | string;
    created_at?: DateTimeFilter<'product'> | Date | string;
    updated_at?: DateTimeFilter<'product'> | Date | string;
    inventory?: InventoryListRelationFilter;
    order_item?: Order_itemListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
  };

  export type productOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    inventory?: inventoryOrderByRelationAggregateInput;
    order_item?: order_itemOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
  };

  export type productWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: productWhereInput | productWhereInput[];
      OR?: productWhereInput[];
      NOT?: productWhereInput | productWhereInput[];
      name?: StringFilter<'product'> | string;
      description?: StringNullableFilter<'product'> | string | null;
      price?: IntFilter<'product'> | number;
      quantity?: IntFilter<'product'> | number;
      organization_id?: UuidFilter<'product'> | string;
      created_at?: DateTimeFilter<'product'> | Date | string;
      updated_at?: DateTimeFilter<'product'> | Date | string;
      inventory?: InventoryListRelationFilter;
      order_item?: Order_itemListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    },
    'id'
  >;

  export type productOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: productCountOrderByAggregateInput;
    _avg?: productAvgOrderByAggregateInput;
    _max?: productMaxOrderByAggregateInput;
    _min?: productMinOrderByAggregateInput;
    _sum?: productSumOrderByAggregateInput;
  };

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[];
    OR?: productScalarWhereWithAggregatesInput[];
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'product'> | string;
    name?: StringWithAggregatesFilter<'product'> | string;
    description?: StringNullableWithAggregatesFilter<'product'> | string | null;
    price?: IntWithAggregatesFilter<'product'> | number;
    quantity?: IntWithAggregatesFilter<'product'> | number;
    organization_id?: UuidWithAggregatesFilter<'product'> | string;
    created_at?: DateTimeWithAggregatesFilter<'product'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'product'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    order?: OrderListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    order?: orderOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      order?: OrderListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type inventoryCreateInput = {
    id?: string;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInventoryInput;
    product: productCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateInput = {
    id?: string;
    product_id: string;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInventoryNestedInput;
    product?: productUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyInput = {
    id?: string;
    product_id: string;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderCreateInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutOrderInput;
    user: userCreateNestedOneWithoutOrderInput;
    order_item?: order_itemCreateNestedManyWithoutOrderInput;
  };

  export type orderUncheckedCreateInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    order_item?: order_itemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutOrderNestedInput;
    user?: userUpdateOneRequiredWithoutOrderNestedInput;
    order_item?: order_itemUpdateManyWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order_item?: order_itemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type orderCreateManyInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemCreateInput = {
    id?: string;
    quantity: number;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    order: orderCreateNestedOneWithoutOrder_itemInput;
    product: productCreateNestedOneWithoutOrder_itemInput;
  };

  export type order_itemUncheckedCreateInput = {
    id?: string;
    quantity: number;
    price: number;
    product_id: string;
    order_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type order_itemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: orderUpdateOneRequiredWithoutOrder_itemNestedInput;
    product?: productUpdateOneRequiredWithoutOrder_itemNestedInput;
  };

  export type order_itemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    product_id?: StringFieldUpdateOperationsInput | string;
    order_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemCreateManyInput = {
    id?: string;
    quantity: number;
    price: number;
    product_id: string;
    order_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type order_itemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    product_id?: StringFieldUpdateOperationsInput | string;
    order_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    order?: orderCreateNestedManyWithoutOrganizationInput;
    product?: productCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    order?: orderUncheckedCreateNestedManyWithoutOrganizationInput;
    product?: productUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    order?: orderUpdateManyWithoutOrganizationNestedInput;
    product?: productUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    order?: orderUncheckedUpdateManyWithoutOrganizationNestedInput;
    product?: productUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type productCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutProductInput;
    order_item?: order_itemCreateNestedManyWithoutProductInput;
    organization: organizationCreateNestedOneWithoutProductInput;
  };

  export type productUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutProductInput;
    order_item?: order_itemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutProductNestedInput;
    order_item?: order_itemUpdateManyWithoutProductNestedInput;
    organization?: organizationUpdateOneRequiredWithoutProductNestedInput;
  };

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutProductNestedInput;
    order_item?: order_itemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type productCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    order?: orderCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    order?: orderUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: orderUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: orderUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type ProductRelationFilter = {
    is?: productWhereInput;
    isNot?: productWhereInput;
  };

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    product_id?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type inventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput;
    some?: order_itemWhereInput;
    none?: order_itemWhereInput;
  };

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder;
    order_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type orderAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder;
    order_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder;
    order_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type orderSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type OrderRelationFilter = {
    is?: orderWhereInput;
    isNot?: orderWhereInput;
  };

  export type order_itemCountOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    product_id?: SortOrder;
    order_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type order_itemAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    price?: SortOrder;
  };

  export type order_itemMaxOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    product_id?: SortOrder;
    order_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type order_itemMinOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    product_id?: SortOrder;
    order_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type order_itemSumOrderByAggregateInput = {
    quantity?: SortOrder;
    price?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput;
    some?: inventoryWhereInput;
    none?: inventoryWhereInput;
  };

  export type OrderListRelationFilter = {
    every?: orderWhereInput;
    some?: orderWhereInput;
    none?: orderWhereInput;
  };

  export type ProductListRelationFilter = {
    every?: productWhereInput;
    some?: productWhereInput;
    none?: productWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type productCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productAvgOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    quantity?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type productSumOrderByAggregateInput = {
    price?: SortOrder;
    quantity?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutInventoryInput = {
    create?: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutInventoryInput;
    connect?: organizationWhereUniqueInput;
  };

  export type productCreateNestedOneWithoutInventoryInput = {
    create?: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: productCreateOrConnectWithoutInventoryInput;
    connect?: productWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type organizationUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutInventoryInput;
    upsert?: organizationUpsertWithoutInventoryInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutInventoryInput, organizationUpdateWithoutInventoryInput>,
      organizationUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type productUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: productCreateOrConnectWithoutInventoryInput;
    upsert?: productUpsertWithoutInventoryInput;
    connect?: productWhereUniqueInput;
    update?: XOR<
      XOR<productUpdateToOneWithWhereWithoutInventoryInput, productUpdateWithoutInventoryInput>,
      productUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type organizationCreateNestedOneWithoutOrderInput = {
    create?: XOR<organizationCreateWithoutOrderInput, organizationUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutOrderInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutOrderInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrderInput;
    connect?: userWhereUniqueInput;
  };

  export type order_itemCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
      | order_itemCreateWithoutOrderInput[]
      | order_itemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[];
    createMany?: order_itemCreateManyOrderInputEnvelope;
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
  };

  export type order_itemUncheckedCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
      | order_itemCreateWithoutOrderInput[]
      | order_itemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[];
    createMany?: order_itemCreateManyOrderInputEnvelope;
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
  };

  export type organizationUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<organizationCreateWithoutOrderInput, organizationUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutOrderInput;
    upsert?: organizationUpsertWithoutOrderInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutOrderInput, organizationUpdateWithoutOrderInput>,
      organizationUncheckedUpdateWithoutOrderInput
    >;
  };

  export type userUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrderInput;
    upsert?: userUpsertWithoutOrderInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrderInput, userUpdateWithoutOrderInput>,
      userUncheckedUpdateWithoutOrderInput
    >;
  };

  export type order_itemUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
      | order_itemCreateWithoutOrderInput[]
      | order_itemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[];
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: order_itemCreateManyOrderInputEnvelope;
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[];
  };

  export type order_itemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
      | order_itemCreateWithoutOrderInput[]
      | order_itemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[];
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: order_itemCreateManyOrderInputEnvelope;
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[];
  };

  export type orderCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>;
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemInput;
    connect?: orderWhereUniqueInput;
  };

  export type productCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>;
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemInput;
    connect?: productWhereUniqueInput;
  };

  export type orderUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>;
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemInput;
    upsert?: orderUpsertWithoutOrder_itemInput;
    connect?: orderWhereUniqueInput;
    update?: XOR<
      XOR<orderUpdateToOneWithWhereWithoutOrder_itemInput, orderUpdateWithoutOrder_itemInput>,
      orderUncheckedUpdateWithoutOrder_itemInput
    >;
  };

  export type productUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>;
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemInput;
    upsert?: productUpsertWithoutOrder_itemInput;
    connect?: productWhereUniqueInput;
    update?: XOR<
      XOR<productUpdateToOneWithWhereWithoutOrder_itemInput, productUpdateWithoutOrder_itemInput>,
      productUncheckedUpdateWithoutOrder_itemInput
    >;
  };

  export type inventoryCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type orderCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<orderCreateWithoutOrganizationInput, orderUncheckedCreateWithoutOrganizationInput>
      | orderCreateWithoutOrganizationInput[]
      | orderUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: orderCreateOrConnectWithoutOrganizationInput | orderCreateOrConnectWithoutOrganizationInput[];
    createMany?: orderCreateManyOrganizationInputEnvelope;
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
  };

  export type productCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<productCreateWithoutOrganizationInput, productUncheckedCreateWithoutOrganizationInput>
      | productCreateWithoutOrganizationInput[]
      | productUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: productCreateOrConnectWithoutOrganizationInput | productCreateOrConnectWithoutOrganizationInput[];
    createMany?: productCreateManyOrganizationInputEnvelope;
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
  };

  export type inventoryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type orderUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<orderCreateWithoutOrganizationInput, orderUncheckedCreateWithoutOrganizationInput>
      | orderCreateWithoutOrganizationInput[]
      | orderUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: orderCreateOrConnectWithoutOrganizationInput | orderCreateOrConnectWithoutOrganizationInput[];
    createMany?: orderCreateManyOrganizationInputEnvelope;
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
  };

  export type productUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<productCreateWithoutOrganizationInput, productUncheckedCreateWithoutOrganizationInput>
      | productCreateWithoutOrganizationInput[]
      | productUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: productCreateOrConnectWithoutOrganizationInput | productCreateOrConnectWithoutOrganizationInput[];
    createMany?: productCreateManyOrganizationInputEnvelope;
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type inventoryUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?:
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | inventoryUpdateManyWithWhereWithoutOrganizationInput
      | inventoryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type orderUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<orderCreateWithoutOrganizationInput, orderUncheckedCreateWithoutOrganizationInput>
      | orderCreateWithoutOrganizationInput[]
      | orderUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: orderCreateOrConnectWithoutOrganizationInput | orderCreateOrConnectWithoutOrganizationInput[];
    upsert?: orderUpsertWithWhereUniqueWithoutOrganizationInput | orderUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: orderCreateManyOrganizationInputEnvelope;
    set?: orderWhereUniqueInput | orderWhereUniqueInput[];
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[];
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    update?: orderUpdateWithWhereUniqueWithoutOrganizationInput | orderUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: orderUpdateManyWithWhereWithoutOrganizationInput | orderUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[];
  };

  export type productUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<productCreateWithoutOrganizationInput, productUncheckedCreateWithoutOrganizationInput>
      | productCreateWithoutOrganizationInput[]
      | productUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: productCreateOrConnectWithoutOrganizationInput | productCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | productUpsertWithWhereUniqueWithoutOrganizationInput
      | productUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: productCreateManyOrganizationInputEnvelope;
    set?: productWhereUniqueInput | productWhereUniqueInput[];
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[];
    delete?: productWhereUniqueInput | productWhereUniqueInput[];
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
    update?:
      | productUpdateWithWhereUniqueWithoutOrganizationInput
      | productUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | productUpdateManyWithWhereWithoutOrganizationInput
      | productUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: productScalarWhereInput | productScalarWhereInput[];
  };

  export type inventoryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>
      | inventoryCreateWithoutOrganizationInput[]
      | inventoryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | inventoryCreateOrConnectWithoutOrganizationInput
      | inventoryCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput
      | inventoryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: inventoryCreateManyOrganizationInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?:
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput
      | inventoryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | inventoryUpdateManyWithWhereWithoutOrganizationInput
      | inventoryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type orderUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<orderCreateWithoutOrganizationInput, orderUncheckedCreateWithoutOrganizationInput>
      | orderCreateWithoutOrganizationInput[]
      | orderUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: orderCreateOrConnectWithoutOrganizationInput | orderCreateOrConnectWithoutOrganizationInput[];
    upsert?: orderUpsertWithWhereUniqueWithoutOrganizationInput | orderUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: orderCreateManyOrganizationInputEnvelope;
    set?: orderWhereUniqueInput | orderWhereUniqueInput[];
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[];
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    update?: orderUpdateWithWhereUniqueWithoutOrganizationInput | orderUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: orderUpdateManyWithWhereWithoutOrganizationInput | orderUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[];
  };

  export type productUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<productCreateWithoutOrganizationInput, productUncheckedCreateWithoutOrganizationInput>
      | productCreateWithoutOrganizationInput[]
      | productUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: productCreateOrConnectWithoutOrganizationInput | productCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | productUpsertWithWhereUniqueWithoutOrganizationInput
      | productUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: productCreateManyOrganizationInputEnvelope;
    set?: productWhereUniqueInput | productWhereUniqueInput[];
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[];
    delete?: productWhereUniqueInput | productWhereUniqueInput[];
    connect?: productWhereUniqueInput | productWhereUniqueInput[];
    update?:
      | productUpdateWithWhereUniqueWithoutOrganizationInput
      | productUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | productUpdateManyWithWhereWithoutOrganizationInput
      | productUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: productScalarWhereInput | productScalarWhereInput[];
  };

  export type inventoryCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
      | inventoryCreateWithoutProductInput[]
      | inventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductInput | inventoryCreateOrConnectWithoutProductInput[];
    createMany?: inventoryCreateManyProductInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type order_itemCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
      | order_itemCreateWithoutProductInput[]
      | order_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[];
    createMany?: order_itemCreateManyProductInputEnvelope;
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutProductInput = {
    create?: XOR<organizationCreateWithoutProductInput, organizationUncheckedCreateWithoutProductInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutProductInput;
    connect?: organizationWhereUniqueInput;
  };

  export type inventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
      | inventoryCreateWithoutProductInput[]
      | inventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductInput | inventoryCreateOrConnectWithoutProductInput[];
    createMany?: inventoryCreateManyProductInputEnvelope;
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
  };

  export type order_itemUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
      | order_itemCreateWithoutProductInput[]
      | order_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[];
    createMany?: order_itemCreateManyProductInputEnvelope;
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
  };

  export type inventoryUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
      | inventoryCreateWithoutProductInput[]
      | inventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductInput | inventoryCreateOrConnectWithoutProductInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutProductInput | inventoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: inventoryCreateManyProductInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutProductInput | inventoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutProductInput | inventoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type order_itemUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
      | order_itemCreateWithoutProductInput[]
      | order_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[];
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: order_itemCreateManyProductInputEnvelope;
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<organizationCreateWithoutProductInput, organizationUncheckedCreateWithoutProductInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutProductInput;
    upsert?: organizationUpsertWithoutProductInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutProductInput, organizationUpdateWithoutProductInput>,
      organizationUncheckedUpdateWithoutProductInput
    >;
  };

  export type inventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
      | inventoryCreateWithoutProductInput[]
      | inventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: inventoryCreateOrConnectWithoutProductInput | inventoryCreateOrConnectWithoutProductInput[];
    upsert?: inventoryUpsertWithWhereUniqueWithoutProductInput | inventoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: inventoryCreateManyProductInputEnvelope;
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[];
    update?: inventoryUpdateWithWhereUniqueWithoutProductInput | inventoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: inventoryUpdateManyWithWhereWithoutProductInput | inventoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
  };

  export type order_itemUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
      | order_itemCreateWithoutProductInput[]
      | order_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[];
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: order_itemCreateManyProductInputEnvelope;
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[];
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[];
  };

  export type orderCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
  };

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
  };

  export type orderUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    set?: orderWhereUniqueInput | orderWhereUniqueInput[];
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[];
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[];
  };

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    set?: orderWhereUniqueInput | orderWhereUniqueInput[];
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[];
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutInventoryInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    order?: orderCreateNestedManyWithoutOrganizationInput;
    product?: productCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutInventoryInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    order?: orderUncheckedCreateNestedManyWithoutOrganizationInput;
    product?: productUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutInventoryInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
  };

  export type productCreateWithoutInventoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    order_item?: order_itemCreateNestedManyWithoutProductInput;
    organization: organizationCreateNestedOneWithoutProductInput;
  };

  export type productUncheckedCreateWithoutInventoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    order_item?: order_itemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productCreateOrConnectWithoutInventoryInput = {
    where: productWhereUniqueInput;
    create: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput>;
  };

  export type organizationUpsertWithoutInventoryInput = {
    update: XOR<organizationUpdateWithoutInventoryInput, organizationUncheckedUpdateWithoutInventoryInput>;
    create: XOR<organizationCreateWithoutInventoryInput, organizationUncheckedCreateWithoutInventoryInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutInventoryInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutInventoryInput, organizationUncheckedUpdateWithoutInventoryInput>;
  };

  export type organizationUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    order?: orderUpdateManyWithoutOrganizationNestedInput;
    product?: productUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    order?: orderUncheckedUpdateManyWithoutOrganizationNestedInput;
    product?: productUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type productUpsertWithoutInventoryInput = {
    update: XOR<productUpdateWithoutInventoryInput, productUncheckedUpdateWithoutInventoryInput>;
    create: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput>;
    where?: productWhereInput;
  };

  export type productUpdateToOneWithWhereWithoutInventoryInput = {
    where?: productWhereInput;
    data: XOR<productUpdateWithoutInventoryInput, productUncheckedUpdateWithoutInventoryInput>;
  };

  export type productUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order_item?: order_itemUpdateManyWithoutProductNestedInput;
    organization?: organizationUpdateOneRequiredWithoutProductNestedInput;
  };

  export type productUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order_item?: order_itemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type organizationCreateWithoutOrderInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    product?: productCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutOrderInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    product?: productUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutOrderInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutOrderInput, organizationUncheckedCreateWithoutOrderInput>;
  };

  export type userCreateWithoutOrderInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutOrderInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutOrderInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
  };

  export type order_itemCreateWithoutOrderInput = {
    id?: string;
    quantity: number;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: productCreateNestedOneWithoutOrder_itemInput;
  };

  export type order_itemUncheckedCreateWithoutOrderInput = {
    id?: string;
    quantity: number;
    price: number;
    product_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type order_itemCreateOrConnectWithoutOrderInput = {
    where: order_itemWhereUniqueInput;
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>;
  };

  export type order_itemCreateManyOrderInputEnvelope = {
    data: order_itemCreateManyOrderInput | order_itemCreateManyOrderInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutOrderInput = {
    update: XOR<organizationUpdateWithoutOrderInput, organizationUncheckedUpdateWithoutOrderInput>;
    create: XOR<organizationCreateWithoutOrderInput, organizationUncheckedCreateWithoutOrderInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutOrderInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutOrderInput, organizationUncheckedUpdateWithoutOrderInput>;
  };

  export type organizationUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    product?: productUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    product?: productUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutOrderInput = {
    update: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>;
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrderInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>;
  };

  export type userUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput;
    update: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>;
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>;
  };

  export type order_itemUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput;
    data: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>;
  };

  export type order_itemUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemScalarWhereInput;
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutOrderInput>;
  };

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[];
    OR?: order_itemScalarWhereInput[];
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[];
    id?: UuidFilter<'order_item'> | string;
    quantity?: IntFilter<'order_item'> | number;
    price?: IntFilter<'order_item'> | number;
    product_id?: UuidFilter<'order_item'> | string;
    order_id?: UuidFilter<'order_item'> | string;
    created_at?: DateTimeFilter<'order_item'> | Date | string;
    updated_at?: DateTimeFilter<'order_item'> | Date | string;
  };

  export type orderCreateWithoutOrder_itemInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutOrderInput;
    user: userCreateNestedOneWithoutOrderInput;
  };

  export type orderUncheckedCreateWithoutOrder_itemInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderCreateOrConnectWithoutOrder_itemInput = {
    where: orderWhereUniqueInput;
    create: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>;
  };

  export type productCreateWithoutOrder_itemInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutProductInput;
    organization: organizationCreateNestedOneWithoutProductInput;
  };

  export type productUncheckedCreateWithoutOrder_itemInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productCreateOrConnectWithoutOrder_itemInput = {
    where: productWhereUniqueInput;
    create: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>;
  };

  export type orderUpsertWithoutOrder_itemInput = {
    update: XOR<orderUpdateWithoutOrder_itemInput, orderUncheckedUpdateWithoutOrder_itemInput>;
    create: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>;
    where?: orderWhereInput;
  };

  export type orderUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: orderWhereInput;
    data: XOR<orderUpdateWithoutOrder_itemInput, orderUncheckedUpdateWithoutOrder_itemInput>;
  };

  export type orderUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutOrderNestedInput;
    user?: userUpdateOneRequiredWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productUpsertWithoutOrder_itemInput = {
    update: XOR<productUpdateWithoutOrder_itemInput, productUncheckedUpdateWithoutOrder_itemInput>;
    create: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>;
    where?: productWhereInput;
  };

  export type productUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: productWhereInput;
    data: XOR<productUpdateWithoutOrder_itemInput, productUncheckedUpdateWithoutOrder_itemInput>;
  };

  export type productUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutProductNestedInput;
    organization?: organizationUpdateOneRequiredWithoutProductNestedInput;
  };

  export type productUncheckedUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type inventoryCreateWithoutOrganizationInput = {
    id?: string;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: productCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    product_id: string;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutOrganizationInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>;
  };

  export type inventoryCreateManyOrganizationInputEnvelope = {
    data: inventoryCreateManyOrganizationInput | inventoryCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type orderCreateWithoutOrganizationInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOrderInput;
    order_item?: order_itemCreateNestedManyWithoutOrderInput;
  };

  export type orderUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    order_item?: order_itemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type orderCreateOrConnectWithoutOrganizationInput = {
    where: orderWhereUniqueInput;
    create: XOR<orderCreateWithoutOrganizationInput, orderUncheckedCreateWithoutOrganizationInput>;
  };

  export type orderCreateManyOrganizationInputEnvelope = {
    data: orderCreateManyOrganizationInput | orderCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type productCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryCreateNestedManyWithoutProductInput;
    order_item?: order_itemCreateNestedManyWithoutProductInput;
  };

  export type productUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutProductInput;
    order_item?: order_itemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type productCreateOrConnectWithoutOrganizationInput = {
    where: productWhereUniqueInput;
    create: XOR<productCreateWithoutOrganizationInput, productUncheckedCreateWithoutOrganizationInput>;
  };

  export type productCreateManyOrganizationInputEnvelope = {
    data: productCreateManyOrganizationInput | productCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type inventoryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutOrganizationInput, inventoryUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<inventoryCreateWithoutOrganizationInput, inventoryUncheckedCreateWithoutOrganizationInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutOrganizationInput, inventoryUncheckedUpdateWithoutOrganizationInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutOrganizationInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    OR?: inventoryScalarWhereInput[];
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[];
    id?: UuidFilter<'inventory'> | string;
    product_id?: UuidFilter<'inventory'> | string;
    quantity?: IntFilter<'inventory'> | number;
    organization_id?: UuidFilter<'inventory'> | string;
    created_at?: DateTimeFilter<'inventory'> | Date | string;
    updated_at?: DateTimeFilter<'inventory'> | Date | string;
  };

  export type orderUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: orderWhereUniqueInput;
    update: XOR<orderUpdateWithoutOrganizationInput, orderUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<orderCreateWithoutOrganizationInput, orderUncheckedCreateWithoutOrganizationInput>;
  };

  export type orderUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: orderWhereUniqueInput;
    data: XOR<orderUpdateWithoutOrganizationInput, orderUncheckedUpdateWithoutOrganizationInput>;
  };

  export type orderUpdateManyWithWhereWithoutOrganizationInput = {
    where: orderScalarWhereInput;
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[];
    OR?: orderScalarWhereInput[];
    NOT?: orderScalarWhereInput | orderScalarWhereInput[];
    id?: UuidFilter<'order'> | string;
    order_date?: DateTimeFilter<'order'> | Date | string;
    total_price?: IntFilter<'order'> | number;
    user_id?: UuidFilter<'order'> | string;
    organization_id?: UuidFilter<'order'> | string;
    created_at?: DateTimeFilter<'order'> | Date | string;
    updated_at?: DateTimeFilter<'order'> | Date | string;
  };

  export type productUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: productWhereUniqueInput;
    update: XOR<productUpdateWithoutOrganizationInput, productUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<productCreateWithoutOrganizationInput, productUncheckedCreateWithoutOrganizationInput>;
  };

  export type productUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: productWhereUniqueInput;
    data: XOR<productUpdateWithoutOrganizationInput, productUncheckedUpdateWithoutOrganizationInput>;
  };

  export type productUpdateManyWithWhereWithoutOrganizationInput = {
    where: productScalarWhereInput;
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[];
    OR?: productScalarWhereInput[];
    NOT?: productScalarWhereInput | productScalarWhereInput[];
    id?: UuidFilter<'product'> | string;
    name?: StringFilter<'product'> | string;
    description?: StringNullableFilter<'product'> | string | null;
    price?: IntFilter<'product'> | number;
    quantity?: IntFilter<'product'> | number;
    organization_id?: UuidFilter<'product'> | string;
    created_at?: DateTimeFilter<'product'> | Date | string;
    updated_at?: DateTimeFilter<'product'> | Date | string;
  };

  export type inventoryCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInventoryInput;
  };

  export type inventoryUncheckedCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryCreateOrConnectWithoutProductInput = {
    where: inventoryWhereUniqueInput;
    create: XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>;
  };

  export type inventoryCreateManyProductInputEnvelope = {
    data: inventoryCreateManyProductInput | inventoryCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type order_itemCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    order: orderCreateNestedOneWithoutOrder_itemInput;
  };

  export type order_itemUncheckedCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    price: number;
    order_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type order_itemCreateOrConnectWithoutProductInput = {
    where: order_itemWhereUniqueInput;
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>;
  };

  export type order_itemCreateManyProductInputEnvelope = {
    data: order_itemCreateManyProductInput | order_itemCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutProductInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryCreateNestedManyWithoutOrganizationInput;
    order?: orderCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutProductInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    inventory?: inventoryUncheckedCreateNestedManyWithoutOrganizationInput;
    order?: orderUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutProductInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutProductInput, organizationUncheckedCreateWithoutProductInput>;
  };

  export type inventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: inventoryWhereUniqueInput;
    update: XOR<inventoryUpdateWithoutProductInput, inventoryUncheckedUpdateWithoutProductInput>;
    create: XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>;
  };

  export type inventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: inventoryWhereUniqueInput;
    data: XOR<inventoryUpdateWithoutProductInput, inventoryUncheckedUpdateWithoutProductInput>;
  };

  export type inventoryUpdateManyWithWhereWithoutProductInput = {
    where: inventoryScalarWhereInput;
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutProductInput>;
  };

  export type order_itemUpsertWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput;
    update: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>;
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>;
  };

  export type order_itemUpdateWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput;
    data: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>;
  };

  export type order_itemUpdateManyWithWhereWithoutProductInput = {
    where: order_itemScalarWhereInput;
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutProductInput>;
  };

  export type organizationUpsertWithoutProductInput = {
    update: XOR<organizationUpdateWithoutProductInput, organizationUncheckedUpdateWithoutProductInput>;
    create: XOR<organizationCreateWithoutProductInput, organizationUncheckedCreateWithoutProductInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutProductInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutProductInput, organizationUncheckedUpdateWithoutProductInput>;
  };

  export type organizationUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUpdateManyWithoutOrganizationNestedInput;
    order?: orderUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    inventory?: inventoryUncheckedUpdateManyWithoutOrganizationNestedInput;
    order?: orderUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type orderCreateWithoutUserInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutOrderInput;
    order_item?: order_itemCreateNestedManyWithoutOrderInput;
  };

  export type orderUncheckedCreateWithoutUserInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    order_item?: order_itemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput;
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>;
  };

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput;
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>;
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>;
  };

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput;
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>;
  };

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput;
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>;
  };

  export type order_itemCreateManyOrderInput = {
    id?: string;
    quantity: number;
    price: number;
    product_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type order_itemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateOneRequiredWithoutOrder_itemNestedInput;
  };

  export type order_itemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    product_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    product_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyOrganizationInput = {
    id?: string;
    product_id: string;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderCreateManyOrganizationInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type productCreateManyOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: productUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    product_id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOrderNestedInput;
    order_item?: order_itemUpdateManyWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order_item?: order_itemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type productUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUpdateManyWithoutProductNestedInput;
    order_item?: order_itemUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: inventoryUncheckedUpdateManyWithoutProductNestedInput;
    order_item?: order_itemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type productUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryCreateManyProductInput = {
    id?: string;
    quantity: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type order_itemCreateManyProductInput = {
    id?: string;
    quantity: number;
    price: number;
    order_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type inventoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type inventoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type inventoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: orderUpdateOneRequiredWithoutOrder_itemNestedInput;
  };

  export type order_itemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    order_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type order_itemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: IntFieldUpdateOperationsInput | number;
    order_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderCreateManyUserInput = {
    id?: string;
    order_date: Date | string;
    total_price: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutOrderNestedInput;
    order_item?: order_itemUpdateManyWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    order_item?: order_itemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrderCountOutputTypeDefaultArgs instead
   */
  export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrderCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProductCountOutputTypeDefaultArgs instead
   */
  export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProductCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use inventoryDefaultArgs instead
   */
  export type inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    inventoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use orderDefaultArgs instead
   */
  export type orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orderDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use order_itemDefaultArgs instead
   */
  export type order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    order_itemDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use productDefaultArgs instead
   */
  export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    productDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
