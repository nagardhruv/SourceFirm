import React from 'react';
import PropTypes from 'prop-types';
class ReadMoreReadLess extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showMore: false
        };
    }
    render() {
        const { props } = this;
        const { data, ellipsis, readMoreText, readLessText, readMoreClassName, readLessClassName, readMoreStyle, readLessStyle, charLimit, textType } = props;
        if (data) {
            const { showMore } = this.state;
            const plainText = data.replace(/(<([^>]+)>)/ig, '');
            const tagsRemovedText = data.replace(/(<([^>]+)>)/i, '');
            let shortText = '';
            if (plainText.length > charLimit) {
                shortText = tagsRemovedText?.substr(0, charLimit).replace(/[\s\n]+$/, '').replace(/[.,/#!$%^&*;:{}=\-_`~()]+$/, "") + (charLimit >= plainText.length ? '' : ellipsis);
            } else {
                shortText = data?.replace(/[\s\n]+$/, '').replace(/[.,/#!$%^&*;:{}=\-_`~()]+$/, "") + (charLimit >= plainText.length ? '' : ellipsis);
            }
            const that = this;
            const ReadMore = () => (((charLimit >= plainText.length) || !readMoreText) ? null : <span
                className={readMoreClassName}
                role="presentation"
                style={readMoreStyle}
                onClick={() => { that.setState({ showMore: true }); }}
            >{readMoreText}</span>);
            const ReadLess = () => (((charLimit >= plainText.length) || !readLessText) ? null : <span
                className={readLessClassName}
                role="presentation"
                style={readLessStyle}
                onClick={() => { that.setState({ showMore: false }); }}
            >{readLessText}</span>);
            return (
                <>
                    {textType === true ?
                        <>
                            {showMore ? <span dangerouslySetInnerHTML={{ __html: data }}></span> : <span dangerouslySetInnerHTML={{ __html: shortText }}></span>} {showMore ? <ReadLess /> : <ReadMore />}
                        </>
                        :
                        <>
                            {showMore ? data : shortText} {showMore ? <ReadLess /> : <ReadMore />}
                        </>
                    }
                </>
            );
        }
        else {
            return null
        }


    }
}

ReadMoreReadLess.propTypes = {
    charLimit: PropTypes.number,
    ellipsis: PropTypes.string,
    readMoreText: PropTypes.string,
    readLessText: PropTypes.string,
    readMoreClassName: PropTypes.string,
    readLessClassName: PropTypes.string,
    readMoreStyle: PropTypes.object,
    readLessStyle: PropTypes.object,
    data: PropTypes.string.isRequired,
    textType: PropTypes.any
};
ReadMoreReadLess.defaultProps = {
    charLimit: 150,
    ellipsis: '…',
    readMoreText: 'Read more',
    readLessText: 'Read less',
    readMoreClassName: 'react-read-more-read-less react-read-more-read-less-more',
    readLessClassName: 'react-read-more-read-less react-read-more-read-less-less',
    readMoreStyle: { whiteSpace: "nowrap", cursor: "pointer" },
    readLessStyle: { whiteSpace: "nowrap", cursor: "pointer" }
};
export default ReadMoreReadLess;