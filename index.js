import Express from 'express';
const app = Express();


import jogoPedraPapelTes from "./service/service.js";

app.get('/jogoPedraPapelTesoura',(req, res) =>{

    const opcaoJogador = req.query.jogador;

    let resposta = jogoPedraPapelTes(opcaoJogador);

    res.json(resposta);
})

app.listen(3000,()=>{
    let data= new Date();
    console.log("iniciado "+data);
})

