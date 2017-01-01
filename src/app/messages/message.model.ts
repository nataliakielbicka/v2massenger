/**
 * Created by Siddharth on 11/22/2016.
 * Description: A class that simply defines how a messages should look like. A clear blue print of the messages
 */

/**export class Message{
    content: string;
    username: string;
    messageId?: string; //To idenfity the unique messages we want to edit or delete
    userId?: string; //To know if a auth is the one who created the messages, username could be little bad to use

    constructor(content: string, username: string, messageId: string, userId: string){
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
 */

export class Message{
    constructor(public content: string, public username: string, public messageId?: string, public userId?: string){}
}


