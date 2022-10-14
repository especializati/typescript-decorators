import { setTextRange } from "typescript"

function minLength (length: number) {
    return (target: any, key: string) => {
        let val = target[key]
        
        const getter = () => val
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Value for ${key} need more then ${length}`)
            }

            val = value
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

class Category {
    @minLength(3)
    private title: string;

    constructor (t: string) {
        this.title = t
    }
}
console.log(new Category('Mobile'))

export default {}