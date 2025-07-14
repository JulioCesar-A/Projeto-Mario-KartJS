<h1 style="text-align: center; font-size: 2.5rem;"> Desafio de Projeto: <span style="color:rgb(220, 13, 30)">Mario Kart JS</span></h1>

<h2 style="color: #ffa500; border-bottom: 2px solid #333; padding-bottom: 0.3rem; margin-top: 2rem; text-align: center">Introdução</h2>

<table>
    <tr>
        <td>
            <img src="./docs/characters/header.gif" width="200" alt="Mario Kart">
        </td>
        <td>
            <p style="font-size: 1rem; color: #fff;">
            Mario Kart é uma franquia de jogos de corrida da Nintendo com os personagens do universo Mario Bros. Esse desafio foi proposto pela DIO, que consiste em criar uma lógica de um jogo de videogame para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.
            </p>
        </td>
    </tr>
</table>

<h2 style="color: #ffa500; border-bottom: 2px solid #333; padding-bottom: 0.3rem; margin-top: 2rem; text-align: center">Personagens Selecionáveis</h2>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <tr>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/mario.gif" alt="Mario" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Mario</strong><br>
                    Velocidade: 3<br>
                    Manobrabilidade: 3<br>
                    Poder: 3
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/luigi.gif" alt="Luigi" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Luigi</strong><br>
                    Velocidade: 4<br>
                    Manobrabilidade: 3<br>
                    Poder: 2
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/peach.gif" alt="Peach" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Peach</strong><br>
                    Velocidade: 3<br>
                    Manobrabilidade: 4<br>
                    Poder: 2
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/koopa.gif" alt="Koopa" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Koopa</strong><br>
                    Velocidade: 3<br>
                    Manobrabilidade: 4<br>
                    Poder: 3
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/header.gif" alt="Mario Kart" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>???</strong><br>
                    Velocidade: ?<br>
                    Manobrabilidade: ?<br>
                    Poder: ?
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/yoshi.gif" alt="Yoshi" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Yoshi</strong><br>
                    Velocidade: 4<br>
                    Manobrabilidade: 4<br>
                    Poder: 3
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/toad.gif" alt="Toad" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Toad</strong><br>
                    Velocidade: 5<br>
                    Manobrabilidade: 2<br>
                    Poder: 1
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/bowser.gif" alt="Bowser" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Bowser</strong><br>
                    Velocidade: 2<br>
                    Manobrabilidade: 1<br>
                    Poder: 5
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/characters/donkeykong.gif" alt="Donkey Kong" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Donkey Kong</strong><br>
                    Velocidade: 2<br>
                    Manobrabilidade: 1<br>
                    Poder: 5
                </div>
            </img>
        </td>
    </tr>
</table>

<div style="display: flex; align-items: center; width: 100%; margin-top: 2rem;">
    <img src="./docs/items/random.gif" width="40px" height="40px">
    <div style="flex: 1; border-bottom: 2px solid #333; margin: 0 10px;">
        <h2 style="color: #ffa500; padding-bottom: 0.3rem; margin: 0; text-align: center;">Itens</h2>
    </div>
    <img src="./docs/items/random.gif" width="40px" height="40px">
</div>


<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <tr>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/items/bomb.jpg" alt="Bob-Omb" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Bob-Omb</strong><br>
                    Pontos: -3
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/items/boo.png" alt="Boo" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Boo</strong><br>
                    Pontos: 0<br>
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/items/shell.jpg" alt="Shell" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Shell</strong><br>
                    Pontos: -2
                </div>
            </div>
        </td>
    </tr>
</table>

<h2 style="color: #ffa500; border-bottom: 2px solid #333; padding-bottom: 0.3rem; margin-top: 2rem; text-align: center">Regras e Mecânicas</h2>

<h3>Jogadores</h3>

<label for="jogadores-item">O computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<strong>Número de Jogadores:</strong> 2 <input type="checkbox" id="jogadores-item"/>

<h3>Pistas</h3>

<label for="pistas-1-item">Os personagens correrão em uma pista aleatória de 8 rodadas</label>

<strong>Número de Rodadas:</strong> 8 
<input type="checkbox" id="pistas-1-item"/>

