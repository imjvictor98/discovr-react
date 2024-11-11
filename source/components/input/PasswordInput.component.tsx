import React, { useState } from "react";
import { Text, Input, Icon } from "@ui-kitten/components";
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInputSubmitEditingEventData
} from "react-native";
import { Dimensions } from "@utils";

type Props = {
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  label?: string;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
};
const PasswordTextInput = React.forwardRef<any, Props>((props, ref) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      style={styles.container}
      ref={ref as any}
      secureTextEntry={!show}
      returnKeyType={props.returnKeyType}
      onSubmitEditing={props.onSubmitEditing}
      autoComplete='current-password'
      size='large'
      label={(evaProps) => (
        <Text
          {...evaProps}
          style={[evaProps?.style, styles.text]}>
          {props.label}
        </Text>
      )}
      accessoryLeft={<Icon name={"lock-outline"} />}
      accessoryRight={
        <Icon
          name={show ? "eye-outline" : "eye-off"}
          onPress={() => {
            setShow(!show);
          }}
        />
      }
    />
  );
});

export default PasswordTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: Dimensions.BorderRadius.Medium
  },
  text: {
    fontSize: Dimensions.FontSize.Body
  }
});
