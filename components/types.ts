import { ReactNode } from "react";

export interface ClassName {
    className?: string;
}

export interface Container {
    children?: ReactNode | ReactNode[];
}