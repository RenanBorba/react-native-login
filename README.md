<div align="center"> 

# Projeto Portfólio Login - Aplicação Mobile React Native

</div>

<br>

<div align="center">
  
[![Generic badge](https://img.shields.io/badge/Made%20by-Renan%20Borba-purple.svg)](https://shields.io/) [![Build Status](https://img.shields.io/github/stars/RenanBorba/react-native-login.svg)](https://github.com/RenanBorba/react-native-login) [![Build Status](https://img.shields.io/github/forks/RenanBorba/react-native-login.svg)](https://github.com/RenanBorba/react-native-login) [![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native) [![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

</div>

<br>

Aplicação Front-end Mobile desenvolvida em React Native para layout de Tela de Login para aplicativos diversos e adaptação de projetos anteriores, com animação no formulário no estilo estilingue, além do efeito de diminuir e aumentar o logotipo de acordo com o teclado aberto.

<br><br>

<div align="center">

![login](https://user-images.githubusercontent.com/48495838/84698552-5a7d4a80-af26-11ea-98ae-9c8074e8e53e.png)

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

<br><br>

## :punch: Como contribuir
<ul>
  <li>Dê um fork nesse repositório</li>
  <li>Crie a sua branch com a feature</li>
    <ul>
      <li>git checkout -b my-feature</li>
    </ul>
  <li>Commit a sua contribuição</li>
    <ul>
      <li>git commit -m 'feat: My feature'</li>
    </ul>
  <li>Push a sua branch</li>
    <ul>
      <li>git push origin my-feature</li>
    </ul>
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

![Meu-Vdeo01](https://user-images.githubusercontent.com/48495838/82568733-a4585800-9b55-11ea-8893-64db2f7c0463.gif)

<br>

![Meu-Vdeo02](https://user-images.githubusercontent.com/48495838/82568737-a5898500-9b55-11ea-8326-5d331e053705.gif)

</div>
