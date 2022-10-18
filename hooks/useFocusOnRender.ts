import { useEffect, useRef } from "react";

export default function useFocusOnRender() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    });

    return ref;
}