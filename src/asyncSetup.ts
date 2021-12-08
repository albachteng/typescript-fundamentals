class ThingWithAsyncSetup {
    setupPromise: Promise<any>
    isSetup: boolean

    constructor() {
        this.setupPromise = new Promise((resolve) => {
            this.isSetup = false
            return this.doSetup()
        }).then(() => {
            this.isSetup = true
        })
    }

    private async doSetup() {
        // async stuff
    }
}

