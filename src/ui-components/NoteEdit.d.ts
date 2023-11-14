/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteEditOverridesProps = {
    NoteEdit?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Edit?: PrimitiveOverrideProps<TextProps>;
    Divider4056619?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Upload Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4056624?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4056625?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4056626?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4056627?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NoteEditProps = React.PropsWithChildren<Partial<FlexProps> & {
    ne?: any;
} & {
    overrides?: NoteEditOverridesProps | undefined | null;
}>;
export default function NoteEdit(props: NoteEditProps): React.ReactElement;
