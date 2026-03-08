export enum SenderType {
    User = 'user',
    AI = 'ai'
}

export type ChatBubbleProps = {
    sender: SenderType
    message: string,
    index?: number,
    isSaved?: boolean,
    saveMessage?: Function,
    animationComplete?: Function
}
