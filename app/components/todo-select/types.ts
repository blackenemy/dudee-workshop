import type { MouseEventHandler, ChangeEventHandler } from "react";

interface todoSelect {
    value: string;
    name: string;
}

export interface todoSelectProps {
    option: todoSelect[];
    name: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}

