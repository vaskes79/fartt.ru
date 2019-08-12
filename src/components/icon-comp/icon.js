import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ nameIcon }) => <FontAwesomeIcon icon={nameIcon} />

Icon.propTypes = {
  nameIcon: PropTypes.object.isRequired,
}

export default Icon
