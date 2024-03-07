import React from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { checkForImageValidations, imageNameFromUrl } from '../../utils/Common';
import { toast } from "react-toastify";

class CustomFileUpload extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    async onChange(e) {
        const { input: { onChange } } = this.props;
        if (e.target.files[0]) {
            const fileCheck = await checkForImageValidations(e.target.files[0], 'file', false);
            if (fileCheck instanceof Error) {
                toast.error(fileCheck.message);
                e.target.value = null;
            } else {
                onChange(e.target.files[0])
            }
        }
    }
    checkName = (value) => {
        if (value && value.type) {
            const extension = (/[.]/.exec(value.name)) ? '.' + /[^.]+$/.exec(value.name)[0] : undefined;
            let res = this.props.mimeType?.includes(`${extension}`);
            return (res) ? value.name : imageNameFromUrl(this.props.meta?.initial || 'Choose a file');
        } else {
            return imageNameFromUrl(this.props.meta.initial);
        }

    }

    render() {
        const { input: { value }, meta: { touched, error }, id, mimeType, label } = this.props;
        const fileName = (value?.name) ? this.checkName(value) : (value?.url ? imageNameFromUrl(value.url) : (value ? imageNameFromUrl(value) : 'Attached Identity Proof'));
        return (
            <FormControl variant="standard" className="formControl">
                <InputLabel shrink htmlFor="bootstrap-input">
                    {label || "ID Proof*"}
                </InputLabel>
                <input
                    accept={mimeType || 'image/*'}
                    style={{ display: "none" }}
                    id={id}
                    type="file"
                    onChange={(e) => this.onChange(e)}
                />
                <label htmlFor={id}>
                    <Button
                        variant="raised"
                        component="span"
                        className="inputField customFile-input browseBtn">
                        <span className="filenameInput">{fileName}</span>
                        <span className="browseText">Browse</span>
                    </Button>
                </label>
                {touched && error ? (
                    <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
                ) : null}
            </FormControl>
        )
    }
}

export default CustomFileUpload