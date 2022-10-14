function Get (url: string) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log(url, target, key, descriptor)
        const originalMethod = descriptor.value

        const currentUrl = '/contato'
        
        if (url === currentUrl) {
            originalMethod.apply()
        }

        return;
    }
}

class HomeController {
    @Get('/')
    public index() {
        console.log('HomeController@index')
    }

    @Get('/contato')
    public contact() {
        console.log('HomeController@contato')
    }
}

(new HomeController)

export default {}