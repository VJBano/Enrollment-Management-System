import  { create } from "zustand";

type SidebarOption = {
    option:number;
    setOption: (val:number) => void;
}

const State = {

    optionStore : create<SidebarOption>((set) => ({
        option:1,
        setOption: (val) => set(() => ({option:val})),
    }))
}

export default State