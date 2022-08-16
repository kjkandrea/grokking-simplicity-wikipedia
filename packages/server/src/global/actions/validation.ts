type PrimitiveType = 'string' | 'number' | 'boolean';

type TypedObject<K extends PropertyKey> = {
  [key in K]: PrimitiveType;
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

function entries<T>(obj: T): Entries<T> {
  return Object.entries(obj) as any;
}

const messageTemplate = {
  typeError: (keyName: string) => `${keyName} 의 타입이 올바르지 않습니다.`,
  emptyError: (keyName: string) => `${keyName} 의 값이 빈 값입니다.`,
} as const;

export const throwObjectTypeError = <T extends object>(
  object: T,
  typedObject: TypedObject<keyof T>
) => {
  const [problemKey] =
    entries(typedObject).find(([k, primitiveType]) => {
      const currentValue = object[k];

      return typeof currentValue !== primitiveType;
    }) ?? [];

  if (problemKey)
    throw new Error(messageTemplate.typeError(problemKey.toString()));
};

export const throwObjectValueEmptyError = <T extends object>(object: T) => {
  const [problemKey] =
    entries(object).find(([, v]) => {
      if (Array.isArray(v)) return false;
      if (['number', 'boolean'].includes(typeof v)) return false;

      if (v === undefined || v === null) return true;

      const value = typeof v === 'string' ? v.trim() : v;
      return !value;
    }) ?? [];

  if (problemKey)
    throw new Error(messageTemplate.emptyError(problemKey.toString()));
};
