//es5
function Post(author, text, date) {
    this.text = text;
    this.author = author;
    this.date = date;
}
Post.prototype.edit = function (user_text) {
    this.text = user_text;
};
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    highlighted = false;
}
AttachedPost.prototype.makeTextHighlighted = function () {
    highlighted = true;
};
//es6
class Product {
    constructor(author, text, date) {
        this.text = text;
        this.author = author;
        this.date = date;
    }
    edit(user_text) {
        this.text = user_text;
    }
}
class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        highlighted = true;

    }
    makeTextHighlighted() {
        highlighted = false;
    }
}
