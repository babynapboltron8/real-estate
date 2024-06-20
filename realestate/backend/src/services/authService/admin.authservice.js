export const adminAccess = async (positionName, next) => {
  try {
    if (positionName === 'agent') { return true }
    return false
  } catch (error) {
    return { success: false, error: `${error}` }
  }
}
