var _0xa463 = [
  "\x65\x6C\x65\x6D\x65\x6E\x74\x73",
  "\x68\x69\x67\x68\x6C\x69\x67\x68\x74\x73",
  "\x69\x6E\x66\x6F\x72\x6D\x61\x74\x69\x6F\x6E",
  "",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x70\x75\x73\x68",
  "\x66\x72\x61\x6D\x65\x73",
  "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
  "\x70\x61\x72\x73\x65",
  "\x61\x64\x64\x46\x72\x61\x6D\x65",
  "\x64\x65\x73\x63",
];
class Frame {
  constructor(_0x98bex2, _0x98bex3) {
    this[_0xa463[0]] = [];
    this[_0xa463[1]] = [];
    this[_0xa463[2]] = _0xa463[3];
    if (_0x98bex2 != undefined && _0x98bex2[_0xa463[4]]) {
      this[_0xa463[0]] = _0x98bex2;
    }
    if (_0x98bex3 != undefined && _0x98bex3[_0xa463[4]]) {
      this[_0xa463[1]] = _0x98bex3;
    }
  }
  addHighlights(_0x98bex5) {
    for (const _0x98bex2 of _0x98bex5) {
      this[_0xa463[1]][_0xa463[5]](_0x98bex2);
    }
  }
  addElements(_0x98bex7) {
    for (const _0x98bex2 of _0x98bex7) {
      this[_0xa463[0]][_0xa463[5]](_0x98bex2);
    }
  }
}
class Animation {
  constructor() {
    this[_0xa463[6]] = [];
  }
  addFrame(_0x98bex9) {
    const _0x98bexa = JSON[_0xa463[8]](JSON[_0xa463[7]](_0x98bex9));
    this[_0xa463[6]][_0xa463[5]](_0x98bexa);
  }
  getFrames() {
    return this[_0xa463[6]];
  }
}
class Algorithms {
  static insertion(_0x98bex2, _0x98bexd) {
    let _0x98bex7 = _0x98bex2;
    let _0x98bexe = new Animation();
    for (let _0x98bexf = 1; _0x98bexf < _0x98bex7[_0xa463[4]]; ++_0x98bexf) {
      let _0x98bex10 = _0x98bex7[_0x98bexf];
      let _0x98bex11 = _0x98bexf - 1;
      _0x98bexe[_0xa463[9]](new Frame([], [_0x98bex11, _0x98bex11 + 1]));
      while (
        _0x98bex11 >= 0 &&
        (_0x98bexd == _0xa463[10]
          ? _0x98bex7[_0x98bex11] < _0x98bex10
          : _0x98bex7[_0x98bex11] > _0x98bex10)
      ) {
        _0x98bexe[_0xa463[9]](new Frame([], [_0x98bex11, _0x98bex11 + 1]));
        _0x98bex7[_0x98bex11 + 1] = _0x98bex7[_0x98bex11];
        _0x98bexe[_0xa463[9]](
          new Frame([_0x98bex11, _0x98bex11 + 1], [_0x98bex11, _0x98bex11 + 1])
        );
        _0x98bex11 = _0x98bex11 - 1;
      }
      _0x98bex7[_0x98bex11 + 1] = _0x98bex10;
    }
    return _0x98bexe;
  }
}
