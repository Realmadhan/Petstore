/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type AddPetOverridesProps = {
    AddPet?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet Profile"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3874539?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3874546?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3874553?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPetProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: any;
} & {
    overrides?: AddPetOverridesProps | undefined | null;
}>;
export default function AddPet(props: AddPetProps): React.ReactElement;
