import {Messages} from "./message.service";

import {Storage} from './storage.service'

const messages = new Messages()

const storage = new Storage()

export {messages, storage}
