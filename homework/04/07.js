class Vector {
    constructor(components) {
        this.components = components; // 儲存向量元素，例如 [1, 2, 3]
    }

    // 向量加法
    add(other) {
        this._checkLength(other);
        const result = this.components.map((val, i) => val + other.components[i]);
        return new Vector(result);
    }

    // 向量減法
    subtract(other) {
        this._checkLength(other);
        const result = this.components.map((val, i) => val - other.components[i]);
        return new Vector(result);
    }

    // 向量內積（dot product）
    dot(other) {
        this._checkLength(other);
        return this.components.reduce((sum, val, i) => sum + val * other.components[i], 0);
    }

    // 顯示向量內容
    toString() {
        return `Vector(${this.components.join(", ")})`;
    }

    // 檢查向量長度是否一致
    _checkLength(other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vector lengths must match");
        }
    }
}」
