function setAPIVersion (apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

function log(prefix: string) {
    return (target: any)  => {
        console.log(prefix, target)
    }
}

@setAPIVersion('v1.0.0')
class API {}
console.log(new API)

@setAPIVersion('v1.0.1')
@log('webhook version 01')
class Webhook {}
console.log(new Webhook)

export default {}