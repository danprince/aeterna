Eterna
======

[![Build Status](https://travis-ci.org/danprince/aeterna.svg?branch=master)](https://travis-ci.org/danprince/aeterna)

Elegant persistent data structures with a Clojure-esque API and Javascript semantics.

 - [ ] Should be awesome to debug
 - [ ] First class error messages
 - [ ] Idiomatic JS interface

---

Nice to haves
- [ ] Async update batching interface
- [ ] All methods autobound

## Object
 - [x] assoc
 - [x] dissoc
 - [x] size
 - [x] get
 - [x] getIn
 - [x] hasKey
 - [x] empty
 - [x] merge
 - [x] equals
 - [ ] assocIn
 - [ ] updateIn
 - [ ] keys
 - [ ] vals
 - [ ] reduce
 - [ ] filter

## Vector
Need to make some decisions about shadowing natives.

 - [x] conj
 - [x] subvec
 - [x] first
 - [x] rest
 - [ ] nth
 - [ ] flatten
 - [ ] each
 - [ ] mapcat
 - [ ] remove
 - [ ] take/While
 - [ ] drop/While
 - [ ] interpose
 - [ ] interleave
 - [ ] iterate
 - [ ] repeat
 - [ ] repeatedly
 - [ ] partition/By
 - [ ] groupBy
 - [ ] peek
 - [ ] zipmap
 - [ ] distinct
 - [ ] equals
 - [ ] reverse
 - [ ] pop
 - [ ] filter
 - [ ] some
 - [ ] every
 - [ ] sort
 - [ ] concat
 - [ ] map
 - [ ] reduce

## Sets
 - [ ] disj
 - [ ] union
 - [ ] intersection
 - [ ] difference
 - [ ] isSubset
 - [ ] isSuperSet
 
## Functions
 - [x] identity
 - [x] constantly
 - [x] inc/dec
 - [x] isEven/isOdd
 - [x] comp
 - [x] partial
 - [x] curry
 - [ ] range
 - [ ] juxt
 - [ ] knit
 - [ ] pipe

