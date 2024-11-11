import { Layout, Text, Icon } from "@ui-kitten/components";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { Button, Spacing, Input, Divider } from "@components";
import { Dimensions } from "@utils";

export default function LoginScreen() {
  const pwdInputRef = useRef<Input.Ref>();

  return (
    <Layout style={styles.root}>
      <Text category='h3'>Entrar</Text>

      <Spacing.Default vertical={Dimensions.Spacing.XSmall} />

      <Text category='s1'>Insira os dados para acessar sua conta</Text>

      <Spacing.Default vertical={Dimensions.Spacing.XXLarge} />

      <Input.Text
        returnKeyType='next'
        keyboardType='email-address'
        key={"input-email"}
        onSubmitEditing={() => pwdInputRef?.current?.focus()}
        label='Email'
        accessoryLeft={
          <Icon
            name={"email-outline"}
            onPress={() => {}}
          />
        }
      />

      <Spacing.Default vertical={Dimensions.Spacing.Large} />

      <Input.Password
        ref={pwdInputRef}
        label='Senha'
        returnKeyType='done'
      />

      <Spacing.Default vertical={Dimensions.Spacing.Large} />

      <Button.Link
        text='Esqueceu sua senha?'
        touchableStyle={{ alignSelf: "flex-end" }}
        onPress={() => {}}
      />

      <Spacing.Default vertical={Dimensions.Spacing.Large} />

      <Button.Default
        text='Acessar'
        onPress={() => {}}
      />

      <Spacing.Default vertical={Dimensions.Spacing.Large} />

      <Divider.WithText text='OU' />

      <Spacing.Default vertical={Dimensions.Spacing.XXLarge} />

      <Button.Bordered
        text='Enviar link de uso único'
        onPress={() => {}}
      />

      <Spacing.Default vertical={Dimensions.Spacing.Small} />

      <Button.Flat
        text='Entrar com número de telefone'
        onPress={() => {}}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16
  }
});
