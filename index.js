"use strict";
class Color {
    constructor(color, alpha) {
        this.color = color;
        this.alpha = alpha;
    }
    get rgba() {
        return `rgba(${this.r},${this.g},${this.b},${this.alpha})`;
    }
    get rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    get r() {
        return this.color >> 16 & 0xFF;
    }
    get g() {
        return this.color >> 8 & 0xFF;
    }
    get b() {
        return this.color && 0xFF;
    }
}
class El {
    constructor(target, htmlType, id) {
        this.background = new Color(0xFFFFFF, 1.0);
        this.border = {
            color: new Color(0x000000, 1.0),
            size: 1,
            style: "solid"
        };
        this.element = document.createElement(htmlType);
        this.id = id;
        target.appendChild(this.element);
        this.setCss("position", "absolute", "boxSizing", "border-box");
    }
    setBackground(color, alpha = 1.0) {
        this.background = new Color(color, alpha);
        this.setCss("background-color", this.background.rgba);
    }
    setBorder(color, size, style, alpha = 1.0) {
        this.borderColor = color;
        this.borderAlpha = alpha;
        this.borderSize = size;
        this.borderStyle = style;
    }
    setCss(...propVal) {
        if (propVal.length % 2 == 1) {
            throw new RangeError("On attend un nombre pair de valeurs !");
        }
        for (let i = 0; i < propVal.length; i += 2) {
            this.css.setProperty(propVal[i], propVal[i + 1]);
        }
    }
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    get css() {
        return this.element.style;
    }
    get id() {
        return this.element.id;
    }
    set id(value) {
        this.element.id = value;
    }
    get backgroundColor() {
        return this.background.color;
    }
    set backgroundColor(value) {
        this.background.color = value;
        this.setCss("background-color", this.background.rgba);
    }
    get borderColor() {
        return this.border.color.color;
    }
    set borderColor(value) {
        this.border.color.color = value;
        this.setCss("border", `${this.border.size}px ${this.border.style} ${this.border.color.rgba}`);
    }
    get borderAlpha() {
        return this.border.color.alpha;
    }
    set borderAlpha(value) {
        this.border.color.alpha = value;
        this.setCss("border", `${this.border.size}px ${this.border.style} ${this.border.color.rgba}`);
    }
    get borderSize() {
        return this.border.size;
    }
    set borderSize(value) {
        this.border.size = value;
        this.setCss("border", `${this.border.size}px ${this.border.style} ${this.border.color.rgba}`);
    }
    get borderStyle() {
        return this.border.style;
    }
    set borderStyle(value) {
        this.border.style = value;
        this.setCss("border", `${this.border.size}px ${this.border.style} ${this.border.color.rgba}`);
    }
    get x() {
        let n = this.css.left;
        return n ? parseInt(n) : 0;
    }
    set x(value) {
        this.css.left = `${value}px`;
    }
    get y() {
        let n = this.css.top;
        return n ? parseInt(n) : 0;
    }
    set y(value) {
        this.css.top = `${value}px`;
    }
    get width() {
        let n = this.css.width;
        return n ? parseInt(n) : 0;
    }
    set width(value) {
        this.css.width = `${value}px`;
    }
    get height() {
        let n = this.css.height;
        return n ? parseInt(n) : 0;
    }
    set height(value) {
        this.css.height = `${value}px`;
    }
}
class Frame extends El {
    /**
     * Div rectangulaire colorée
     * @param target élément html parent
     * @param divId identifiant du cadre
     * @param x gauche du cadre (en pixels)
     * @param y haut du cadre (en pixels)
     * @param w largeur du cadre (en pixels)
     * @param h hauteur du cadre (en pixels)
     * @param radius arrondi des coins (en pixels)
     */
    constructor(target, divId, x, y, w, h, radius = 0) {
        super(target, "DIV", divId);
        this.setRect(x, y, w, h, radius);
    }
    /**
     * Définit l'aspect (fond et bordure) du cadre
     * @param bgColor couleur de fond
     * @param bdrColor couleur de bordure
     * @param bdrSize épaisseur de bordure
     * @param bdrStyle type de bordure ("solid|dotted|dashed|inset|outset|")
     * @param alpha opacité du cadre (0 = transparent ... 1 = opaque)
     */
    setStyle(bgColor, bdrColor, bdrSize, bdrStyle, alpha = 1.0) {
        this.setBackground(bgColor, alpha);
        this.setBorder(bdrColor, bdrSize, bdrStyle, alpha);
    }
    /**
     * Définit la position et la taille du cadre
     * @param y haut du cadre (en pixels)
     * @param w largeur du cadre (en pixels)
     * @param h hauteur du cadre (en pixels)
     * @param radius arrondi des coins (en pixels)
     */
    setRect(x, y, w, h, radius = 0) {
        this.setPos(x, y);
        this.setSize(w, h);
        if (radius > 0) {
            this.setCss("border-radius", `${radius}px`);
        }
        else if (this.css.borderRadius !== null) {
            this.css.removeProperty("border-radius");
        }
    }
}
let body = document.body;
let fond = new Frame(body, "fond", 0, 0, 794, 500);
fond.setStyle(0x9999FF, 0xFFFFFF, 2, "outset", 0.5);
let menu = new Frame(body, "menu", 0, 60, 150, 400, 12);
menu.setStyle(0x6666FF, 0xFFFFFF, 2, "outset", 1);
//# sourceMappingURL=index.js.map