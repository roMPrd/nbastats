const { default: FetchTeamsApi } = require("@/utils/nbaApi/fetchAxios")

const teams = () => {
  return (
    <FetchTeamsApi />
  )
}

export default teams
