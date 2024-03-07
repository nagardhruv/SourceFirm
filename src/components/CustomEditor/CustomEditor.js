import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export const CustomEditor = ({ id, input, labelText, labelProps, inputProps, meta: { touched, error } }) => {
    return (
        <FormControl
            variant="standard" className={`formControl editorBox`}
        >
            {labelText !== undefined ? (
                <InputLabel
                    shrink
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <ReactQuill
                theme="snow"
                modules={{
                    toolbar: [
                        // [{ 'header': [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'bullet' }],
                        // ['link', 'image'],
                        [
                            { align: "" },
                            { align: "center" },
                            { align: "right" },
                            { align: "justify" }
                        ],
                        // ['clean']
                    ]
                }}
                id={id}
                formats={
                    [
                        'header',
                        'bold', 'italic', 'underline',
                        'list', 'bullet', 'indent', 'align'
                    ]}
                {...input}

                onChange={(newValue, _delta, source) => {
                    if (source === 'user') {
                        input.onChange(newValue);
                    }
                }}
                onBlur={(_range, _source, quill) => {
                    input.onBlur(quill.getHTML());
                }}
                {...inputProps}
                error={touched && Boolean(error)}
            />
            {touched && error ? (
                <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
            ) : null}
        </FormControl>
    );
};