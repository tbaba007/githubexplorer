export interface AccordionProps{
    title:string;
    isOpen:boolean;
    id:bigint;
    onOpen:(id:bigint)=>void;
    children:JSX.Element | JSX.Element[]
}