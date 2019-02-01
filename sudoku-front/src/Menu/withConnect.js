import { connect } from 'react-redux'
import { gameCreated } from '../store/actions'

const mapDispatchToProps = { gameCreated }

export default connect(undefined, mapDispatchToProps)
