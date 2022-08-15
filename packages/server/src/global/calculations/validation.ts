type PrimitiveType = 'string';

type TypedObject<K extends PropertyKey> = {
  [key in K]: PrimitiveType;
};

const getErrorTemplate = (keyName: string) =>
  `${keyName} 의 타입이 올바르지 않습니다.`;

export const throwObjectTypeError = <T extends object>(
  object: T,
  typedObject: TypedObject<keyof T>
) => {
  Object.entries(typedObject).forEach(([k, v]) => {
    const currentValue = object[k as keyof T];
    const primitiveType = v as PrimitiveType;

    if (typeof currentValue !== primitiveType) {
      throw new Error(getErrorTemplate(k));
    }
  });
};
