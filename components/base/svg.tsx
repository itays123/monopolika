import { SVGProps } from "react";

export default function createSVG(source: (props: SVGProps<SVGSVGElement>) => JSX.Element) {
    return function SVG(props: SVGProps<SVGSVGElement>) {
        return source(props);
    }
}