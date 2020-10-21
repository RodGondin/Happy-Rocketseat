const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db){
    // inserir dados na tabela
    await saveOrphanage(db, {
            lat: "-27.5945276",
            lng: "-48.5486737",
            name: "Lar das meninos",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "9899293423",
            images: [
                "https://i0.wp.com/blog.mooui.com.br/wp-content/uploads/2019/01/10-coisas-que-deixam-as-criancas-felizes.jpg",
    
                "https://i1.wp.com/multarte.com.br/wp-content/uploads/2015/08/imagens-amor.jpg?fit=1680%2C1050&ssl=1",
                ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 8h até 18h",
            open_on_weekends: "0"
    })

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "1"')

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})