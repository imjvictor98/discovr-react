import React from "react";
import { Text, Input } from "@ui-kitten/components";
import {
  ImageProps,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInputSubmitEditingEventData
} from "react-native";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { Dimensions } from "@utils";

type Props = {
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  label?: string;
  accessoryLeft?: RenderProp<Partial<ImageProps>> | undefined;
  accessoryRight?: RenderProp<Partial<ImageProps>> | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
};
const TextInput: React.FC<Props> = React.forwardRef<any, Props>(
  (props, ref) => {
    return (
      <Input
        style={styles.container}
        ref={ref}
        size={"large"}
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete='email'
        returnKeyType={props.returnKeyType}
        keyboardType={props.keyboardType}
        onSubmitEditing={props.onSubmitEditing}
        label={(evaProps) => (
          <Text
            {...evaProps}
            style={[evaProps?.style, styles.text]}>
            {props.label}
          </Text>
        )}
        accessoryLeft={props.accessoryLeft}
        accessoryRight={props.accessoryRight}
      />
    );
  }
);

export default TextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: Dimensions.BorderRadius.Medium
  },
  text: {
    fontSize: Dimensions.FontSize.Body
  }
});
