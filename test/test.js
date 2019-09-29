const _ = require('../alen_lodash.js')
var a = require('assert')
var expect = require('chai').expect

describe('lodash_test',function(){
    describe('chunk_test',function(){
        it('[[a, b], [c, d]] = _.chunk([a, b, c, d], 2)',function(){
            a.deepEqual([['a','b'],['c','d']] ,_.chunk(['a','b','c','d'],2))
        })   

        it('return -1 when not succeed _.chunk([a, b, c, d], -1 )',function(){
            a.deepEqual(-1 ,_.chunk(['a','b','c','d'],-1))
        })
    })

    describe('sortedindex_test',function(){
        it('_.sortedIndex([30, 50], 40) = 1',function(){
            a.equal(_.sortedIndex([30, 50], 40),1)
        })

        it('_.sortedIndex([30, 50], 20) = 0',function(){
            a.equal(_.sortedIndex([30, 50], 20),0)
        })  
        
        it('return -1 when not succeed _.sortedindex([30,50],alen))',function(){
            a.equal(-1,_.sortedIndex([30,50],'alen'))
        })
    })//_.sortedIndex(array, value)Returns the index at which value should be inserted into array
})

describe('isString_test',function(){
    it("_.isString('alen') = true",function(){
        expect(_.isString('alen')).to.equal(true)
    })

    it("_.isString('235') = false",function(){
        expect(_.isString(235)).to.equal(false)
    })
})
