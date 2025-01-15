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

new Japanese().speak();
new American().speak();
new Chinese().speak();