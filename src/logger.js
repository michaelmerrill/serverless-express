const {
  LOG_LEVEL = process.env.NODE_ENV === 'development' ? 'debug' : 'error'
} = process.env
const logger = {
  // TODO: allow users to set log level without having to provide the other log methods
  level: LOG_LEVEL,
  error (message, additional) {
    if (!logger.level.includes('debug', 'verbose', 'info', 'warn', 'error')) return
    console.error({
      message,
      ...additional
    })
  },
  warn (message, additional) {
    if (!logger.level.includes('debug', 'verbose', 'info', 'warn')) return
    console.warn({
      message,
      ...additional
    })
  },
  info (message, additional) {
    if (!logger.level.includes('debug', 'verbose', 'info')) return
    console.info({
      message,
      ...additional
    })
  },
  verbose (message, additional) {
    if (!logger.level.includes('debug', 'verbose')) return
    console.debug({
      message,
      ...additional
    })
  },
  debug (message, additional) {
    if (logger.level !== 'debug') return
    console.debug({
      message,
      ...additional
    })
  }
}

module.exports = logger
