
export default class Category {
    id
    name
    comment
    availability
    tags
    parent
    level
    logo

    constructor(id, name, comment, availability, tags, parent, level, logo) {
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.availability = availability;
        this.tags = tags;
        this.parent = parent;
        this.level = level;
        this.logo = logo;
    }
}