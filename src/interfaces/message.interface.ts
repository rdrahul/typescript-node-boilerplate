export interface IMessage { 
    readonly msg : string;
    readonly code: number;
    readonly extraCode?: number;
}