function Logger(level) {
  this.color = Logger.colors[level] || Logger.colors.info
}

Logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m'
}

Logger.prototype.log = function(s) {
  const date = new Date().toISOString()
  console.log(this.color + date + '\t' + s);
}

const warning = new Logger('warning')
const error = new Logger('error')
const debug = new Logger('debug')
const slow = new Logger('slow')

slow.log('I am logger')
warning.log('warning')
error.log('Hello error')
debug.log('Bye ')

