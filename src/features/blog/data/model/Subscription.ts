export default class Subscription
{
    text: string
    mainTitle: string
    image: string

    constructor(text: string, mainTitle: string, image: string) {
        this.text = text;
        this.mainTitle = mainTitle;
        this.image = image;
    }
}