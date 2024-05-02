class EmailNotification {
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

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }

    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
}

// สร้างออบเจ็กต์จากคลาส EmailNotification
const email = new EmailNotification('email01', '2024-05-01T08:00:00Z', 'Hello, this is your email notification!', 'example@example.com');
// สร้างออบเจ็กต์จากคลาส SMSNotification
const sms = new SMSNotification('sms01', '2024-05-01T08:05:00Z', 'Hello, this is your SMS notification!', '+1234567890');

// เรียกใช้เมธอด send
email.send();
sms.send();
