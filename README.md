<h1 style="text-align: center; font-size: 2.5rem;"> Desafio de Projeto: <span style="color:rgb(220, 13, 30)">Mario Kart JS</span></h1>

<h2 style="color: #ffa500; border-bottom: 2px solid #333; padding-bottom: 0.3rem; margin-top: 2rem; text-align: center">Introdução</h2>

<table>
    <tr>
        <td>
            <img src="./Docs/Characters/header.gif" width="200" alt="Mario Kart">
        </td>
        <td>
            <p style="font-size: 1rem; color: #fff;">
            Mario Kart é uma franquia de jogos de corrida da Nintendo com os personagens do universo Mario Bros. Nosso desafio será criar uma lógica de um jogo de videogame para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.
            </p>
        </td>
    </tr>
</table>

<h2 style="color: #ffa500; border-bottom: 2px solid #333; padding-bottom: 0.3rem; margin-top: 2rem; text-align: center">Personagens Selecionáveis</h2>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <tr>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./Docs/Characters/mario.gif" alt="Mario" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/luigi.gif" alt="Luigi" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/peach.gif" alt="Peach" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/koopa.gif" alt="Koopa" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/header.gif" alt="Mario Kart" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/yoshi.gif" alt="Yoshi" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/toad.gif" alt="Toad" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/bowser.gif" alt="Bowser" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Characters/donkeykong.gif" alt="Donkey Kong" width="100px" style="margin-right: 15px; background: url()">
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
    <img src="./Docs/Items/random.gif" width="40px" height="40px">
    <div style="flex: 1; border-bottom: 2px solid #333; margin: 0 10px;">
        <h2 style="color: #ffa500; padding-bottom: 0.3rem; margin: 0; text-align: center;">Itens</h2>
    </div>
    <img src="./Docs/Items/random.gif" width="40px" height="40px">
</div>


<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background-color: #1a1b26; color: #fff;">
    <tr>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./Docs/Items/bomb.jpg" alt="Bob-Omb" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Bob-Omb</strong><br>
                    Pontos: -3
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./Docs/Items/boo.png" alt="Boo" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Boo</strong><br>
                    Pontos: 0<br>
                </div>
            </div>
        </td>
        <td style="width: 33.33%; padding: 1rem; border: 3px solid #333; vertical-align: middle;">
            <div style="display: flex; align-items: center;">
                <img src="./Docs/Items/shell.jpg" alt="Shell" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Maps/trechoreta.png" alt="Reta" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Maps/trechocurva.png" alt="Curva" width="100px" style="margin-right: 15px;">
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
                <img src="./Docs/Items/box.png" alt="Confronto" width="100px" style="margin-right: 15px;">
                <div>
                    <strong>Confronto</strong><input type="checkbox" id="pistas-2-3-item"/>
                    <p>Caso o bloco da pista seja um CONFRONTO, o jogador deve:</p>
                    <ol>
                        <li>Receber um item aleatório da lista<input type="checkbox" id="pistas-2-3-1-item"/></li>
                        <li>Jogar um dado de 6 lados<input type="checkbox" id="pistas-2-3-2-item"/></li>
                        <li>Realizar cálculos de confronto<input type="checkbox" id="pistas-2-3-3-item"/></li>
                        <ul>
                            <li>Cálculo Normal: <input type="checkbox" id="pistas-2-3-3-1-item"/></li>
                            <ul>
                                <li>ItemInimigo + Dado + PODER</li>
                            </ul>
                            <li>Se jogador recebeu o item Boo: <input type="checkbox" id="pistas-2-3-3-2-item"/></li>
                            <ul>
                                <li>(ItemInimigo x Item) + Dado + PODER</li>
                            </ul>
                        </ul>
                    </ol>
                    <p>Ao final do confronto, aquele que perder, perderá 1 ponto: <input type="checkbox" id="pistas-2-3-4-item"/></p>
                </div>
            </div>
        </td>
    </tr>
</table>

<label for="pistas-2-4-item">Nenhum jogador pode terminar a corrida com pontuação negativa <input type="checkbox" id="pistas-2-4-item"/></label>


<strong>Condições de Vitória:</strong> <label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label> <input type="checkbox" id="-item"/>