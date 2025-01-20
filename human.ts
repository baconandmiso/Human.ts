interface IHuman {
    /**
     * 話す
     */
    speak() : void;
}

class Japanese implements IHuman {
    speak(): void {
        console.log("こんにちは");
    }
}

class American implements IHuman {
    speak(): void {
        console.log("Hello");
    }
}

class Chinese implements IHuman {
    speak(): void {
        console.log("你好");
    }
}

class Parson implements IHuman {
    constructor(name) {
        this.name = name;
    }

    speak() : void {
        console.log(`こんにちは。私は${this.name}です。`);
    }
}

new Japanese().speak();
new American().speak();
new Chinese().speak();
new Parson("太郎").speak();
