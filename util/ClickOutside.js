import {
    Component
} from 'react'
import PropTypes from 'prop-types'

function hasParent(element, root) {
    root.contains(element) && Boolean(element.closest('body'))
}

export default class ClickOutside extends Component {
    constructor(props) {
        super(props)
        this.handleRef = this.handleRef.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (this.props.active) {
            document.addEventListener('mousedown', this.handleClick)
            document.addEventListener('touchstart', this.handleClick)
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (!this.props.active && nextProps.active) {
            document.addEventListener('mousedown', this.handleClick)
            document.addEventListener('touchstart', this.handleClick)
        }

        if (this.props.active && !nextProps.active) {
            document.removeEventListener('mousedown', this.handleClick)
            document.removeEventListener('touchstart', this.handleClick)
        }
    }

    componentWillUnmount() {
        if (this.props.active) {
            document.removeEventListener('mousedown', this.handleClick)
            document.removeEventListener('touchstart', this.handleClick)
        }
    }

    handleRef(element) {
        this.element = element
    }

    handleClick(event) {
        if (!hasParent(event.target, this.element)) {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(event)
            }
        }
    }

    render() {
        return this.props.render({
            innerRef: this.handleRef
        })
    }
}

ClickOutside.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    render: PropTypes.func
}

ClickOutside.defaultProps = {
    active: true
}