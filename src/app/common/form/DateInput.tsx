import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Form, FormFieldProps, Label } from 'semantic-ui-react';
import { DateTimePicker } from 'react-widgets';

interface IProps extends FormFieldProps{}

export const DataInput: React.FC<IProps> = ({
    input, width, placeholder, meta: {touched, error},
    ...rest
}) => {
    return (
        <Form.Field error={touched && !!error} width={width}>
        //@ts-ignore
            <DateTimePicker
                placeholder ={placeholder}
                value= {input.value || null}
                onChange = {input.onChange}
                {...rest}
            />
            {touched && error && (
                <Label basic color = 'red'>
                    {error}
                </Label>
            )}
        </Form.Field>
    )
}
