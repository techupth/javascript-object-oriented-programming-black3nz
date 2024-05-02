class Notification {
    constructor(id) {
        this.id = id;
    }

    send(commentCreatedBy, postTitle) {
        console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
}

class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class Comment {
    constructor(id, content, createdBy) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.likes = 0;
    }

    addLike() {
        this.likes++;
    }
}

class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

class PostList {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    sharePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        console.log(`You've shared post "${post.title}" to your friend.`);
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }

    addGroup(group) {
        this.groupList.push(group);
    }

    addPage(page) {
        this.pageList.push(page);
    }
}

// ตัวอย่างการใช้งาน Classes
let fb = new Facebook();
let user1 = new User("user1", "Alice", "alice@example.com");
let post1 = new Post("post1", "Hello World", "This is my first post!");
let comment1 = new Comment("comment1", "Nice post!", "Bob");

post1.addComment(comment1);
let postList = new PostList();
postList.addPost(post1);
postList.sharePost("post1");

let notification = new Notification("notif1");
notification.send(comment1.createdBy, post1.title);
