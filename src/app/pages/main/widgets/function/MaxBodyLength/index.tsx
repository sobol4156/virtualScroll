import React from 'react'
import './index.js'
import '../../PostList.scss'

interface Props {
    body: string
}

const MaxBodyLength: React.FC<Props> = ({ body }) => {
    const maxLength = 150;
    const shortenedText = body.length > maxLength ? `${body.substring(0, maxLength)}...` : body;

    return (
        <div className={body.length>= 150? 'body animationBody': 'body'}>
            {shortenedText}
        </div>
    )
}

export default MaxBodyLength
