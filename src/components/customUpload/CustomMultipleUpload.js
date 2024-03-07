import React from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

class CustomMultipleUpload extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        const { input: { onChange }, meta: { touched, error }, id, mimeType, isUploading } = this.props;
        return (
            <FormControl variant="standard" className="">
                <input
                    accept={mimeType || 'image/*'}
                    id={id}
                    type="file"
                    multiple
                    disabled={isUploading ?? false}
                     onClick={(e) => e.target.value = null}
                    onChange={onChange}
                    style={{ 'display': 'none' }} />
                <label htmlFor={id}>
                    <Button component="span" disabled={isUploading ?? false}>
                        +<br />
                        Add Image
                    </Button>
                </label>
                {touched && error ? (
                    <FormHelperText error>{touched && error}</FormHelperText>
                ) : null}
            </FormControl>
        )
    }
}

export default CustomMultipleUpload