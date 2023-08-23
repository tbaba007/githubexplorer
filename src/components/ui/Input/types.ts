const inputTypeArr=['text'] as const;
const inputAlignArr=['center','left','end'] as const;
type inputType= typeof inputTypeArr[number];
type inputAlignType= typeof inputAlignArr[number];

export type InputTypeProps={
    value:string;
    textAlign:inputAlignType;
    type:inputType;
    name:string;
    placeholder:string;
    isRequired:boolean;
    width:string;
    height:string;
    isReadOnly:boolean;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  
}