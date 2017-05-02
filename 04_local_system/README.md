### Node’s “process” object

* A collection of Streams
  * process.stdin
  * process.stdout
  * process.stderr
* Attributes of the current process
  * process.env
  * process.argv
  * process.pid
  * process.title
  * process.uptime()
  * process.memoryUsage()
  * process.cwd()
  * ...etc.
* Process-related actions
  * process.abort()
  * process.chdir()
  * process.kill()
  * process.setgid()
  * process.setuid()
  * ...etc.
* An instance of EventEmitter
  * event: ‘exit’
  * event: ‘uncaughtException’
  * POSIXsignalevents(‘SIGINT’,etc.)

### Interacting with the file system
### Buffers
### The “os” module
* os.tmpDir()
* os.hostname()
* os.type()
* os.platform()
* os.arch()
* os.release()
* os.uptime()
* os.loadavg()
* os.totalmem()
* os.freemem()
* os.cpus()
* os.networkInterfaces()
* os.EOL
