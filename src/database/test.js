const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    // Inserir dados
    proffyValue = {
        name: "Bruno Bilheri",
        avatar: "https://avatars0.githubusercontent.com/u/52968377?s=460&u=940c3e40f6efdff0e46c81e7685f701499b48f51&v=4",
        whatsapp: "5194876521",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
        
    }

    classValue = {
        subject: "Química",
        cost: "20",
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday:1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday:0,
            time_from: 520,
            time_to: 1220 
        }
    ]

   // await createProffy(db, {proffyValue, classValue, classScheduleValues} )
    
    // Consultar os dados inseridos

    
})