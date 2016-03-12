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
- [ ] Prevent circular object overflows

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
 - [x] keys
 - [x] vals
 - [ ] assocIn
 - [ ] updateIn
 - [ ] reduce
 - [ ] filter

## Vector
Need to make some decisions about shadowing natives.

 - [x] conj
 - [x] subvec
 - [x] first
 - [x] rest
 - [x] nth
 - [x] each
 - [x] flatten
 - [x] mapcat
 - [x] take/While
 - [x] drop/While
 - [x] interpose
 - [x] interleave
 - [x] any
 - [x] all
 - [x] zipmap
 - [x] filter
 - [x] remove
 - [x] reverse
 - [x] sort
 - [x] concat
 - [x] map
 - [x] peek
 - [x] pop
 - [ ] distinct
 - [ ] equals
 - [ ] partition/By
 - [ ] groupBy

## Functions
 - [x] identity
 - [x] constantly
 - [x] inc/dec
 - [x] comp
 - [x] partial
 - [x] curry
 - [x] range
 - [x] juxt
 - [x] knit
 - [x] complement
 - [ ] pipe

