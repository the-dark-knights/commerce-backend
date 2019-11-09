/**
 * @author mmthant03
 * define all useful helper functions here
 */

module.exports = {
    generateId : () => {
        return Date.now().toString(36)
    },
    setStatus : (status, message, data={}) => {
        return {
            status : status,
            message : message,
            data : data
        }
    }
}