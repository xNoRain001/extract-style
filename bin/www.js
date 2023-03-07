#! /usr/bin/env node

const { resolve } = require('path')
const { Command } = require('commander')

const config = require('./config')
const extractStyle = require('../src')

const program = new Command()

Object.values(config).forEach(({ option, descriptor }) => {
  program.option(option, descriptor)
})

const { input, output } = program.parse()._optionValues

if (!input) {
  console.log('error: input missing')

  return
} else if (!output) {
  console.log('error: output missing')

  return 
}

const cwd = process.cwd()
const _input = resolve(cwd, input)
const _output = resolve(cwd, output)

extractStyle(_input, _output)
