import {
  AppStyle,
  ButtonText,
  Container,
  Image,
  OpacityButton,
  Text,
} from "./Styles";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { useState } from "react";

import Cookie from "./assets/biscoito.png";
import OpenCookie from "./assets/biscoitoAberto.png";

//Using function component
const App = () => {
  //* Cookie phrase & image states
  const [selectedPhrase, setSelectedPhrase] = useState("");
  const [cookieState, setCookieState] = useState(true);

  //* Cookir phrases Array[]
  const prhases = [
    "Com fé e determinação, somos capazes de tornar todos os nossos sonhos em realidade. Força e foco para todos nós!",
    "O talento vence jogos, mas só o trabalho em equipe ganha campeonatos.",
    "Eu sou parte de uma equipe. Então, quando venço, não sou eu apenas quem vence. De certa forma termino o trabalho de um grupo enorme de pessoas!",
    "Todos são peças importantes no trabalho em equipe, cada um representa uma pequena parcela do resultado final, quando um falha, todos devem se unir, para sua reconstrução.",
    "A prática do trabalho em equipe com respeito, lealdade, generosidade, empatia, transparência, são fatores essenciais para uma conduta Ética e vencedora.",
    "Trabalhar em equipe, nem sempre é acertar o alvo, mas sim se dispor a qualquer momento, ir além de suas expectativas, é ajudar o próximo.",
    "Quem não tem disposição dificulta o caminho, mas o verdadeiro guerreiro tem algo a mais, trabalha em equipe, por isso vai além.",
    "Somos mais fortes do que pensamos e mais capazes do que acreditamos. Confie!",
    "Quanto maior é o sonho, mais importante se mostra o trabalho em equipe!",
  ];

  //* Open cookie function
  const openCookie = () => {
    const randomPhrase = Math.floor(Math.random() * prhases.length);
    setCookieState(false);

    setSelectedPhrase(prhases[randomPhrase]);
    setTimeout(() => {
      setCookieState(true);
    }, 2000);
  };

  return (
    <>
      <StatusBar translucent={false} />
      <AppStyle>
        <Text>Biscoito da sorte</Text>
        {cookieState ? (
          <Image source={Cookie} />
        ) : (
          <Image source={OpenCookie} />
        )}

        <OpacityButton onPress={openCookie}>
          <ButtonText>Abrir biscoito</ButtonText>
        </OpacityButton>
        <Text>{selectedPhrase}</Text>
      </AppStyle>
    </>
  );
};

registerRootComponent(App);
