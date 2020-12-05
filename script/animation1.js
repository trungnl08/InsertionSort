var _0x16e0 = [
  "\x73\x77\x61\x70",
  "\x66\x6E",
  "\x6A\x71\x75\x65\x72\x79",
  "\x72\x65\x6D\x6F\x76\x65",
  "\x62\x65\x66\x6F\x72\x65",
  "\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65",
  "",
  "\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65",
  "\x65\x61\x63\x68",
  "\x61\x64\x64\x46\x72\x61\x6D\x65",
  "\x67\x65\x74\x46\x72\x61\x6D\x65\x73",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x63\x6F\x6D\x70\x61\x72\x65\x64",
  "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73",
  "\x2E\x62\x61\x72",
  "\x65\x6C\x65\x6D\x65\x6E\x74\x73",
  "\x68\x69\x67\x68\x6C\x69\x67\x68\x74\x73",
  "\x61\x64\x64\x43\x6C\x61\x73\x73",
  "\x67\x72\x65\x65\x6E",
  "\x64\x69\x73\x61\x62\x6C\x65\x64",
  "\x61\x74\x74\x72",
  "\x23\x73\x74\x6F\x70",
  "\x70\x75\x73\x68",
];
$[_0x16e0[1]][_0x16e0[0]] = function (_0xc3c9x1) {
  _0xc3c9x1 = _0xc3c9x1[_0x16e0[2]] ? _0xc3c9x1 : $(_0xc3c9x1);
  return this[_0x16e0[8]](function () {
    $(document[_0x16e0[7]](_0x16e0[6]))
      [_0x16e0[5]](this)
      [_0x16e0[4]](_0xc3c9x1[_0x16e0[4]](this))
      [_0x16e0[3]]();
  });
};
let ANIMATION_FRAMES = [];
function animate(_0xc3c9x4) {
  ANIMATION_FRAMES = [];
  _0xc3c9x4[_0x16e0[9]](new Frame());
  const _0xc3c9x5 = _0xc3c9x4[_0x16e0[10]]();
  for (let _0xc3c9x6 = 0; _0xc3c9x6 < _0xc3c9x5[_0x16e0[11]]; ++_0xc3c9x6) {
    (function (
      _0xc3c9x5,
      _0xc3c9x6,
      _0xc3c9x7,
      ANIMATION_FRAMES,
      _0xc3c9x8,
      _0xc3c9x9
    ) {
      ANIMATION_FRAMES[_0x16e0[22]](
        setTimeout(function () {
          $(_0x16e0[14])[_0x16e0[13]](_0x16e0[12]);
          const _0xc3c9xa = _0xc3c9x6 == _0xc3c9x5[_0x16e0[11]] - 1;
          const _0xc3c9x1 = _0xc3c9x5[_0xc3c9x6][_0x16e0[15]];
          const _0xc3c9xb = _0xc3c9x5[_0xc3c9x6][_0x16e0[16]];
          if (_0xc3c9xb[_0x16e0[11]]) {
            for (h = 0; h < _0xc3c9xb[_0x16e0[11]]; ++h) {
              $(_0xc3c9x7[_0xc3c9xb[h]])[_0x16e0[17]](_0x16e0[12]);
            }
          }
          if (_0xc3c9x1[_0x16e0[11]]) {
            $(_0xc3c9x7[_0xc3c9x1[1]])[_0x16e0[0]](_0xc3c9x7[_0xc3c9x1[0]]);
          }
          if (_0xc3c9xa) {
            $(_0x16e0[21])
              [_0x16e0[20]](_0x16e0[19], true)
              [_0x16e0[13]](_0x16e0[18]);
          }
        }, _0xc3c9x8 * _0xc3c9x9 * _0xc3c9x6)
      );
    })(_0xc3c9x5, _0xc3c9x6, bars, ANIMATION_FRAMES, SPEED, TOTAL_ELEMENTS);
  }
}
function stopAnimation() {
  for (
    let _0xc3c9x6 = 0;
    _0xc3c9x6 < ANIMATION_FRAMES[_0x16e0[11]];
    ++_0xc3c9x6
  ) {
    clearTimeout(ANIMATION_FRAMES[_0xc3c9x6]);
  }
  $(_0x16e0[14])[_0x16e0[13]](_0x16e0[12]);
  disableInput(false);
}
