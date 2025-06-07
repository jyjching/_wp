// 定義 Animal 類別
class Animal {
    constructor(name) {
        this.name = name; // 動物名稱屬性
    }

    speak() {
        return `I am ${this.name}`; // 預設說話方式
    }
}

// 定義 Dog 類別，繼承 Animal
class Dog extends Animal {
    // 覆寫 speak 方法
    speak() {
        return `Woof! I am ${this.name}`; // 狗狗的說話方式
    }
}
