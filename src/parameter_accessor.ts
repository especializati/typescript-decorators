// Parameter decorator
function print(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`Decorating param ${parameterIndex} from ${propertyKey}`);
}

class TestClass {
    testMethod(param0: any, @print param1: any) {}
}

// Acessor decorator
const enumerable = (value: boolean) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        propertyDescriptor.enumerable = value;
    }
}

class Person {
    firstName: string = "Jon"
    lastName: string = "Doe"

    @enumerable(true)
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}