class Notification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
    }
}

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
    }
}

// สร้างออบเจ็กต์จากคลาส EmailNotification
const email = new EmailNotification('email01', '2024-05-02T08:00:00Z', 'Hello, this is your email notification!', 'example@example.com');
// สร้างออบเจ็กต์จากคลาส SMSNotification
const sms = new SMSNotification('sms01', '2024-05-02T08:05:00Z', 'Hello, this is your SMS notification!', '+1234567890');

// เรียกใช้เมธอด send
email.send();
sms.send();
