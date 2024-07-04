var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// @sealed
// @printDecoratorData
// @withEmploymentDateOnPrototype
let Manager = (() => {
    let _classDecorators = [withEmploymentDate];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Manager = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Manager = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        task = 'Simple task';
        project = 'Simple project';
        constructor() {
            console.log('Initializing the Manager class');
        }
    };
    return Manager = _classThis;
})();
const manager = new Manager();
console.log(manager);
/**
 * A class decorator that adds an 'employmentDate' property to the given class.
 *
 * @param {T} baseClass - The class to decorate. explanation: T extends { new(...args: any[]): {} }: This is a generic type constraint. It specifies that the baseClass parameter must be a class type that has a constructor that takes any number of arguments and returns an object of type {}. The extends keyword is used to define a constraint on the type parameter T. | { new(...args: any[]): {} }: It represents a class type that has a constructor that takes any number of arguments and returns an object of type {}. The new keyword is used to indicate that the type is a constructor function.
 * @param {ClassDecoratorContext} context - The context of the decorator.
 * @return {class} - The decorated class with the 'employmentDate' property.
 * The function returns a new class that extends the baseClass. This new class has an additional property employmentDate which is set to the current date and time in ISO format.
 * The constructor of the new class calls the constructor of the baseClass and logs a message indicating that the employmentDate property is being added to the baseClass.
 */
function withEmploymentDate(baseClass, context) {
    return class extends baseClass {
        employmentDate = new Date().toISOString();
        constructor(...args) {
            super(...args);
            console.log('Adding employment date to ' + baseClass.name);
        }
    };
}
// function sealed(constructor: Function, context: ClassDecoratorContext) {
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
/**
 * Adds an employment date property to the prototype of the given class.
 *
 * @param {Function} value - The class to add the property to.
 * @param {ClassDecoratorContext} context - The context of the decorator.
 */
function withEmploymentDateOnPrototype(value, context) {
    value.prototype.employmentDateOnPrototype = new Date().toISOString();
}
function printDecoratorData(value, context) {
    console.log('value:');
    console.log(value);
    console.log('context');
    console.log(context);
    context.addInitializer(() => {
        console.log('Initialized class ' + context.name);
    });
}
