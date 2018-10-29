'use strict';

// import 'babel-polyfill';
// require('babel-polyfill');
// var FileSaver = require('file-saver');
import Utils = require("./Utils");

class Logger {

  private name: string;
  private level: string;
  private color: string;
  private appender: string;

  constructor(name: string) {
    this.name = name;
  }

  public config (level, color, appender) {
    this.level = level || 'ERROR';
    this.color = color || 'black';
    this.appender = appender || 'console';
  }

  public none (...message) {
    if (Utils.shouldLog(this.level, 6)) {
      
    }
  }

  public log (...message) {
    if (Utils.shouldLog(this.level, 1)) {
      if (this.appender.toLowerCase() == 'file') {
        // var blob = new Blob(["Hello, world!"], {
        //   type: "text/plain;charset=utf-8"
        // });
        // FileSaver.saveAs(blob, "helloworld.txt");
      } else {
        console.log(Utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'LOG', this.name, '=>', ...message);
      }
    }
  }

  public info (...message) {
    if (Utils.shouldLog(this.level, 2)) {
      console.info(Utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'INFO', this.name, '=>', ...message);
    }
  }

  public debug (...message) {
    if (Utils.shouldLog(this.level, 3)) {
      console.debug(Utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'DEBUG', this.name, '=>', ...message);
    }
  }

  public warn (...message) {
    if (Utils.shouldLog(this.level, 4)) {
      console.warn(Utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'WARN', this.name, '=>', ...message);
    }
  }

  public error(...message) {
    if (Utils.shouldLog(this.level, 5)) {
      console.error(Utils.dateFtt('yyyy-MM-dd hh:mm:ss.S', new Date()), 'ERROR', this.name, '=>', ...message);
    }
  }
}

export = Logger;
