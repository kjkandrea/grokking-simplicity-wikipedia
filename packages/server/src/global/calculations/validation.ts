type PrimitiveType = 'string';

type TypedObject<K extends PropertyKey> = {
  [key in K]: PrimitiveType;
};

const messageTemplate = {
  typeError: (keyName: string) => `${keyName} 의 타입이 올바르지 않습니다.`,
  emptyError: (keyName: string) => `${keyName} 의 값이 빈 값입니다.`,
} as const;

export const throwObjectTypeError = <T extends object>(
  object: T,
  typedObject: TypedObject<keyof T>
) => {
  const [problemKey] =
    Object.entries(typedObject).find(([k, v]) => {
      const currentValue = object[k as keyof T];
      const primitiveType = v as PrimitiveType;

      return typeof currentValue !== primitiveType;
    }) ?? [];

  if (problemKey) throw new Error(messageTemplate.typeError(problemKey));
};

export const throwObjectValueEmptyError = <T extends object>(object: T) => {
  const [problemKey] =
    Object.entries(object).find(([, v]) => {
      const value = typeof v === 'string' ? v.trim() : v;
      return !value;
    }) ?? [];

  if (problemKey) throw new Error(messageTemplate.emptyError(problemKey));
};
