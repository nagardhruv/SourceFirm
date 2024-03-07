import React from 'react';
import PropTypes from 'prop-types';
class ReadMoreLessWithSC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        };
    }
    render() {
        const { props } = this;
        const { children, ellipsis, readMoreText, readLessText, readMoreClassName, readLessClassName, readMoreStyle, readLessStyle, charLimit, textType } = props;
        if (!!children) { /* eslint-disable-line */
            const { showMore } = this.state;
            const shortText = children.substr(0, charLimit) + (charLimit >= children.length ? '' : ellipsis);
            const that = this;
            const ReadMore = () => (((charLimit >= children.length) || !readMoreText) ? null : <span
                className={readMoreClassName}
                role="presentation"
                style={readMoreStyle}
                onClick={() => { that.setState({ showMore: true }); }}
            >{readMoreText}</span>);
            const ReadLess = () => (((charLimit >= children.length) || !readLessText) ? null : <span
                className={readLessClassName}
                role="presentation"
                style={readLessStyle}
                onClick={() => { that.setState({ showMore: false }); }}
            >{readLessText}</span>);
            return (
                <>
                    {textType === true ?
                        <>
                            {showMore ? <span dangerouslySetInnerHTML={{ __html: children }}></span> : <span dangerouslySetInnerHTML={{ __html: shortText }}></span>} {showMore ? <ReadLess /> : <ReadMore />}
                        </>
                        :
                        <>
                            {showMore ? children : shortText} {showMore ? <ReadLess /> : <ReadMore />}
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

ReadMoreLessWithSC.propTypes = {
    charLimit: PropTypes.number,
    ellipsis: PropTypes.string,
    readMoreText: PropTypes.string,
    readLessText: PropTypes.string,
    readMoreClassName: PropTypes.string,
    readLessClassName: PropTypes.string,
    readMoreStyle: PropTypes.object,
    readLessStyle: PropTypes.object,
    children: PropTypes.string.isRequired,
    textType: PropTypes.any
};
ReadMoreLessWithSC.defaultProps = {
    charLimit: 150,
    ellipsis: '…',
    readMoreText: 'Read more',
    readLessText: 'Read less',
    readMoreClassName: 'react-read-more-read-less react-read-more-read-less-more',
    readLessClassName: 'react-read-more-read-less react-read-more-read-less-less',
    readMoreStyle: { whiteSpace: "nowrap", cursor: "pointer" },
    readLessStyle: { whiteSpace: "nowrap", cursor: "pointer" }
};
export default ReadMoreLessWithSC;