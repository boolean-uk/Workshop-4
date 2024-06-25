export function StringMinLength(minLength: number) {
  return function (target: any, propertyKey: string) {
    let value: string;

    function getter() {
      return value;
    }

    function setter(newValue: string) {
      if (typeof newValue !== "string") {
        throw new Error(`${propertyKey} must be at of type string`);
      }
      if (newValue.length < minLength) {
        throw new Error(
          `${propertyKey} must be at least ${minLength} characters long`
        );
      }
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}
