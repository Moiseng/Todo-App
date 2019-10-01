import React from 'react';
import Prompt from 'rn-prompt';

const TextPrompt = ({isVisible, title, placeholder,onSubmitCallBack,onCancelCallBack,defaultValue}) => (
        <Prompt
            visible={isVisible}
            placeholder={placeholder}
            title={title}
            onCancel={() => onCancelCallBack()}
            onSubmit={ (value) => onSubmitCallBack(value)}
            defaultValue={defaultValue}
        />
);

export default TextPrompt;