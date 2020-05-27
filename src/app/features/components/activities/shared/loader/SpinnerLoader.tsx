import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export const SpinnerLoader: React.FC<{inverted?: boolean, content?: string}> = ({
    inverted,
    content
}) => {
    return (
        <Dimmer active inverterd = {inverted}>
            <Loader content = {content}/>
        </Dimmer>
    )
}
