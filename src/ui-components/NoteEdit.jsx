/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { updateNote } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NoteEdit(props) {
  const { ne, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldFourZeroFiveSixSixTwoFourValue,
    setTextFieldFourZeroFiveSixSixTwoFourValue,
  ] = useState("");
  const [
    textFieldFourZeroFiveSixSixTwoFiveValue,
    setTextFieldFourZeroFiveSixSixTwoFiveValue,
  ] = useState("");
  const [
    textFieldFourZeroFiveSixSixTwoSixValue,
    setTextFieldFourZeroFiveSixSixTwoSixValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourZeroFiveSixSixTwoFourValue,
          description: textFieldFourZeroFiveSixSixTwoFiveValue,
          image: textFieldFourZeroFiveSixSixTwoSixValue,
          author: authAttributes["email"],
          id: ne?.id,
        },
      },
    });
  };
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldFourZeroFiveSixSixTwoFourValue === "" &&
      ne !== undefined &&
      ne?.name !== undefined
    )
      setTextFieldFourZeroFiveSixSixTwoFourValue(ne?.name);
  }, [ne]);
  useEffect(() => {
    if (
      textFieldFourZeroFiveSixSixTwoFiveValue === "" &&
      ne !== undefined &&
      ne?.description !== undefined
    )
      setTextFieldFourZeroFiveSixSixTwoFiveValue(ne?.description);
  }, [ne]);
  useEffect(() => {
    if (
      textFieldFourZeroFiveSixSixTwoSixValue === "" &&
      ne !== undefined &&
      ne?.image !== undefined
    )
      setTextFieldFourZeroFiveSixSixTwoSixValue(ne?.image);
  }, [ne]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="350px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NoteEdit")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
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
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
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
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
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
            children="Edit"
            {...getOverrideProps(overrides, "Edit")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4056619")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
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
            src={ne?.image}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="15px"
            textAlign="left"
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
            children={ne?.id}
            {...getOverrideProps(overrides, "label")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload Image"
            {...getOverrideProps(overrides, "Upload Image")}
          ></Text>
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
            label="Site Name"
            placeholder="Google"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFiveSixSixTwoFourValue}
            onChange={(event) => {
              setTextFieldFourZeroFiveSixSixTwoFourValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4056624")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="URL"
            placeholder="google.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFiveSixSixTwoFiveValue}
            onChange={(event) => {
              setTextFieldFourZeroFiveSixSixTwoFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4056625")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="google.png"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFiveSixSixTwoSixValue}
            onChange={(event) => {
              setTextFieldFourZeroFiveSixSixTwoSixValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4056626")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider4056627")}
        ></Divider>
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
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
