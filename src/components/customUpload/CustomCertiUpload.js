import React from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { checkForImageValidations, imageNameFromUrl } from '../../utils/Common';
import { toast } from "react-toastify";

class CustomCertiUpload extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    async onChange(e) {
        const { input: { onChange } } = this.props;
        if (e.target.files[0]) {
            const fileCheck = await checkForImageValidations(e.target.files[0],'certificate_file_type', false);
            if (fileCheck instanceof Error) {
                toast.error(fileCheck.message);
                e.target.value = null;
            } else {
                onChange(e.target.files[0])
            }
        }
    }

    render() {
        const { input: { value }, meta: { touched, error }, id, mimeType, label, onClick } = this.props;
        const fileName = (value?.name) ? value.name : (value?.url ? imageNameFromUrl(value.url) : (value ? imageNameFromUrl(value) : 'Select File'));
        return (
            <FormControl variant="standard" className="formControl selectFileFormcontrol">
                <InputLabel shrink htmlFor="bootstrap-input">
                    {label || "ID Proof*"}
                </InputLabel>
                <input
                    accept={mimeType || 'image/*'}
                    style={{ display: "none" }}
                    id={id}
                    type="file"
                    onChange={(e) => this.onChange(e)}
                    onClick={onClick}
                />
                <label htmlFor={id}>
                    <Button
                        variant="raised"
                        component="span"
                        className="inputField customFile-input selectFileBtn">
                        {/* <span className="filenameInput">{fileName}</span> */}
                        <span className="browseText">{fileName}</span>
                    </Button>
                </label>
                {touched && error ? (
                    <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
                ) : null}
            </FormControl>
        )
    }
}

export default CustomCertiUpload