<label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma <strong>reta</strong>, <strong>curva</strong> ou <strong>confronto</strong>:<input type="checkbox" id="pistas-2-item"/></label>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <tr>
        <td style="padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/maps/trechoreta.png" alt="Reta" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Reta</strong>
                    <p>Caso o bloco da pista seja uma RETA, o jogador deve:</p>
                    <ul>
                        <li>Jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto <input type="checkbox" id="pistas-2-1-item"/></li> 
                    </ul>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/maps/trechocurva.png" alt="Curva" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Curva</strong>
                    <p>Caso o bloco da pista seja uma CURVA, o jogador deve:</p>
                    <ul>
                        <li>Jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto <input type="checkbox" id="pistas-2-2-item"/></li> 
                    </ul>
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./docs/items/box.png" alt="Confronto" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Confronto</strong><input type="checkbox" id="pistas-2-3-item"/>
                    <p>Caso o bloco da pista seja um CONFRONTO, o jogador deve:</p>
                    <ol>
                        <li>Receber um item aleatório da lista<input type="checkbox" id="pistas-2-3-1-item"/></li>
                        <li>Jogar um dado de 6 lados<input type="checkbox" id="pistas-2-3-2-item"/></li>
                        <li>Realizar cálculos de confronto<input type="checkbox" id="pistas-2-3-3-item"/></li>
                    </ol>
                    <p>Ao final do confronto, aquele que perder, perderá 1 ponto: <input type="checkbox" id="pistas-2-3-4-item"/></p>
                </div>
            </div>
        </td>
    </tr>
</table>

<label for="pistas-2-4-item">Nenhum jogador pode terminar a corrida com pontuação negativa <input type="checkbox" id="pistas-2-4-item"/></label>


<strong>Condições de Vitória:</strong> <label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label> <input type="checkbox" id="-item"/>

<h2 style="color: #ffa500; border-bottom: 2px solid #333; padding-bottom: 0.3rem; margin-top: 2rem; text-align: center">Comparativo</h2>

O desafio proposto possui um projeto original que serve como guia para resolução do desafio.

Link para projeto original: [Link](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart)

<h3>Comparativo de Funcionalidades</h3>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <thead style="background-color: #4C565E">
        <tr>
            <th style="padding: 1rem; border: 3px solid #333; vertical-align: middle; text-align: center">CRITÉRIO</th>
            <th style="padding: 1rem; border: 3px solid #333; vertical-align: middle; text-align: center">PROJETO ORIGINAL</th>
            <th style="padding: 1rem; border: 3px solid #333; vertical-align: middle; text-align: center">MEU PROJETO</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Seleção de Personagens
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Pré-definidos 
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Dinâmica (Seleção Manual ou Aleatória)
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Blocos de pista
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            RETA, CURVA, CONFRONTO
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            RETA, CURVA, CONFRONTO
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Interatividade
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Automático
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Interativo (com readline)
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Itens
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Não possui
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Sim (ofensivos e defensivos)
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Pontuação
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Ganho de pontos apenas
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Ganho e perda de pontos
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Complexibilidade
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Simples
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Complexo e estratégico
            </td>
        </tr>
    </tbody>
</table>

<h3>Comparação entre Sistemas de Confronto</h3>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <thead style="background-color: #4C565E">
        <tr>
            <th style="padding: 1rem; border: 3px solid #333; vertical-align: middle; text-align: center">CRITÉRIO</th>
            <th style="padding: 1rem; border: 3px solid #333; vertical-align: middle; text-align: center">PROJETO ORIGINAL</th>
            <th style="padding: 1rem; border: 3px solid #333; vertical-align: middle; text-align: center">MEU PROJETO</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Base de Cálculo
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            PODER + Dado
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            PODER + Dado + Itens
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Itens
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Não possui
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Sim (ofensivos e defensivos)
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Impacto dos Itens
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            N/A
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Podem modificar o poder ou causar danos
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Ganho de Pontos
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Não possui
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Não possui
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Perda de Pontos
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Sim (apenas o perdedor perde 1 ponto)
            </td>
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Sim (apenas o perdedor perde 1 ponto)
            </td>
        </tr>
        <tr>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Complexibilidade
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Simples
            </td>
            <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            Complexo e expansível
            </td>
        </tr>
    </tbody>
</table>