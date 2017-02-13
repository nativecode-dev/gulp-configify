const configly = require('../lib')
const expect = require('chai').expect
const mocha = require('mocha')
const path = require('path')

describe('when using module', () => {
  const configpath = path.join(__dirname, 'configs')

  it('should create property for config', () => {
    const config = configly(configpath, 'a.json')
    expect(config.a).to.not.be.undefined
  })

  it('should create properties for multiple configs', () => {
    const config = configly(configpath, 'a.json', 'b.json')
    expect(config.a.name).to.equal('a')
    expect(config.b.name).to.equal('b')
  })

  it('should merge two configurations', () => {
    const merged = configly(configpath, 'a.json', 'a/a.json')
    expect(merged.a.name).to.equal('a')
    expect(merged.a.parameters.length).to.equal(3)
  })
})
