export const default_contacts = [
    {
        id:0,
        username:'Nikola',
        avatar:'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=478',
        last_message:'Chuck Norris is currently suing myspace for taking the name of what he calls everything around you.',
        date_last_message: JSON.stringify(new Date('2019-06-20')),
    },
    {
        id:1,
        username:'Loki',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEK9rIg0CG7Wcgd85WHT0L46lRXroN_QNJKfrt0in_6O9EpNS6x9RU6p26af3JBOmGGM8&usqp=CAU',
        last_message:'The descendents of Chuck Norris have divided into two widely known cultures: New Jersey and New York.',
        date_last_message: JSON.stringify(new Date('2019-06-22')),
    },
    {
        id:2,
        username:'Anna',
        avatar:'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg',
        last_message:'I got an e-roundhouse kick from Chuck Norris. My cheeks are still swollen.',
        date_last_message: JSON.stringify(new Date('2020-03-21')),
    },
    {
        id:3,
        username:'Vasilii',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXhl3XlzkvIajbwOZKtJWh1rsXQy-wXQ47MtUhwvgsc2OjLp4OQkdiLIlZuIYUox-ZSM&usqp=CAU',
        last_message:'',
        date_last_message:JSON.stringify(new Date('1999')), // for empty chat
    },
    {
        id:4,
        username:'Bohdan',
        avatar:'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png',
        last_message:'Hello, how are you?',
        date_last_message: JSON.stringify(new Date()),
    },
    {
        id:5,
        username:'Nazariy',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOB84LLmkJh3CK_3rZ_BrH5N-7Ir6SrnLJqnI-MOpKXgA3Ws1ZhwDgIiT0Pulwr439TY&usqp=CAU',
        last_message:'',
        date_last_message: JSON.stringify(new Date('1999')),
    },

]

export const default_messages = [
    {
        id:0,
        text:'Why this account?',
        date:JSON.stringify(new Date('2019-06-20')),
        user_id: 4,
        chat_id: 0,
    },
    {
        id:1,
        text:'There`s never been a *** problem.',
        date:JSON.stringify(new Date('2019-06-20')),
        user_id: 4,
        chat_id: 0,
    },
    {
        id:2,
        text:'I don`t *** know! I don`t know!',
        date:JSON.stringify(new Date('2019-06-20')),
        user_id: 0,
        chat_id: 0,
    },
    {
        id:3,
        text:'The descendents of Chuck Norris have divided into two widely known cultures: New Jersey and New York.',
        date:JSON.stringify(new Date('2019-06-22')),
        user_id: 4,
        chat_id: 1,
    },
    {
        id:4,
        text:'I got an e-roundhouse kick from Chuck Norris. My cheeks are still swollen.',
        date:JSON.stringify(new Date('2020-03-21')),
        user_id: 2,
        chat_id: 2,
    },
    {
        id:5,
        text:'Chuck Norris is currently suing myspace for taking the name of what he calls everything around you.',
        date:JSON.stringify(new Date('2019-06-20')),
        user_id: 0,
        chat_id: 0,
    },
]
