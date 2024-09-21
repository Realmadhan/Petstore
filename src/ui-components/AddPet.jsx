/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenFourFiveThreeNineValue,
    setTextFieldThreeEightSevenFourFiveThreeNineValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenFourFiveFourSixValue,
    setTextFieldThreeEightSevenFourFiveFourSixValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeEightSevenFourFiveFiveThreeValue,
    setTextFieldThreeEightSevenFourFiveFiveThreeValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          Name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
          About: textFieldThreeEightSevenFourFiveThreeNineValue,
          Age: textFieldThreeEightSevenFourFiveFourSixValue,
          Breed: textFieldTwoNineSevenSixSixNineTwoThreeValue,
          Colour: textFieldTwoNineSevenSixSixNineTwoFourValue,
          Image: textFieldThreeEightSevenFourFiveFiveThreeValue,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="659px"
      height="852px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(254,230,254,1)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="852px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="100px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Pet Profile"
            {...getOverrideProps(overrides, "Add Pet Profile")}
          ></Text>
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://www.cdc.gov/healthy-pets/media/images/2024/04/GettyImages-598175960-cute-dog-headshot.jpg"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Pet Name"
            placeholder="Nikki"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="Good, Pretty"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSevenFourFiveThreeNineValue}
            onChange={(event) => {
              setTextFieldThreeEightSevenFourFiveThreeNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3874539")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="5"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSevenFourFiveFourSixValue}
            onChange={(event) => {
              setTextFieldThreeEightSevenFourFiveFourSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3874546")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            placeholder="Seattle"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Colour"
            placeholder="Black"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="Image-Url"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSevenFourFiveFiveThreeValue}
            onChange={(event) => {
              setTextFieldThreeEightSevenFourFiveFiveThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3874553")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
