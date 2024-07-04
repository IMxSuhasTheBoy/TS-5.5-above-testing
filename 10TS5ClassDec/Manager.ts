// @sealed
// @printDecoratorData
// @withEmploymentDateOnPrototype
@withEmploymentDate
class Manager {

    task: string = 'Simple task'
    project: string = 'Simple project'

    constructor(){
        console.log('Initializing the Manager class')
    }
}

const manager = new Manager();
console.log(manager)


/**
 * A class decorator that adds an 'employmentDate' property to the given class.
 *
 * @param {T} baseClass - The class to decorate. explanation: T extends { new(...args: any[]): {} }: This is a generic type constraint. It specifies that the baseClass parameter must be a class type that has a constructor that takes any number of arguments and returns an object of type {}. The extends keyword is used to define a constraint on the type parameter T. | { new(...args: any[]): {} }: It represents a class type that has a constructor that takes any number of arguments and returns an object of type {}. The new keyword is used to indicate that the type is a constructor function.
 * @param {ClassDecoratorContext} context - The context of the decorator.
 * @return {class} - The decorated class with the 'employmentDate' property.
 * The function returns a new class that extends the baseClass. This new class has an additional property employmentDate which is set to the current date and time in ISO format. 
 * The constructor of the new class calls the constructor of the baseClass and logs a message indicating that the employmentDate property is being added to the baseClass.
 */
function withEmploymentDate<T extends { new(...args: any[]): {} }>(baseClass: T, context: ClassDecoratorContext) {
    return class extends baseClass {
        employmentDate = new Date().toISOString();
        constructor(...args: any[]) {
            super(...args);
            console.log('Adding employment date to ' + baseClass.name)
        }
    }
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
    function withEmploymentDateOnPrototype(value: Function, context: ClassDecoratorContext) {
        value.prototype.employmentDateOnPrototype = new Date().toISOString();
    }

    function printDecoratorData(value: Function, context: ClassDecoratorContext){
        console.log('value:')
        console.log(value)
        console.log('context')
        console.log(context)
        context.addInitializer(()=>{
            console.log('Initialized class ' + context.name)
        })
    }