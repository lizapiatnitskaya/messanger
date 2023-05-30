import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    id:number
    user: UserType
    message: MessageType2
}

type UserType={
    avatar:string
    name:string
}

type MessageType2={
    text:string
    time:string
}

type PropsType = {
    message: MessagePropsType
}

// нужно отобразить приходящие данные
export const Message = (props: PropsType) =>{
    return (
        <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                />
                
        <div id={'hw1-message-' + props.message.id} className={s.message}>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}

                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}
                    </pre>
                </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}
            </div>
            </div>
        </div>
    )
}

export default Message
