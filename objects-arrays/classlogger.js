class Logger {
  constructor (level) {
    this.color = Logger.colors[level] || Logger.colors.info
  }

  log(s) {
    const date = new Date().toISOString()
    console.log(this.color + date + '\t' + s);
  }
}

Logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m'
}


const warning = new Logger('warning')
const error = new Logger('error')
const debug = new Logger('debug')
const slow = new Logger('slow')

slow.log('I am logger')
warning.log('warning')
error.log('Hello error')
debug.log('Bye ')