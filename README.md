<div align="center">

# Projeto Portfólio Login - Aplicação Mobile React Native

</div>

<br>

<div align="center">

[![Build Status](https://img.shields.io/github/stars/RenanBorba/react-native-login.svg)](https://github.com/RenanBorba/react-native-login) [![Build Status](https://img.shields.io/github/forks/RenanBorba/react-native-login.svg)](https://github.com/RenanBorba/react-native-login) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native)

</div>

<br>

Aplicação Front-end Mobile desenvolvida em React Native para layout de Tela de Login para aplicativos diversos e adaptação de projetos anteriores, com animação no formulário no estilo estilingue, além do efeito de diminuir e aumentar o logotipo de acordo com o teclado aberto.

<br><br>

<div align="center">

![00](https://user-images.githubusercontent.com/48495838/81190178-de3e3180-8f8d-11ea-89e1-9f7cf6f6348a.png)

</div>

<br><br>

## :rocket: Tecnologias
<ul>
  <li>Expo</li>
  <li>StatusBar</li>
  <li>KeyboardAvoidingView</li>
  <li>TextInput</li>
  <li>TouchableOpacity</li>
  <li>StyleSheet</li>
  <li>Animated</li>
  <li>Keyboard</li>
  <li>useState</li>
  <li>useEffect</li>
</ul>

<br><br>

## :arrow_forward: Start
<ul>
  <li>npm install</li>
  <li>npm run start / npm start</li>
</ul>

<br><br><br>

## :mega: Segue abaixo a principal estrutura e interface:

<br><br><br>

## src/pages/Login/index.js
```js
import React, { useState, useEffect } from 'react';
import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard
  } from 'react-native';

import styles from './styles';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

  useEffect(() => {
    keyboardDidShowListener
      = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    keyboardDidHideListener
      = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100
      })
    ]).start();
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require('../../assets/logo.png')}
          />
        </View>

        <Animated.View style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            //keyboardType="visible-password"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.buttonSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
};
```

<br><br>

## Interface principal

<div align="center">

![Meu-Vídeo1_1](https://user-images.githubusercontent.com/48495838/79800903-87045400-8333-11ea-9e0e-e07e3eb7d09b.gif)

<br>

![Meu-Vídeo2_2](https://user-images.githubusercontent.com/48495838/79800904-88ce1780-8333-11ea-9313-85cbda2cca11.gif)

</div>

<br><br>
<br>

Renan Borba.
