
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Lawsuit
 * 
 */
export type Lawsuit = $Result.DefaultSelection<Prisma.$LawsuitPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  LAWYER: 'LAWYER',
  SECRETARY: 'SECRETARY',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ContactType: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  MOBILE: 'MOBILE',
  FAX: 'FAX',
  OTHER: 'OTHER'
};

export type ContactType = (typeof ContactType)[keyof typeof ContactType]


export const Priority: {
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const ClientType: {
  INDIVIDUAL: 'INDIVIDUAL',
  COMPANY: 'COMPANY'
};

export type ClientType = (typeof ClientType)[keyof typeof ClientType]


export const CaseStatus: {
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED',
  SUSPENDED: 'SUSPENDED',
  WON: 'WON',
  LOST: 'LOST'
};

export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus]


export const AddressType: {
  HOME: 'HOME',
  WORK: 'WORK',
  BILLING: 'BILLING',
  OTHER: 'OTHER'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ContactType = $Enums.ContactType

export const ContactType: typeof $Enums.ContactType

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type ClientType = $Enums.ClientType

export const ClientType: typeof $Enums.ClientType

export type CaseStatus = $Enums.CaseStatus

export const CaseStatus: typeof $Enums.CaseStatus

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawsuit`: Exposes CRUD operations for the **Lawsuit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawsuits
    * const lawsuits = await prisma.lawsuit.findMany()
    * ```
    */
  get lawsuit(): Prisma.LawsuitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Contact: 'Contact',
    Task: 'Task',
    Client: 'Client',
    Lawsuit: 'Lawsuit',
    Address: 'Address'
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
      modelProps: "user" | "contact" | "task" | "client" | "lawsuit" | "address"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Lawsuit: {
        payload: Prisma.$LawsuitPayload<ExtArgs>
        fields: Prisma.LawsuitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawsuitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawsuitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>
          }
          findFirst: {
            args: Prisma.LawsuitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawsuitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>
          }
          findMany: {
            args: Prisma.LawsuitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>[]
          }
          create: {
            args: Prisma.LawsuitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>
          }
          createMany: {
            args: Prisma.LawsuitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawsuitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>[]
          }
          delete: {
            args: Prisma.LawsuitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>
          }
          update: {
            args: Prisma.LawsuitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>
          }
          deleteMany: {
            args: Prisma.LawsuitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawsuitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawsuitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>[]
          }
          upsert: {
            args: Prisma.LawsuitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawsuitPayload>
          }
          aggregate: {
            args: Prisma.LawsuitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawsuit>
          }
          groupBy: {
            args: Prisma.LawsuitGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawsuitGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawsuitCountArgs<ExtArgs>
            result: $Utils.Optional<LawsuitCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
    user?: UserOmit
    contact?: ContactOmit
    task?: TaskOmit
    client?: ClientOmit
    lawsuit?: LawsuitOmit
    address?: AddressOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    createdClients: number
    createdLawsuits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    createdClients?: boolean | UserCountOutputTypeCountCreatedClientsArgs
    createdLawsuits?: boolean | UserCountOutputTypeCountCreatedLawsuitsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedLawsuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawsuitWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    contacts: number
    addresses: number
    tasks: number
    lawsuits: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | ClientCountOutputTypeCountContactsArgs
    addresses?: boolean | ClientCountOutputTypeCountAddressesArgs
    tasks?: boolean | ClientCountOutputTypeCountTasksArgs
    lawsuits?: boolean | ClientCountOutputTypeCountLawsuitsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountLawsuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawsuitWhereInput
  }


  /**
   * Count Type LawsuitCountOutputType
   */

  export type LawsuitCountOutputType = {
    tasks: number
  }

  export type LawsuitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | LawsuitCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * LawsuitCountOutputType without action
   */
  export type LawsuitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawsuitCountOutputType
     */
    select?: LawsuitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LawsuitCountOutputType without action
   */
  export type LawsuitCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    surname: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    surname: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    surname: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    surname: string
    role: $Enums.Role
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    createdClients?: boolean | User$createdClientsArgs<ExtArgs>
    createdLawsuits?: boolean | User$createdLawsuitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "surname" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    createdClients?: boolean | User$createdClientsArgs<ExtArgs>
    createdLawsuits?: boolean | User$createdLawsuitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      createdClients: Prisma.$ClientPayload<ExtArgs>[]
      createdLawsuits: Prisma.$LawsuitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      surname: string
      role: $Enums.Role
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdClients<T extends User$createdClientsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdLawsuits<T extends User$createdLawsuitsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdLawsuitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Status'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.createdClients
   */
  export type User$createdClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.createdLawsuits
   */
  export type User$createdLawsuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    where?: LawsuitWhereInput
    orderBy?: LawsuitOrderByWithRelationInput | LawsuitOrderByWithRelationInput[]
    cursor?: LawsuitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawsuitScalarFieldEnum | LawsuitScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    type: $Enums.ContactType | null
    value: string | null
    description: string | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    type: $Enums.ContactType | null
    value: string | null
    description: string | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    type: number
    value: number
    description: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    type?: true
    value?: true
    description?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    type?: true
    value?: true
    description?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    type?: true
    value?: true
    description?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    type: $Enums.ContactType
    value: string
    description: string | null
    clientId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Contact$clientArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Contact$clientArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Contact$clientArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    type?: boolean
    value?: boolean
    description?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "value" | "description" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Contact$clientArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Contact$clientArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Contact$clientArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.ContactType
      value: string
      description: string | null
      clientId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Contact$clientArgs<ExtArgs> = {}>(args?: Subset<T, Contact$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly type: FieldRef<"Contact", 'ContactType'>
    readonly value: FieldRef<"Contact", 'String'>
    readonly description: FieldRef<"Contact", 'String'>
    readonly clientId: FieldRef<"Contact", 'Int'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.client
   */
  export type Contact$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    clientId: number | null
    lawsuitId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    userId: number | null
    clientId: number | null
    lawsuitId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    dueDate: Date | null
    priority: $Enums.Priority | null
    status: $Enums.TaskStatus | null
    userId: number | null
    clientId: number | null
    lawsuitId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    dueDate: Date | null
    priority: $Enums.Priority | null
    status: $Enums.TaskStatus | null
    userId: number | null
    clientId: number | null
    lawsuitId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    priority: number
    status: number
    userId: number
    clientId: number
    lawsuitId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    lawsuitId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    lawsuitId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    priority?: true
    status?: true
    userId?: true
    clientId?: true
    lawsuitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    priority?: true
    status?: true
    userId?: true
    clientId?: true
    lawsuitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    priority?: true
    status?: true
    userId?: true
    clientId?: true
    lawsuitId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    dueDate: Date | null
    priority: $Enums.Priority
    status: $Enums.TaskStatus
    userId: number
    clientId: number | null
    lawsuitId: number | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    userId?: boolean
    clientId?: boolean
    lawsuitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Task$clientArgs<ExtArgs>
    lawsuit?: boolean | Task$lawsuitArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    userId?: boolean
    clientId?: boolean
    lawsuitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Task$clientArgs<ExtArgs>
    lawsuit?: boolean | Task$lawsuitArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    userId?: boolean
    clientId?: boolean
    lawsuitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Task$clientArgs<ExtArgs>
    lawsuit?: boolean | Task$lawsuitArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    userId?: boolean
    clientId?: boolean
    lawsuitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "priority" | "status" | "userId" | "clientId" | "lawsuitId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Task$clientArgs<ExtArgs>
    lawsuit?: boolean | Task$lawsuitArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Task$clientArgs<ExtArgs>
    lawsuit?: boolean | Task$lawsuitArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Task$clientArgs<ExtArgs>
    lawsuit?: boolean | Task$lawsuitArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignedTo: Prisma.$UserPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs> | null
      lawsuit: Prisma.$LawsuitPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      dueDate: Date | null
      priority: $Enums.Priority
      status: $Enums.TaskStatus
      userId: number
      clientId: number | null
      lawsuitId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends Task$clientArgs<ExtArgs> = {}>(args?: Subset<T, Task$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lawsuit<T extends Task$lawsuitArgs<ExtArgs> = {}>(args?: Subset<T, Task$lawsuitArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly userId: FieldRef<"Task", 'Int'>
    readonly clientId: FieldRef<"Task", 'Int'>
    readonly lawsuitId: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.client
   */
  export type Task$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Task.lawsuit
   */
  export type Task$lawsuitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    where?: LawsuitWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    clientType: $Enums.ClientType | null
    taxNumber: string | null
    companyName: string | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    clientType: $Enums.ClientType | null
    taxNumber: string | null
    companyName: string | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    clientType: number
    taxNumber: number
    companyName: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    clientType?: true
    taxNumber?: true
    companyName?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    clientType?: true
    taxNumber?: true
    companyName?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    clientType?: true
    taxNumber?: true
    companyName?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    surname: string
    clientType: $Enums.ClientType
    taxNumber: string | null
    companyName: string | null
    createdById: number
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    clientType?: boolean
    taxNumber?: boolean
    companyName?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contacts?: boolean | Client$contactsArgs<ExtArgs>
    addresses?: boolean | Client$addressesArgs<ExtArgs>
    tasks?: boolean | Client$tasksArgs<ExtArgs>
    lawsuits?: boolean | Client$lawsuitsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    clientType?: boolean
    taxNumber?: boolean
    companyName?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    clientType?: boolean
    taxNumber?: boolean
    companyName?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    clientType?: boolean
    taxNumber?: boolean
    companyName?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "clientType" | "taxNumber" | "companyName" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | Client$contactsArgs<ExtArgs>
    addresses?: boolean | Client$addressesArgs<ExtArgs>
    tasks?: boolean | Client$tasksArgs<ExtArgs>
    lawsuits?: boolean | Client$lawsuitsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      lawsuits: Prisma.$LawsuitPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      clientType: $Enums.ClientType
      taxNumber: string | null
      companyName: string | null
      createdById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends Client$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Client$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends Client$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Client$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Client$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Client$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lawsuits<T extends Client$lawsuitsArgs<ExtArgs> = {}>(args?: Subset<T, Client$lawsuitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly surname: FieldRef<"Client", 'String'>
    readonly clientType: FieldRef<"Client", 'ClientType'>
    readonly taxNumber: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly createdById: FieldRef<"Client", 'Int'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.contacts
   */
  export type Client$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Client.addresses
   */
  export type Client$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Client.tasks
   */
  export type Client$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Client.lawsuits
   */
  export type Client$lawsuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    where?: LawsuitWhereInput
    orderBy?: LawsuitOrderByWithRelationInput | LawsuitOrderByWithRelationInput[]
    cursor?: LawsuitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawsuitScalarFieldEnum | LawsuitScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Lawsuit
   */

  export type AggregateLawsuit = {
    _count: LawsuitCountAggregateOutputType | null
    _avg: LawsuitAvgAggregateOutputType | null
    _sum: LawsuitSumAggregateOutputType | null
    _min: LawsuitMinAggregateOutputType | null
    _max: LawsuitMaxAggregateOutputType | null
  }

  export type LawsuitAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
  }

  export type LawsuitSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    lawyerId: number | null
  }

  export type LawsuitMinAggregateOutputType = {
    id: number | null
    caseNumber: string | null
    caseType: string | null
    court: string | null
    status: $Enums.CaseStatus | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    clientId: number | null
    lawyerId: number | null
    opposingParty: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawsuitMaxAggregateOutputType = {
    id: number | null
    caseNumber: string | null
    caseType: string | null
    court: string | null
    status: $Enums.CaseStatus | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    clientId: number | null
    lawyerId: number | null
    opposingParty: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawsuitCountAggregateOutputType = {
    id: number
    caseNumber: number
    caseType: number
    court: number
    status: number
    description: number
    startDate: number
    endDate: number
    clientId: number
    lawyerId: number
    opposingParty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LawsuitAvgAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
  }

  export type LawsuitSumAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
  }

  export type LawsuitMinAggregateInputType = {
    id?: true
    caseNumber?: true
    caseType?: true
    court?: true
    status?: true
    description?: true
    startDate?: true
    endDate?: true
    clientId?: true
    lawyerId?: true
    opposingParty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawsuitMaxAggregateInputType = {
    id?: true
    caseNumber?: true
    caseType?: true
    court?: true
    status?: true
    description?: true
    startDate?: true
    endDate?: true
    clientId?: true
    lawyerId?: true
    opposingParty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawsuitCountAggregateInputType = {
    id?: true
    caseNumber?: true
    caseType?: true
    court?: true
    status?: true
    description?: true
    startDate?: true
    endDate?: true
    clientId?: true
    lawyerId?: true
    opposingParty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LawsuitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawsuit to aggregate.
     */
    where?: LawsuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawsuits to fetch.
     */
    orderBy?: LawsuitOrderByWithRelationInput | LawsuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawsuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawsuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawsuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lawsuits
    **/
    _count?: true | LawsuitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawsuitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawsuitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawsuitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawsuitMaxAggregateInputType
  }

  export type GetLawsuitAggregateType<T extends LawsuitAggregateArgs> = {
        [P in keyof T & keyof AggregateLawsuit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawsuit[P]>
      : GetScalarType<T[P], AggregateLawsuit[P]>
  }




  export type LawsuitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawsuitWhereInput
    orderBy?: LawsuitOrderByWithAggregationInput | LawsuitOrderByWithAggregationInput[]
    by: LawsuitScalarFieldEnum[] | LawsuitScalarFieldEnum
    having?: LawsuitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawsuitCountAggregateInputType | true
    _avg?: LawsuitAvgAggregateInputType
    _sum?: LawsuitSumAggregateInputType
    _min?: LawsuitMinAggregateInputType
    _max?: LawsuitMaxAggregateInputType
  }

  export type LawsuitGroupByOutputType = {
    id: number
    caseNumber: string
    caseType: string
    court: string
    status: $Enums.CaseStatus
    description: string | null
    startDate: Date
    endDate: Date | null
    clientId: number
    lawyerId: number
    opposingParty: string | null
    createdAt: Date
    updatedAt: Date
    _count: LawsuitCountAggregateOutputType | null
    _avg: LawsuitAvgAggregateOutputType | null
    _sum: LawsuitSumAggregateOutputType | null
    _min: LawsuitMinAggregateOutputType | null
    _max: LawsuitMaxAggregateOutputType | null
  }

  type GetLawsuitGroupByPayload<T extends LawsuitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawsuitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawsuitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawsuitGroupByOutputType[P]>
            : GetScalarType<T[P], LawsuitGroupByOutputType[P]>
        }
      >
    >


  export type LawsuitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseNumber?: boolean
    caseType?: boolean
    court?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    clientId?: boolean
    lawyerId?: boolean
    opposingParty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tasks?: boolean | Lawsuit$tasksArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | LawsuitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawsuit"]>

  export type LawsuitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseNumber?: boolean
    caseType?: boolean
    court?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    clientId?: boolean
    lawyerId?: boolean
    opposingParty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawsuit"]>

  export type LawsuitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseNumber?: boolean
    caseType?: boolean
    court?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    clientId?: boolean
    lawyerId?: boolean
    opposingParty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawsuit"]>

  export type LawsuitSelectScalar = {
    id?: boolean
    caseNumber?: boolean
    caseType?: boolean
    court?: boolean
    status?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    clientId?: boolean
    lawyerId?: boolean
    opposingParty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LawsuitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caseNumber" | "caseType" | "court" | "status" | "description" | "startDate" | "endDate" | "clientId" | "lawyerId" | "opposingParty" | "createdAt" | "updatedAt", ExtArgs["result"]["lawsuit"]>
  export type LawsuitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tasks?: boolean | Lawsuit$tasksArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | LawsuitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LawsuitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LawsuitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LawsuitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lawsuit"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      lawyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caseNumber: string
      caseType: string
      court: string
      status: $Enums.CaseStatus
      description: string | null
      startDate: Date
      endDate: Date | null
      clientId: number
      lawyerId: number
      opposingParty: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lawsuit"]>
    composites: {}
  }

  type LawsuitGetPayload<S extends boolean | null | undefined | LawsuitDefaultArgs> = $Result.GetResult<Prisma.$LawsuitPayload, S>

  type LawsuitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawsuitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawsuitCountAggregateInputType | true
    }

  export interface LawsuitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lawsuit'], meta: { name: 'Lawsuit' } }
    /**
     * Find zero or one Lawsuit that matches the filter.
     * @param {LawsuitFindUniqueArgs} args - Arguments to find a Lawsuit
     * @example
     * // Get one Lawsuit
     * const lawsuit = await prisma.lawsuit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawsuitFindUniqueArgs>(args: SelectSubset<T, LawsuitFindUniqueArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lawsuit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawsuitFindUniqueOrThrowArgs} args - Arguments to find a Lawsuit
     * @example
     * // Get one Lawsuit
     * const lawsuit = await prisma.lawsuit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawsuitFindUniqueOrThrowArgs>(args: SelectSubset<T, LawsuitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawsuit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitFindFirstArgs} args - Arguments to find a Lawsuit
     * @example
     * // Get one Lawsuit
     * const lawsuit = await prisma.lawsuit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawsuitFindFirstArgs>(args?: SelectSubset<T, LawsuitFindFirstArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawsuit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitFindFirstOrThrowArgs} args - Arguments to find a Lawsuit
     * @example
     * // Get one Lawsuit
     * const lawsuit = await prisma.lawsuit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawsuitFindFirstOrThrowArgs>(args?: SelectSubset<T, LawsuitFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lawsuits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawsuits
     * const lawsuits = await prisma.lawsuit.findMany()
     * 
     * // Get first 10 Lawsuits
     * const lawsuits = await prisma.lawsuit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawsuitWithIdOnly = await prisma.lawsuit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawsuitFindManyArgs>(args?: SelectSubset<T, LawsuitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lawsuit.
     * @param {LawsuitCreateArgs} args - Arguments to create a Lawsuit.
     * @example
     * // Create one Lawsuit
     * const Lawsuit = await prisma.lawsuit.create({
     *   data: {
     *     // ... data to create a Lawsuit
     *   }
     * })
     * 
     */
    create<T extends LawsuitCreateArgs>(args: SelectSubset<T, LawsuitCreateArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lawsuits.
     * @param {LawsuitCreateManyArgs} args - Arguments to create many Lawsuits.
     * @example
     * // Create many Lawsuits
     * const lawsuit = await prisma.lawsuit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawsuitCreateManyArgs>(args?: SelectSubset<T, LawsuitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lawsuits and returns the data saved in the database.
     * @param {LawsuitCreateManyAndReturnArgs} args - Arguments to create many Lawsuits.
     * @example
     * // Create many Lawsuits
     * const lawsuit = await prisma.lawsuit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lawsuits and only return the `id`
     * const lawsuitWithIdOnly = await prisma.lawsuit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawsuitCreateManyAndReturnArgs>(args?: SelectSubset<T, LawsuitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lawsuit.
     * @param {LawsuitDeleteArgs} args - Arguments to delete one Lawsuit.
     * @example
     * // Delete one Lawsuit
     * const Lawsuit = await prisma.lawsuit.delete({
     *   where: {
     *     // ... filter to delete one Lawsuit
     *   }
     * })
     * 
     */
    delete<T extends LawsuitDeleteArgs>(args: SelectSubset<T, LawsuitDeleteArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lawsuit.
     * @param {LawsuitUpdateArgs} args - Arguments to update one Lawsuit.
     * @example
     * // Update one Lawsuit
     * const lawsuit = await prisma.lawsuit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawsuitUpdateArgs>(args: SelectSubset<T, LawsuitUpdateArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lawsuits.
     * @param {LawsuitDeleteManyArgs} args - Arguments to filter Lawsuits to delete.
     * @example
     * // Delete a few Lawsuits
     * const { count } = await prisma.lawsuit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawsuitDeleteManyArgs>(args?: SelectSubset<T, LawsuitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawsuits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawsuits
     * const lawsuit = await prisma.lawsuit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawsuitUpdateManyArgs>(args: SelectSubset<T, LawsuitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawsuits and returns the data updated in the database.
     * @param {LawsuitUpdateManyAndReturnArgs} args - Arguments to update many Lawsuits.
     * @example
     * // Update many Lawsuits
     * const lawsuit = await prisma.lawsuit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lawsuits and only return the `id`
     * const lawsuitWithIdOnly = await prisma.lawsuit.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawsuitUpdateManyAndReturnArgs>(args: SelectSubset<T, LawsuitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lawsuit.
     * @param {LawsuitUpsertArgs} args - Arguments to update or create a Lawsuit.
     * @example
     * // Update or create a Lawsuit
     * const lawsuit = await prisma.lawsuit.upsert({
     *   create: {
     *     // ... data to create a Lawsuit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawsuit we want to update
     *   }
     * })
     */
    upsert<T extends LawsuitUpsertArgs>(args: SelectSubset<T, LawsuitUpsertArgs<ExtArgs>>): Prisma__LawsuitClient<$Result.GetResult<Prisma.$LawsuitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lawsuits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitCountArgs} args - Arguments to filter Lawsuits to count.
     * @example
     * // Count the number of Lawsuits
     * const count = await prisma.lawsuit.count({
     *   where: {
     *     // ... the filter for the Lawsuits we want to count
     *   }
     * })
    **/
    count<T extends LawsuitCountArgs>(
      args?: Subset<T, LawsuitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawsuitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawsuit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawsuitAggregateArgs>(args: Subset<T, LawsuitAggregateArgs>): Prisma.PrismaPromise<GetLawsuitAggregateType<T>>

    /**
     * Group by Lawsuit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawsuitGroupByArgs} args - Group by arguments.
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
      T extends LawsuitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawsuitGroupByArgs['orderBy'] }
        : { orderBy?: LawsuitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawsuitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawsuitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lawsuit model
   */
  readonly fields: LawsuitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lawsuit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawsuitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Lawsuit$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Lawsuit$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lawyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lawsuit model
   */
  interface LawsuitFieldRefs {
    readonly id: FieldRef<"Lawsuit", 'Int'>
    readonly caseNumber: FieldRef<"Lawsuit", 'String'>
    readonly caseType: FieldRef<"Lawsuit", 'String'>
    readonly court: FieldRef<"Lawsuit", 'String'>
    readonly status: FieldRef<"Lawsuit", 'CaseStatus'>
    readonly description: FieldRef<"Lawsuit", 'String'>
    readonly startDate: FieldRef<"Lawsuit", 'DateTime'>
    readonly endDate: FieldRef<"Lawsuit", 'DateTime'>
    readonly clientId: FieldRef<"Lawsuit", 'Int'>
    readonly lawyerId: FieldRef<"Lawsuit", 'Int'>
    readonly opposingParty: FieldRef<"Lawsuit", 'String'>
    readonly createdAt: FieldRef<"Lawsuit", 'DateTime'>
    readonly updatedAt: FieldRef<"Lawsuit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lawsuit findUnique
   */
  export type LawsuitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * Filter, which Lawsuit to fetch.
     */
    where: LawsuitWhereUniqueInput
  }

  /**
   * Lawsuit findUniqueOrThrow
   */
  export type LawsuitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * Filter, which Lawsuit to fetch.
     */
    where: LawsuitWhereUniqueInput
  }

  /**
   * Lawsuit findFirst
   */
  export type LawsuitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * Filter, which Lawsuit to fetch.
     */
    where?: LawsuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawsuits to fetch.
     */
    orderBy?: LawsuitOrderByWithRelationInput | LawsuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawsuits.
     */
    cursor?: LawsuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawsuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawsuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawsuits.
     */
    distinct?: LawsuitScalarFieldEnum | LawsuitScalarFieldEnum[]
  }

  /**
   * Lawsuit findFirstOrThrow
   */
  export type LawsuitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * Filter, which Lawsuit to fetch.
     */
    where?: LawsuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawsuits to fetch.
     */
    orderBy?: LawsuitOrderByWithRelationInput | LawsuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawsuits.
     */
    cursor?: LawsuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawsuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawsuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawsuits.
     */
    distinct?: LawsuitScalarFieldEnum | LawsuitScalarFieldEnum[]
  }

  /**
   * Lawsuit findMany
   */
  export type LawsuitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * Filter, which Lawsuits to fetch.
     */
    where?: LawsuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawsuits to fetch.
     */
    orderBy?: LawsuitOrderByWithRelationInput | LawsuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lawsuits.
     */
    cursor?: LawsuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawsuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawsuits.
     */
    skip?: number
    distinct?: LawsuitScalarFieldEnum | LawsuitScalarFieldEnum[]
  }

  /**
   * Lawsuit create
   */
  export type LawsuitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * The data needed to create a Lawsuit.
     */
    data: XOR<LawsuitCreateInput, LawsuitUncheckedCreateInput>
  }

  /**
   * Lawsuit createMany
   */
  export type LawsuitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lawsuits.
     */
    data: LawsuitCreateManyInput | LawsuitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lawsuit createManyAndReturn
   */
  export type LawsuitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * The data used to create many Lawsuits.
     */
    data: LawsuitCreateManyInput | LawsuitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lawsuit update
   */
  export type LawsuitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * The data needed to update a Lawsuit.
     */
    data: XOR<LawsuitUpdateInput, LawsuitUncheckedUpdateInput>
    /**
     * Choose, which Lawsuit to update.
     */
    where: LawsuitWhereUniqueInput
  }

  /**
   * Lawsuit updateMany
   */
  export type LawsuitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lawsuits.
     */
    data: XOR<LawsuitUpdateManyMutationInput, LawsuitUncheckedUpdateManyInput>
    /**
     * Filter which Lawsuits to update
     */
    where?: LawsuitWhereInput
    /**
     * Limit how many Lawsuits to update.
     */
    limit?: number
  }

  /**
   * Lawsuit updateManyAndReturn
   */
  export type LawsuitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * The data used to update Lawsuits.
     */
    data: XOR<LawsuitUpdateManyMutationInput, LawsuitUncheckedUpdateManyInput>
    /**
     * Filter which Lawsuits to update
     */
    where?: LawsuitWhereInput
    /**
     * Limit how many Lawsuits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lawsuit upsert
   */
  export type LawsuitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * The filter to search for the Lawsuit to update in case it exists.
     */
    where: LawsuitWhereUniqueInput
    /**
     * In case the Lawsuit found by the `where` argument doesn't exist, create a new Lawsuit with this data.
     */
    create: XOR<LawsuitCreateInput, LawsuitUncheckedCreateInput>
    /**
     * In case the Lawsuit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawsuitUpdateInput, LawsuitUncheckedUpdateInput>
  }

  /**
   * Lawsuit delete
   */
  export type LawsuitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
    /**
     * Filter which Lawsuit to delete.
     */
    where: LawsuitWhereUniqueInput
  }

  /**
   * Lawsuit deleteMany
   */
  export type LawsuitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawsuits to delete
     */
    where?: LawsuitWhereInput
    /**
     * Limit how many Lawsuits to delete.
     */
    limit?: number
  }

  /**
   * Lawsuit.tasks
   */
  export type Lawsuit$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Lawsuit without action
   */
  export type LawsuitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawsuit
     */
    select?: LawsuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawsuit
     */
    omit?: LawsuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawsuitInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    addressLine: string | null
    city: string | null
    district: string | null
    postalCode: string | null
    country: string | null
    addressType: $Enums.AddressType | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    addressLine: string | null
    city: string | null
    district: string | null
    postalCode: string | null
    country: string | null
    addressType: $Enums.AddressType | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    addressLine: number
    city: number
    district: number
    postalCode: number
    country: number
    addressType: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    addressLine?: true
    city?: true
    district?: true
    postalCode?: true
    country?: true
    addressType?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    addressLine?: true
    city?: true
    district?: true
    postalCode?: true
    country?: true
    addressType?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    addressLine?: true
    city?: true
    district?: true
    postalCode?: true
    country?: true
    addressType?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    addressLine: string
    city: string
    district: string | null
    postalCode: string | null
    country: string
    addressType: $Enums.AddressType
    clientId: number
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addressLine?: boolean
    city?: boolean
    district?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addressLine?: boolean
    city?: boolean
    district?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addressLine?: boolean
    city?: boolean
    district?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    addressLine?: boolean
    city?: boolean
    district?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "addressLine" | "city" | "district" | "postalCode" | "country" | "addressType" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      addressLine: string
      city: string
      district: string | null
      postalCode: string | null
      country: string
      addressType: $Enums.AddressType
      clientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly addressLine: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly addressType: FieldRef<"Address", 'AddressType'>
    readonly clientId: FieldRef<"Address", 'Int'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    surname: 'surname',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    type: 'type',
    value: 'value',
    description: 'description',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    priority: 'priority',
    status: 'status',
    userId: 'userId',
    clientId: 'clientId',
    lawsuitId: 'lawsuitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    clientType: 'clientType',
    taxNumber: 'taxNumber',
    companyName: 'companyName',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const LawsuitScalarFieldEnum: {
    id: 'id',
    caseNumber: 'caseNumber',
    caseType: 'caseType',
    court: 'court',
    status: 'status',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    clientId: 'clientId',
    lawyerId: 'lawyerId',
    opposingParty: 'opposingParty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LawsuitScalarFieldEnum = (typeof LawsuitScalarFieldEnum)[keyof typeof LawsuitScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    addressLine: 'addressLine',
    city: 'city',
    district: 'district',
    postalCode: 'postalCode',
    country: 'country',
    addressType: 'addressType',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContactType'
   */
  export type EnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType'>
    


  /**
   * Reference to a field of type 'ContactType[]'
   */
  export type ListEnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'ClientType'
   */
  export type EnumClientTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientType'>
    


  /**
   * Reference to a field of type 'ClientType[]'
   */
  export type ListEnumClientTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientType[]'>
    


  /**
   * Reference to a field of type 'CaseStatus'
   */
  export type EnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus'>
    


  /**
   * Reference to a field of type 'CaseStatus[]'
   */
  export type ListEnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus[]'>
    


  /**
   * Reference to a field of type 'AddressType'
   */
  export type EnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType'>
    


  /**
   * Reference to a field of type 'AddressType[]'
   */
  export type ListEnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    createdClients?: ClientListRelationFilter
    createdLawsuits?: LawsuitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    createdClients?: ClientOrderByRelationAggregateInput
    createdLawsuits?: LawsuitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    createdClients?: ClientListRelationFilter
    createdLawsuits?: LawsuitListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    value?: StringFilter<"Contact"> | string
    description?: StringNullableFilter<"Contact"> | string | null
    clientId?: IntNullableFilter<"Contact"> | number | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    value?: StringFilter<"Contact"> | string
    description?: StringNullableFilter<"Contact"> | string | null
    clientId?: IntNullableFilter<"Contact"> | number | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    type?: EnumContactTypeWithAggregatesFilter<"Contact"> | $Enums.ContactType
    value?: StringWithAggregatesFilter<"Contact"> | string
    description?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    clientId?: IntNullableWithAggregatesFilter<"Contact"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    userId?: IntFilter<"Task"> | number
    clientId?: IntNullableFilter<"Task"> | number | null
    lawsuitId?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    lawsuit?: XOR<LawsuitNullableScalarRelationFilter, LawsuitWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    lawsuitId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTo?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    lawsuit?: LawsuitOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    userId?: IntFilter<"Task"> | number
    clientId?: IntNullableFilter<"Task"> | number | null
    lawsuitId?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    lawsuit?: XOR<LawsuitNullableScalarRelationFilter, LawsuitWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    lawsuitId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    userId?: IntWithAggregatesFilter<"Task"> | number
    clientId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    lawsuitId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    surname?: StringFilter<"Client"> | string
    clientType?: EnumClientTypeFilter<"Client"> | $Enums.ClientType
    taxNumber?: StringNullableFilter<"Client"> | string | null
    companyName?: StringNullableFilter<"Client"> | string | null
    createdById?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    contacts?: ContactListRelationFilter
    addresses?: AddressListRelationFilter
    tasks?: TaskListRelationFilter
    lawsuits?: LawsuitListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    clientType?: SortOrder
    taxNumber?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contacts?: ContactOrderByRelationAggregateInput
    addresses?: AddressOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    lawsuits?: LawsuitOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    surname?: StringFilter<"Client"> | string
    clientType?: EnumClientTypeFilter<"Client"> | $Enums.ClientType
    taxNumber?: StringNullableFilter<"Client"> | string | null
    companyName?: StringNullableFilter<"Client"> | string | null
    createdById?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    contacts?: ContactListRelationFilter
    addresses?: AddressListRelationFilter
    tasks?: TaskListRelationFilter
    lawsuits?: LawsuitListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    clientType?: SortOrder
    taxNumber?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    surname?: StringWithAggregatesFilter<"Client"> | string
    clientType?: EnumClientTypeWithAggregatesFilter<"Client"> | $Enums.ClientType
    taxNumber?: StringNullableWithAggregatesFilter<"Client"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdById?: IntWithAggregatesFilter<"Client"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type LawsuitWhereInput = {
    AND?: LawsuitWhereInput | LawsuitWhereInput[]
    OR?: LawsuitWhereInput[]
    NOT?: LawsuitWhereInput | LawsuitWhereInput[]
    id?: IntFilter<"Lawsuit"> | number
    caseNumber?: StringFilter<"Lawsuit"> | string
    caseType?: StringFilter<"Lawsuit"> | string
    court?: StringFilter<"Lawsuit"> | string
    status?: EnumCaseStatusFilter<"Lawsuit"> | $Enums.CaseStatus
    description?: StringNullableFilter<"Lawsuit"> | string | null
    startDate?: DateTimeFilter<"Lawsuit"> | Date | string
    endDate?: DateTimeNullableFilter<"Lawsuit"> | Date | string | null
    clientId?: IntFilter<"Lawsuit"> | number
    lawyerId?: IntFilter<"Lawsuit"> | number
    opposingParty?: StringNullableFilter<"Lawsuit"> | string | null
    createdAt?: DateTimeFilter<"Lawsuit"> | Date | string
    updatedAt?: DateTimeFilter<"Lawsuit"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    tasks?: TaskListRelationFilter
    lawyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LawsuitOrderByWithRelationInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    caseType?: SortOrder
    court?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    opposingParty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    lawyer?: UserOrderByWithRelationInput
  }

  export type LawsuitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    caseNumber?: string
    AND?: LawsuitWhereInput | LawsuitWhereInput[]
    OR?: LawsuitWhereInput[]
    NOT?: LawsuitWhereInput | LawsuitWhereInput[]
    caseType?: StringFilter<"Lawsuit"> | string
    court?: StringFilter<"Lawsuit"> | string
    status?: EnumCaseStatusFilter<"Lawsuit"> | $Enums.CaseStatus
    description?: StringNullableFilter<"Lawsuit"> | string | null
    startDate?: DateTimeFilter<"Lawsuit"> | Date | string
    endDate?: DateTimeNullableFilter<"Lawsuit"> | Date | string | null
    clientId?: IntFilter<"Lawsuit"> | number
    lawyerId?: IntFilter<"Lawsuit"> | number
    opposingParty?: StringNullableFilter<"Lawsuit"> | string | null
    createdAt?: DateTimeFilter<"Lawsuit"> | Date | string
    updatedAt?: DateTimeFilter<"Lawsuit"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    tasks?: TaskListRelationFilter
    lawyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "caseNumber">

  export type LawsuitOrderByWithAggregationInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    caseType?: SortOrder
    court?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    opposingParty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LawsuitCountOrderByAggregateInput
    _avg?: LawsuitAvgOrderByAggregateInput
    _max?: LawsuitMaxOrderByAggregateInput
    _min?: LawsuitMinOrderByAggregateInput
    _sum?: LawsuitSumOrderByAggregateInput
  }

  export type LawsuitScalarWhereWithAggregatesInput = {
    AND?: LawsuitScalarWhereWithAggregatesInput | LawsuitScalarWhereWithAggregatesInput[]
    OR?: LawsuitScalarWhereWithAggregatesInput[]
    NOT?: LawsuitScalarWhereWithAggregatesInput | LawsuitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lawsuit"> | number
    caseNumber?: StringWithAggregatesFilter<"Lawsuit"> | string
    caseType?: StringWithAggregatesFilter<"Lawsuit"> | string
    court?: StringWithAggregatesFilter<"Lawsuit"> | string
    status?: EnumCaseStatusWithAggregatesFilter<"Lawsuit"> | $Enums.CaseStatus
    description?: StringNullableWithAggregatesFilter<"Lawsuit"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Lawsuit"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Lawsuit"> | Date | string | null
    clientId?: IntWithAggregatesFilter<"Lawsuit"> | number
    lawyerId?: IntWithAggregatesFilter<"Lawsuit"> | number
    opposingParty?: StringNullableWithAggregatesFilter<"Lawsuit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lawsuit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lawsuit"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    addressLine?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    district?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringNullableFilter<"Address"> | string | null
    country?: StringFilter<"Address"> | string
    addressType?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    clientId?: IntFilter<"Address"> | number
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrder
    addressType?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    addressLine?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    district?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringNullableFilter<"Address"> | string | null
    country?: StringFilter<"Address"> | string
    addressType?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    clientId?: IntFilter<"Address"> | number
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrder
    addressType?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    addressLine?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    district?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringWithAggregatesFilter<"Address"> | string
    addressType?: EnumAddressTypeWithAggregatesFilter<"Address"> | $Enums.AddressType
    clientId?: IntWithAggregatesFilter<"Address"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdClients?: ClientCreateNestedManyWithoutCreatedByInput
    createdLawsuits?: LawsuitCreateNestedManyWithoutLawyerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdClients?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    createdLawsuits?: LawsuitUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdClients?: ClientUpdateManyWithoutCreatedByNestedInput
    createdLawsuits?: LawsuitUpdateManyWithoutLawyerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdClients?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    createdLawsuits?: LawsuitUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    type: $Enums.ContactType
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    description?: string | null
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    description?: string | null
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutTasksInput
    client?: ClientCreateNestedOneWithoutTasksInput
    lawsuit?: LawsuitCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    userId: number
    clientId?: number | null
    lawsuitId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutTasksNestedInput
    client?: ClientUpdateOneWithoutTasksNestedInput
    lawsuit?: LawsuitUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    lawsuitId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    userId: number
    clientId?: number | null
    lawsuitId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    lawsuitId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactCreateNestedManyWithoutClientInput
    addresses?: AddressCreateNestedManyWithoutClientInput
    tasks?: TaskCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitCreateNestedManyWithoutClientInput
    createdBy: UserCreateNestedOneWithoutCreatedClientsInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutClientInput
    addresses?: AddressUncheckedCreateNestedManyWithoutClientInput
    tasks?: TaskUncheckedCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutClientNestedInput
    addresses?: AddressUpdateManyWithoutClientNestedInput
    tasks?: TaskUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUpdateManyWithoutClientNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedClientsNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutClientNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutClientNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawsuitCreateInput = {
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutLawsuitsInput
    tasks?: TaskCreateNestedManyWithoutLawsuitInput
    lawyer: UserCreateNestedOneWithoutCreatedLawsuitsInput
  }

  export type LawsuitUncheckedCreateInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    clientId: number
    lawyerId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutLawsuitInput
  }

  export type LawsuitUpdateInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLawsuitsNestedInput
    tasks?: TaskUpdateManyWithoutLawsuitNestedInput
    lawyer?: UserUpdateOneRequiredWithoutCreatedLawsuitsNestedInput
  }

  export type LawsuitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutLawsuitNestedInput
  }

  export type LawsuitCreateManyInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    clientId: number
    lawyerId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawsuitUpdateManyMutationInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawsuitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    addressLine: string
    city: string
    district?: string | null
    postalCode?: string | null
    country?: string
    addressType?: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    addressLine: string
    city: string
    district?: string | null
    postalCode?: string | null
    country?: string
    addressType?: $Enums.AddressType
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: number
    addressLine: string
    city: string
    district?: string | null
    postalCode?: string | null
    country?: string
    addressType?: $Enums.AddressType
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type LawsuitListRelationFilter = {
    every?: LawsuitWhereInput
    some?: LawsuitWhereInput
    none?: LawsuitWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawsuitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type EnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type EnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LawsuitNullableScalarRelationFilter = {
    is?: LawsuitWhereInput | null
    isNot?: LawsuitWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    lawsuitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    lawsuitId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    lawsuitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    lawsuitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    lawsuitId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumClientTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeFilter<$PrismaModel> | $Enums.ClientType
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    clientType?: SortOrder
    taxNumber?: SortOrder
    companyName?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    clientType?: SortOrder
    taxNumber?: SortOrder
    companyName?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    clientType?: SortOrder
    taxNumber?: SortOrder
    companyName?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EnumClientTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClientType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientTypeFilter<$PrismaModel>
    _max?: NestedEnumClientTypeFilter<$PrismaModel>
  }

  export type EnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type LawsuitCountOrderByAggregateInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    caseType?: SortOrder
    court?: SortOrder
    status?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    opposingParty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawsuitAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawsuitMaxOrderByAggregateInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    caseType?: SortOrder
    court?: SortOrder
    status?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    opposingParty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawsuitMinOrderByAggregateInput = {
    id?: SortOrder
    caseNumber?: SortOrder
    caseType?: SortOrder
    court?: SortOrder
    status?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    opposingParty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawsuitSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type EnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type EnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    district?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    district?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    addressLine?: SortOrder
    city?: SortOrder
    district?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type EnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type LawsuitCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawsuitCreateWithoutLawyerInput, LawsuitUncheckedCreateWithoutLawyerInput> | LawsuitCreateWithoutLawyerInput[] | LawsuitUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutLawyerInput | LawsuitCreateOrConnectWithoutLawyerInput[]
    createMany?: LawsuitCreateManyLawyerInputEnvelope
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type LawsuitUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawsuitCreateWithoutLawyerInput, LawsuitUncheckedCreateWithoutLawyerInput> | LawsuitCreateWithoutLawyerInput[] | LawsuitUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutLawyerInput | LawsuitCreateOrConnectWithoutLawyerInput[]
    createMany?: LawsuitCreateManyLawyerInputEnvelope
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCreatedByInput | ClientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCreatedByInput | ClientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCreatedByInput | ClientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type LawsuitUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawsuitCreateWithoutLawyerInput, LawsuitUncheckedCreateWithoutLawyerInput> | LawsuitCreateWithoutLawyerInput[] | LawsuitUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutLawyerInput | LawsuitCreateOrConnectWithoutLawyerInput[]
    upsert?: LawsuitUpsertWithWhereUniqueWithoutLawyerInput | LawsuitUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawsuitCreateManyLawyerInputEnvelope
    set?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    disconnect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    delete?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    update?: LawsuitUpdateWithWhereUniqueWithoutLawyerInput | LawsuitUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawsuitUpdateManyWithWhereWithoutLawyerInput | LawsuitUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawsuitScalarWhereInput | LawsuitScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCreatedByInput | ClientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCreatedByInput | ClientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCreatedByInput | ClientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type LawsuitUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawsuitCreateWithoutLawyerInput, LawsuitUncheckedCreateWithoutLawyerInput> | LawsuitCreateWithoutLawyerInput[] | LawsuitUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutLawyerInput | LawsuitCreateOrConnectWithoutLawyerInput[]
    upsert?: LawsuitUpsertWithWhereUniqueWithoutLawyerInput | LawsuitUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawsuitCreateManyLawyerInputEnvelope
    set?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    disconnect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    delete?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    update?: LawsuitUpdateWithWhereUniqueWithoutLawyerInput | LawsuitUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawsuitUpdateManyWithWhereWithoutLawyerInput | LawsuitUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawsuitScalarWhereInput | LawsuitScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutContactsInput = {
    create?: XOR<ClientCreateWithoutContactsInput, ClientUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutContactsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumContactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContactType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateOneWithoutContactsNestedInput = {
    create?: XOR<ClientCreateWithoutContactsInput, ClientUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutContactsInput
    upsert?: ClientUpsertWithoutContactsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutContactsInput, ClientUpdateWithoutContactsInput>, ClientUncheckedUpdateWithoutContactsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutTasksInput = {
    create?: XOR<ClientCreateWithoutTasksInput, ClientUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTasksInput
    connect?: ClientWhereUniqueInput
  }

  export type LawsuitCreateNestedOneWithoutTasksInput = {
    create?: XOR<LawsuitCreateWithoutTasksInput, LawsuitUncheckedCreateWithoutTasksInput>
    connectOrCreate?: LawsuitCreateOrConnectWithoutTasksInput
    connect?: LawsuitWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type ClientUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ClientCreateWithoutTasksInput, ClientUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTasksInput
    upsert?: ClientUpsertWithoutTasksInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTasksInput, ClientUpdateWithoutTasksInput>, ClientUncheckedUpdateWithoutTasksInput>
  }

  export type LawsuitUpdateOneWithoutTasksNestedInput = {
    create?: XOR<LawsuitCreateWithoutTasksInput, LawsuitUncheckedCreateWithoutTasksInput>
    connectOrCreate?: LawsuitCreateOrConnectWithoutTasksInput
    upsert?: LawsuitUpsertWithoutTasksInput
    disconnect?: LawsuitWhereInput | boolean
    delete?: LawsuitWhereInput | boolean
    connect?: LawsuitWhereUniqueInput
    update?: XOR<XOR<LawsuitUpdateToOneWithWhereWithoutTasksInput, LawsuitUpdateWithoutTasksInput>, LawsuitUncheckedUpdateWithoutTasksInput>
  }

  export type ContactCreateNestedManyWithoutClientInput = {
    create?: XOR<ContactCreateWithoutClientInput, ContactUncheckedCreateWithoutClientInput> | ContactCreateWithoutClientInput[] | ContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutClientInput | ContactCreateOrConnectWithoutClientInput[]
    createMany?: ContactCreateManyClientInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutClientInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput> | AddressCreateWithoutClientInput[] | AddressUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | AddressCreateOrConnectWithoutClientInput[]
    createMany?: AddressCreateManyClientInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutClientInput = {
    create?: XOR<TaskCreateWithoutClientInput, TaskUncheckedCreateWithoutClientInput> | TaskCreateWithoutClientInput[] | TaskUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutClientInput | TaskCreateOrConnectWithoutClientInput[]
    createMany?: TaskCreateManyClientInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type LawsuitCreateNestedManyWithoutClientInput = {
    create?: XOR<LawsuitCreateWithoutClientInput, LawsuitUncheckedCreateWithoutClientInput> | LawsuitCreateWithoutClientInput[] | LawsuitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutClientInput | LawsuitCreateOrConnectWithoutClientInput[]
    createMany?: LawsuitCreateManyClientInputEnvelope
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedClientsInput = {
    create?: XOR<UserCreateWithoutCreatedClientsInput, UserUncheckedCreateWithoutCreatedClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ContactCreateWithoutClientInput, ContactUncheckedCreateWithoutClientInput> | ContactCreateWithoutClientInput[] | ContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutClientInput | ContactCreateOrConnectWithoutClientInput[]
    createMany?: ContactCreateManyClientInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput> | AddressCreateWithoutClientInput[] | AddressUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | AddressCreateOrConnectWithoutClientInput[]
    createMany?: AddressCreateManyClientInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TaskCreateWithoutClientInput, TaskUncheckedCreateWithoutClientInput> | TaskCreateWithoutClientInput[] | TaskUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutClientInput | TaskCreateOrConnectWithoutClientInput[]
    createMany?: TaskCreateManyClientInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type LawsuitUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<LawsuitCreateWithoutClientInput, LawsuitUncheckedCreateWithoutClientInput> | LawsuitCreateWithoutClientInput[] | LawsuitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutClientInput | LawsuitCreateOrConnectWithoutClientInput[]
    createMany?: LawsuitCreateManyClientInputEnvelope
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
  }

  export type EnumClientTypeFieldUpdateOperationsInput = {
    set?: $Enums.ClientType
  }

  export type ContactUpdateManyWithoutClientNestedInput = {
    create?: XOR<ContactCreateWithoutClientInput, ContactUncheckedCreateWithoutClientInput> | ContactCreateWithoutClientInput[] | ContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutClientInput | ContactCreateOrConnectWithoutClientInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutClientInput | ContactUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ContactCreateManyClientInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutClientInput | ContactUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutClientInput | ContactUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutClientNestedInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput> | AddressCreateWithoutClientInput[] | AddressUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | AddressCreateOrConnectWithoutClientInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutClientInput | AddressUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AddressCreateManyClientInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutClientInput | AddressUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutClientInput | AddressUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutClientNestedInput = {
    create?: XOR<TaskCreateWithoutClientInput, TaskUncheckedCreateWithoutClientInput> | TaskCreateWithoutClientInput[] | TaskUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutClientInput | TaskCreateOrConnectWithoutClientInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutClientInput | TaskUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TaskCreateManyClientInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutClientInput | TaskUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutClientInput | TaskUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type LawsuitUpdateManyWithoutClientNestedInput = {
    create?: XOR<LawsuitCreateWithoutClientInput, LawsuitUncheckedCreateWithoutClientInput> | LawsuitCreateWithoutClientInput[] | LawsuitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutClientInput | LawsuitCreateOrConnectWithoutClientInput[]
    upsert?: LawsuitUpsertWithWhereUniqueWithoutClientInput | LawsuitUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LawsuitCreateManyClientInputEnvelope
    set?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    disconnect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    delete?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    update?: LawsuitUpdateWithWhereUniqueWithoutClientInput | LawsuitUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LawsuitUpdateManyWithWhereWithoutClientInput | LawsuitUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LawsuitScalarWhereInput | LawsuitScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedClientsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedClientsInput, UserUncheckedCreateWithoutCreatedClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedClientsInput
    upsert?: UserUpsertWithoutCreatedClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedClientsInput, UserUpdateWithoutCreatedClientsInput>, UserUncheckedUpdateWithoutCreatedClientsInput>
  }

  export type ContactUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ContactCreateWithoutClientInput, ContactUncheckedCreateWithoutClientInput> | ContactCreateWithoutClientInput[] | ContactUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutClientInput | ContactCreateOrConnectWithoutClientInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutClientInput | ContactUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ContactCreateManyClientInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutClientInput | ContactUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutClientInput | ContactUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput> | AddressCreateWithoutClientInput[] | AddressUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | AddressCreateOrConnectWithoutClientInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutClientInput | AddressUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AddressCreateManyClientInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutClientInput | AddressUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutClientInput | AddressUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TaskCreateWithoutClientInput, TaskUncheckedCreateWithoutClientInput> | TaskCreateWithoutClientInput[] | TaskUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutClientInput | TaskCreateOrConnectWithoutClientInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutClientInput | TaskUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TaskCreateManyClientInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutClientInput | TaskUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutClientInput | TaskUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type LawsuitUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<LawsuitCreateWithoutClientInput, LawsuitUncheckedCreateWithoutClientInput> | LawsuitCreateWithoutClientInput[] | LawsuitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LawsuitCreateOrConnectWithoutClientInput | LawsuitCreateOrConnectWithoutClientInput[]
    upsert?: LawsuitUpsertWithWhereUniqueWithoutClientInput | LawsuitUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LawsuitCreateManyClientInputEnvelope
    set?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    disconnect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    delete?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    connect?: LawsuitWhereUniqueInput | LawsuitWhereUniqueInput[]
    update?: LawsuitUpdateWithWhereUniqueWithoutClientInput | LawsuitUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LawsuitUpdateManyWithWhereWithoutClientInput | LawsuitUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LawsuitScalarWhereInput | LawsuitScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutLawsuitsInput = {
    create?: XOR<ClientCreateWithoutLawsuitsInput, ClientUncheckedCreateWithoutLawsuitsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLawsuitsInput
    connect?: ClientWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutLawsuitInput = {
    create?: XOR<TaskCreateWithoutLawsuitInput, TaskUncheckedCreateWithoutLawsuitInput> | TaskCreateWithoutLawsuitInput[] | TaskUncheckedCreateWithoutLawsuitInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutLawsuitInput | TaskCreateOrConnectWithoutLawsuitInput[]
    createMany?: TaskCreateManyLawsuitInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedLawsuitsInput = {
    create?: XOR<UserCreateWithoutCreatedLawsuitsInput, UserUncheckedCreateWithoutCreatedLawsuitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLawsuitsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutLawsuitInput = {
    create?: XOR<TaskCreateWithoutLawsuitInput, TaskUncheckedCreateWithoutLawsuitInput> | TaskCreateWithoutLawsuitInput[] | TaskUncheckedCreateWithoutLawsuitInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutLawsuitInput | TaskCreateOrConnectWithoutLawsuitInput[]
    createMany?: TaskCreateManyLawsuitInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus
  }

  export type ClientUpdateOneRequiredWithoutLawsuitsNestedInput = {
    create?: XOR<ClientCreateWithoutLawsuitsInput, ClientUncheckedCreateWithoutLawsuitsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLawsuitsInput
    upsert?: ClientUpsertWithoutLawsuitsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutLawsuitsInput, ClientUpdateWithoutLawsuitsInput>, ClientUncheckedUpdateWithoutLawsuitsInput>
  }

  export type TaskUpdateManyWithoutLawsuitNestedInput = {
    create?: XOR<TaskCreateWithoutLawsuitInput, TaskUncheckedCreateWithoutLawsuitInput> | TaskCreateWithoutLawsuitInput[] | TaskUncheckedCreateWithoutLawsuitInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutLawsuitInput | TaskCreateOrConnectWithoutLawsuitInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutLawsuitInput | TaskUpsertWithWhereUniqueWithoutLawsuitInput[]
    createMany?: TaskCreateManyLawsuitInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutLawsuitInput | TaskUpdateWithWhereUniqueWithoutLawsuitInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutLawsuitInput | TaskUpdateManyWithWhereWithoutLawsuitInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedLawsuitsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedLawsuitsInput, UserUncheckedCreateWithoutCreatedLawsuitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLawsuitsInput
    upsert?: UserUpsertWithoutCreatedLawsuitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedLawsuitsInput, UserUpdateWithoutCreatedLawsuitsInput>, UserUncheckedUpdateWithoutCreatedLawsuitsInput>
  }

  export type TaskUncheckedUpdateManyWithoutLawsuitNestedInput = {
    create?: XOR<TaskCreateWithoutLawsuitInput, TaskUncheckedCreateWithoutLawsuitInput> | TaskCreateWithoutLawsuitInput[] | TaskUncheckedCreateWithoutLawsuitInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutLawsuitInput | TaskCreateOrConnectWithoutLawsuitInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutLawsuitInput | TaskUpsertWithWhereUniqueWithoutLawsuitInput[]
    createMany?: TaskCreateManyLawsuitInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutLawsuitInput | TaskUpdateWithWhereUniqueWithoutLawsuitInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutLawsuitInput | TaskUpdateManyWithWhereWithoutLawsuitInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAddressesInput = {
    create?: XOR<ClientCreateWithoutAddressesInput, ClientUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAddressesInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumAddressTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddressType
  }

  export type ClientUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<ClientCreateWithoutAddressesInput, ClientUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAddressesInput
    upsert?: ClientUpsertWithoutAddressesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAddressesInput, ClientUpdateWithoutAddressesInput>, ClientUncheckedUpdateWithoutAddressesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedEnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactType[] | ListEnumContactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumClientTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeFilter<$PrismaModel> | $Enums.ClientType
  }

  export type NestedEnumClientTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClientType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientTypeFilter<$PrismaModel>
    _max?: NestedEnumClientTypeFilter<$PrismaModel>
  }

  export type NestedEnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type NestedEnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type TaskCreateWithoutAssignedToInput = {
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutTasksInput
    lawsuit?: LawsuitCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    clientId?: number | null
    lawsuitId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutCreatedByInput = {
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactCreateNestedManyWithoutClientInput
    addresses?: AddressCreateNestedManyWithoutClientInput
    tasks?: TaskCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutClientInput
    addresses?: AddressUncheckedCreateNestedManyWithoutClientInput
    tasks?: TaskUncheckedCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput>
  }

  export type ClientCreateManyCreatedByInputEnvelope = {
    data: ClientCreateManyCreatedByInput | ClientCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LawsuitCreateWithoutLawyerInput = {
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutLawsuitsInput
    tasks?: TaskCreateNestedManyWithoutLawsuitInput
  }

  export type LawsuitUncheckedCreateWithoutLawyerInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    clientId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutLawsuitInput
  }

  export type LawsuitCreateOrConnectWithoutLawyerInput = {
    where: LawsuitWhereUniqueInput
    create: XOR<LawsuitCreateWithoutLawyerInput, LawsuitUncheckedCreateWithoutLawyerInput>
  }

  export type LawsuitCreateManyLawyerInputEnvelope = {
    data: LawsuitCreateManyLawyerInput | LawsuitCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    userId?: IntFilter<"Task"> | number
    clientId?: IntNullableFilter<"Task"> | number | null
    lawsuitId?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type ClientUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutCreatedByInput, ClientUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutCreatedByInput, ClientUncheckedUpdateWithoutCreatedByInput>
  }

  export type ClientUpdateManyWithWhereWithoutCreatedByInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    surname?: StringFilter<"Client"> | string
    clientType?: EnumClientTypeFilter<"Client"> | $Enums.ClientType
    taxNumber?: StringNullableFilter<"Client"> | string | null
    companyName?: StringNullableFilter<"Client"> | string | null
    createdById?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type LawsuitUpsertWithWhereUniqueWithoutLawyerInput = {
    where: LawsuitWhereUniqueInput
    update: XOR<LawsuitUpdateWithoutLawyerInput, LawsuitUncheckedUpdateWithoutLawyerInput>
    create: XOR<LawsuitCreateWithoutLawyerInput, LawsuitUncheckedCreateWithoutLawyerInput>
  }

  export type LawsuitUpdateWithWhereUniqueWithoutLawyerInput = {
    where: LawsuitWhereUniqueInput
    data: XOR<LawsuitUpdateWithoutLawyerInput, LawsuitUncheckedUpdateWithoutLawyerInput>
  }

  export type LawsuitUpdateManyWithWhereWithoutLawyerInput = {
    where: LawsuitScalarWhereInput
    data: XOR<LawsuitUpdateManyMutationInput, LawsuitUncheckedUpdateManyWithoutLawyerInput>
  }

  export type LawsuitScalarWhereInput = {
    AND?: LawsuitScalarWhereInput | LawsuitScalarWhereInput[]
    OR?: LawsuitScalarWhereInput[]
    NOT?: LawsuitScalarWhereInput | LawsuitScalarWhereInput[]
    id?: IntFilter<"Lawsuit"> | number
    caseNumber?: StringFilter<"Lawsuit"> | string
    caseType?: StringFilter<"Lawsuit"> | string
    court?: StringFilter<"Lawsuit"> | string
    status?: EnumCaseStatusFilter<"Lawsuit"> | $Enums.CaseStatus
    description?: StringNullableFilter<"Lawsuit"> | string | null
    startDate?: DateTimeFilter<"Lawsuit"> | Date | string
    endDate?: DateTimeNullableFilter<"Lawsuit"> | Date | string | null
    clientId?: IntFilter<"Lawsuit"> | number
    lawyerId?: IntFilter<"Lawsuit"> | number
    opposingParty?: StringNullableFilter<"Lawsuit"> | string | null
    createdAt?: DateTimeFilter<"Lawsuit"> | Date | string
    updatedAt?: DateTimeFilter<"Lawsuit"> | Date | string
  }

  export type ClientCreateWithoutContactsInput = {
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutClientInput
    tasks?: TaskCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitCreateNestedManyWithoutClientInput
    createdBy: UserCreateNestedOneWithoutCreatedClientsInput
  }

  export type ClientUncheckedCreateWithoutContactsInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutClientInput
    tasks?: TaskUncheckedCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutContactsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutContactsInput, ClientUncheckedCreateWithoutContactsInput>
  }

  export type ClientUpsertWithoutContactsInput = {
    update: XOR<ClientUpdateWithoutContactsInput, ClientUncheckedUpdateWithoutContactsInput>
    create: XOR<ClientCreateWithoutContactsInput, ClientUncheckedCreateWithoutContactsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutContactsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutContactsInput, ClientUncheckedUpdateWithoutContactsInput>
  }

  export type ClientUpdateWithoutContactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutClientNestedInput
    tasks?: TaskUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUpdateManyWithoutClientNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutClientNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateWithoutTasksInput = {
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    createdClients?: ClientCreateNestedManyWithoutCreatedByInput
    createdLawsuits?: LawsuitCreateNestedManyWithoutLawyerInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    createdClients?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    createdLawsuits?: LawsuitUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type ClientCreateWithoutTasksInput = {
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactCreateNestedManyWithoutClientInput
    addresses?: AddressCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitCreateNestedManyWithoutClientInput
    createdBy: UserCreateNestedOneWithoutCreatedClientsInput
  }

  export type ClientUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutClientInput
    addresses?: AddressUncheckedCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTasksInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTasksInput, ClientUncheckedCreateWithoutTasksInput>
  }

  export type LawsuitCreateWithoutTasksInput = {
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutLawsuitsInput
    lawyer: UserCreateNestedOneWithoutCreatedLawsuitsInput
  }

  export type LawsuitUncheckedCreateWithoutTasksInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    clientId: number
    lawyerId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawsuitCreateOrConnectWithoutTasksInput = {
    where: LawsuitWhereUniqueInput
    create: XOR<LawsuitCreateWithoutTasksInput, LawsuitUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdClients?: ClientUpdateManyWithoutCreatedByNestedInput
    createdLawsuits?: LawsuitUpdateManyWithoutLawyerNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdClients?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    createdLawsuits?: LawsuitUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type ClientUpsertWithoutTasksInput = {
    update: XOR<ClientUpdateWithoutTasksInput, ClientUncheckedUpdateWithoutTasksInput>
    create: XOR<ClientCreateWithoutTasksInput, ClientUncheckedCreateWithoutTasksInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTasksInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTasksInput, ClientUncheckedUpdateWithoutTasksInput>
  }

  export type ClientUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutClientNestedInput
    addresses?: AddressUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUpdateManyWithoutClientNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutClientNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type LawsuitUpsertWithoutTasksInput = {
    update: XOR<LawsuitUpdateWithoutTasksInput, LawsuitUncheckedUpdateWithoutTasksInput>
    create: XOR<LawsuitCreateWithoutTasksInput, LawsuitUncheckedCreateWithoutTasksInput>
    where?: LawsuitWhereInput
  }

  export type LawsuitUpdateToOneWithWhereWithoutTasksInput = {
    where?: LawsuitWhereInput
    data: XOR<LawsuitUpdateWithoutTasksInput, LawsuitUncheckedUpdateWithoutTasksInput>
  }

  export type LawsuitUpdateWithoutTasksInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLawsuitsNestedInput
    lawyer?: UserUpdateOneRequiredWithoutCreatedLawsuitsNestedInput
  }

  export type LawsuitUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateWithoutClientInput = {
    type: $Enums.ContactType
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutClientInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutClientInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutClientInput, ContactUncheckedCreateWithoutClientInput>
  }

  export type ContactCreateManyClientInputEnvelope = {
    data: ContactCreateManyClientInput | ContactCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutClientInput = {
    addressLine: string
    city: string
    district?: string | null
    postalCode?: string | null
    country?: string
    addressType?: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutClientInput = {
    id?: number
    addressLine: string
    city: string
    district?: string | null
    postalCode?: string | null
    country?: string
    addressType?: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutClientInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
  }

  export type AddressCreateManyClientInputEnvelope = {
    data: AddressCreateManyClientInput | AddressCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutClientInput = {
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutTasksInput
    lawsuit?: LawsuitCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutClientInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    userId: number
    lawsuitId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutClientInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutClientInput, TaskUncheckedCreateWithoutClientInput>
  }

  export type TaskCreateManyClientInputEnvelope = {
    data: TaskCreateManyClientInput | TaskCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type LawsuitCreateWithoutClientInput = {
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutLawsuitInput
    lawyer: UserCreateNestedOneWithoutCreatedLawsuitsInput
  }

  export type LawsuitUncheckedCreateWithoutClientInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    lawyerId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutLawsuitInput
  }

  export type LawsuitCreateOrConnectWithoutClientInput = {
    where: LawsuitWhereUniqueInput
    create: XOR<LawsuitCreateWithoutClientInput, LawsuitUncheckedCreateWithoutClientInput>
  }

  export type LawsuitCreateManyClientInputEnvelope = {
    data: LawsuitCreateManyClientInput | LawsuitCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedClientsInput = {
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdLawsuits?: LawsuitCreateNestedManyWithoutLawyerInput
  }

  export type UserUncheckedCreateWithoutCreatedClientsInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdLawsuits?: LawsuitUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type UserCreateOrConnectWithoutCreatedClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedClientsInput, UserUncheckedCreateWithoutCreatedClientsInput>
  }

  export type ContactUpsertWithWhereUniqueWithoutClientInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutClientInput, ContactUncheckedUpdateWithoutClientInput>
    create: XOR<ContactCreateWithoutClientInput, ContactUncheckedCreateWithoutClientInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutClientInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutClientInput, ContactUncheckedUpdateWithoutClientInput>
  }

  export type ContactUpdateManyWithWhereWithoutClientInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutClientInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: IntFilter<"Contact"> | number
    type?: EnumContactTypeFilter<"Contact"> | $Enums.ContactType
    value?: StringFilter<"Contact"> | string
    description?: StringNullableFilter<"Contact"> | string | null
    clientId?: IntNullableFilter<"Contact"> | number | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type AddressUpsertWithWhereUniqueWithoutClientInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutClientInput, AddressUncheckedUpdateWithoutClientInput>
    create: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutClientInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutClientInput, AddressUncheckedUpdateWithoutClientInput>
  }

  export type AddressUpdateManyWithWhereWithoutClientInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutClientInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    addressLine?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    district?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringNullableFilter<"Address"> | string | null
    country?: StringFilter<"Address"> | string
    addressType?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    clientId?: IntFilter<"Address"> | number
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutClientInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutClientInput, TaskUncheckedUpdateWithoutClientInput>
    create: XOR<TaskCreateWithoutClientInput, TaskUncheckedCreateWithoutClientInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutClientInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutClientInput, TaskUncheckedUpdateWithoutClientInput>
  }

  export type TaskUpdateManyWithWhereWithoutClientInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutClientInput>
  }

  export type LawsuitUpsertWithWhereUniqueWithoutClientInput = {
    where: LawsuitWhereUniqueInput
    update: XOR<LawsuitUpdateWithoutClientInput, LawsuitUncheckedUpdateWithoutClientInput>
    create: XOR<LawsuitCreateWithoutClientInput, LawsuitUncheckedCreateWithoutClientInput>
  }

  export type LawsuitUpdateWithWhereUniqueWithoutClientInput = {
    where: LawsuitWhereUniqueInput
    data: XOR<LawsuitUpdateWithoutClientInput, LawsuitUncheckedUpdateWithoutClientInput>
  }

  export type LawsuitUpdateManyWithWhereWithoutClientInput = {
    where: LawsuitScalarWhereInput
    data: XOR<LawsuitUpdateManyMutationInput, LawsuitUncheckedUpdateManyWithoutClientInput>
  }

  export type UserUpsertWithoutCreatedClientsInput = {
    update: XOR<UserUpdateWithoutCreatedClientsInput, UserUncheckedUpdateWithoutCreatedClientsInput>
    create: XOR<UserCreateWithoutCreatedClientsInput, UserUncheckedCreateWithoutCreatedClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedClientsInput, UserUncheckedUpdateWithoutCreatedClientsInput>
  }

  export type UserUpdateWithoutCreatedClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdLawsuits?: LawsuitUpdateManyWithoutLawyerNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdLawsuits?: LawsuitUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type ClientCreateWithoutLawsuitsInput = {
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactCreateNestedManyWithoutClientInput
    addresses?: AddressCreateNestedManyWithoutClientInput
    tasks?: TaskCreateNestedManyWithoutClientInput
    createdBy: UserCreateNestedOneWithoutCreatedClientsInput
  }

  export type ClientUncheckedCreateWithoutLawsuitsInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutClientInput
    addresses?: AddressUncheckedCreateNestedManyWithoutClientInput
    tasks?: TaskUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutLawsuitsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutLawsuitsInput, ClientUncheckedCreateWithoutLawsuitsInput>
  }

  export type TaskCreateWithoutLawsuitInput = {
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutTasksInput
    client?: ClientCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutLawsuitInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    userId: number
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutLawsuitInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutLawsuitInput, TaskUncheckedCreateWithoutLawsuitInput>
  }

  export type TaskCreateManyLawsuitInputEnvelope = {
    data: TaskCreateManyLawsuitInput | TaskCreateManyLawsuitInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedLawsuitsInput = {
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdClients?: ClientCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedLawsuitsInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdClients?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedLawsuitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedLawsuitsInput, UserUncheckedCreateWithoutCreatedLawsuitsInput>
  }

  export type ClientUpsertWithoutLawsuitsInput = {
    update: XOR<ClientUpdateWithoutLawsuitsInput, ClientUncheckedUpdateWithoutLawsuitsInput>
    create: XOR<ClientCreateWithoutLawsuitsInput, ClientUncheckedCreateWithoutLawsuitsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutLawsuitsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutLawsuitsInput, ClientUncheckedUpdateWithoutLawsuitsInput>
  }

  export type ClientUpdateWithoutLawsuitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutClientNestedInput
    addresses?: AddressUpdateManyWithoutClientNestedInput
    tasks?: TaskUpdateManyWithoutClientNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutLawsuitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutClientNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutClientNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutClientNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutLawsuitInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutLawsuitInput, TaskUncheckedUpdateWithoutLawsuitInput>
    create: XOR<TaskCreateWithoutLawsuitInput, TaskUncheckedCreateWithoutLawsuitInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutLawsuitInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutLawsuitInput, TaskUncheckedUpdateWithoutLawsuitInput>
  }

  export type TaskUpdateManyWithWhereWithoutLawsuitInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutLawsuitInput>
  }

  export type UserUpsertWithoutCreatedLawsuitsInput = {
    update: XOR<UserUpdateWithoutCreatedLawsuitsInput, UserUncheckedUpdateWithoutCreatedLawsuitsInput>
    create: XOR<UserCreateWithoutCreatedLawsuitsInput, UserUncheckedCreateWithoutCreatedLawsuitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedLawsuitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedLawsuitsInput, UserUncheckedUpdateWithoutCreatedLawsuitsInput>
  }

  export type UserUpdateWithoutCreatedLawsuitsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdClients?: ClientUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedLawsuitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdClients?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ClientCreateWithoutAddressesInput = {
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactCreateNestedManyWithoutClientInput
    tasks?: TaskCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitCreateNestedManyWithoutClientInput
    createdBy: UserCreateNestedOneWithoutCreatedClientsInput
  }

  export type ClientUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutClientInput
    tasks?: TaskUncheckedCreateNestedManyWithoutClientInput
    lawsuits?: LawsuitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAddressesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAddressesInput, ClientUncheckedCreateWithoutAddressesInput>
  }

  export type ClientUpsertWithoutAddressesInput = {
    update: XOR<ClientUpdateWithoutAddressesInput, ClientUncheckedUpdateWithoutAddressesInput>
    create: XOR<ClientCreateWithoutAddressesInput, ClientUncheckedCreateWithoutAddressesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAddressesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAddressesInput, ClientUncheckedUpdateWithoutAddressesInput>
  }

  export type ClientUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutClientNestedInput
    tasks?: TaskUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUpdateManyWithoutClientNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutClientNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type TaskCreateManyAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    clientId?: number | null
    lawsuitId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateManyCreatedByInput = {
    id?: number
    name: string
    surname: string
    clientType?: $Enums.ClientType
    taxNumber?: string | null
    companyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawsuitCreateManyLawyerInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    clientId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutTasksNestedInput
    lawsuit?: LawsuitUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    lawsuitId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    lawsuitId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutClientNestedInput
    addresses?: AddressUpdateManyWithoutClientNestedInput
    tasks?: TaskUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutClientNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutClientNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutClientNestedInput
    lawsuits?: LawsuitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    clientType?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    taxNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawsuitUpdateWithoutLawyerInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLawsuitsNestedInput
    tasks?: TaskUpdateManyWithoutLawsuitNestedInput
  }

  export type LawsuitUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutLawsuitNestedInput
  }

  export type LawsuitUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyClientInput = {
    id?: number
    type: $Enums.ContactType
    value: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateManyClientInput = {
    id?: number
    addressLine: string
    city: string
    district?: string | null
    postalCode?: string | null
    country?: string
    addressType?: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyClientInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    userId: number
    lawsuitId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawsuitCreateManyClientInput = {
    id?: number
    caseNumber: string
    caseType: string
    court: string
    status?: $Enums.CaseStatus
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    lawyerId: number
    opposingParty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateWithoutClientInput = {
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpdateWithoutClientInput = {
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutClientInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutTasksNestedInput
    lawsuit?: LawsuitUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userId?: IntFieldUpdateOperationsInput | number
    lawsuitId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userId?: IntFieldUpdateOperationsInput | number
    lawsuitId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawsuitUpdateWithoutClientInput = {
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutLawsuitNestedInput
    lawyer?: UserUpdateOneRequiredWithoutCreatedLawsuitsNestedInput
  }

  export type LawsuitUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lawyerId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutLawsuitNestedInput
  }

  export type LawsuitUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseNumber?: StringFieldUpdateOperationsInput | string
    caseType?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lawyerId?: IntFieldUpdateOperationsInput | number
    opposingParty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyLawsuitInput = {
    id?: number
    title: string
    description?: string | null
    dueDate?: Date | string | null
    priority?: $Enums.Priority
    status?: $Enums.TaskStatus
    userId: number
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutLawsuitInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutTasksNestedInput
    client?: ClientUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutLawsuitInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutLawsuitInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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