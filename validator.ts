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
      enumerable: true,
      configurable: true,
    });
  };
}

export function NumberGreaterThan(number: number) {
  return function (target: any, propertyKey: string) {
    let value: number;

    function getter() {
      return value;
    }

    function setter(newValue: number) {
      if (typeof newValue !== "number") {
        throw new Error(`${propertyKey} must be at of type number`);
      }
      if (newValue <= number) {
        throw new Error(`${propertyKey} must be greater than ${number}`);
      }
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function Int() {
  return function (target: any, propertyKey: string) {
    let value: number;

    function getter() {
      return value;
    }

    function setter(newValue: number) {
      if (typeof newValue !== "number") {
        throw new Error(`${propertyKey} must be at of type number`);
      }
      if (newValue % 1 !== 0) {
        throw new Error(`${propertyKey} must be an integer`);
      }
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function ArrayLengthGreaterThan(number: number) {
  return function (target: any, propertyKey: string) {
    let value: any[];
    
    function getter() {
      return value;
    }
    
    function setter(newValue: any[]) {
      if (newValue.length <= number) {
        throw new Error(
          `${propertyKey}'s length must be greater than ${number}`
        );
      }
      value = newValue;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
