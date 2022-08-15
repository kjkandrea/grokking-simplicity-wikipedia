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
  Object.entries(typedObject).forEach(([k, v]) => {
    const currentValue = object[k as keyof T];
    const primitiveType = v as PrimitiveType;

    if (typeof currentValue !== primitiveType) {
      throw new Error(messageTemplate.typeError(k));
    }
  });
};

export const throwObjectValueEmptyError = <T extends object>(object: T) => {
  Object.entries(object).forEach(([k, v]) => {
    const value = typeof v === 'string' ? v.trim() : v;
    if (!value) {
      throw new Error(messageTemplate.emptyError(k));
    }
  });
};
