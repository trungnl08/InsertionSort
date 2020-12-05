var _0x4265 = [
  "\x69\x6E\x70\x75\x74",
  "\x6F\x6E",
  "\x23\x73\x70\x65\x65\x64",
  "\x23\x65\x6C\x65\x6D\x65\x6E\x74\x73",
  "\x63\x6C\x69\x63\x6B",
  "\x23\x73\x6F\x72\x74",
  "\x23\x73\x74\x6F\x70",
  "\x23\x72\x65\x73\x65\x74",
  "\x76\x61\x6C\x75\x65",
  "\x73\x70\x65\x65\x64",
  "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
  "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
  "\x73\x70\x65\x65\x64\x2D\x63\x6F\x75\x6E\x74",
  "\x65\x6C\x65\x6D\x65\x6E\x74\x73",
  "\x65\x6C\x65\x6D\x65\x6E\x74\x2D\x63\x6F\x75\x6E\x74",
  "\x72\x61\x6E\x64\x6F\x6D",
  "\x72\x6F\x75\x6E\x64",
  "\x61\x64\x64",
  "\x73\x69\x7A\x65",
  "",
  "\x66\x72\x6F\x6D",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x64\x69\x76",
  "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74",
  "\x63\x6C\x61\x73\x73",
  "\x62\x61\x72",
  "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65",
  "\x73\x74\x79\x6C\x65",
  "\x77\x69\x64\x74\x68\x3A\x20",
  "\x70\x78\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20",
  "\x25\x3B",
  "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64",
  "\x64\x69\x73\x61\x62\x6C\x65\x64",
  "\x61\x74\x74\x72",
  "\x2E\x73\x6F\x72\x74",
  "\x2E\x73\x6C\x69\x64\x65\x72\x2D\x69\x6E\x70\x75\x74",
  "\x69\x6E\x73\x65\x72\x74\x69\x6F\x6E",
  "\x73\x65\x6C\x65\x63\x74\x23\x6F\x72\x64\x65\x72",
  "\x67\x72\x65\x65\x6E",
  "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73",
  "\x61\x64\x64\x43\x6C\x61\x73\x73",
  "\x41\x62\x6E\x6F\x72\x6D\x61\x6C\x20\x64\x65\x6C\x61\x79\x2E",
  "\x6C\x6F\x67",
  "\x76\x61\x6C",
  "\x6F\x70\x74\x69\x6F\x6E\x3A\x73\x65\x6C\x65\x63\x74\x65\x64",
  "\x63\x68\x69\x6C\x64\x72\x65\x6E",
  "\x73\x65\x6C\x65\x63\x74\x23\x61\x6C\x67\x6F\x72\x69\x74\x68\x6D\x73",
  "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
  "\x70\x61\x72\x73\x65",
  "\x70\x75\x73\x68",
];
CURRENT_SET = new Set();
(function init() {
  updateSpeed();
  updateElements();
})();
$(_0x4265[2])[_0x4265[1]](_0x4265[0], function () {
  updateSpeed();
});
$(_0x4265[3])[_0x4265[1]](_0x4265[0], function () {
  updateElements();
});
$(_0x4265[5])[_0x4265[1]](_0x4265[4], function () {
  runAlgo();
});
$(_0x4265[6])[_0x4265[1]](_0x4265[4], function () {
  stopAnimation();
});
$(_0x4265[7])[_0x4265[1]](_0x4265[4], function () {
  reset();
});
function updateSpeed() {
  SPEED = document[_0x4265[10]](_0x4265[9])[_0x4265[8]];
  document[_0x4265[10]](_0x4265[12])[_0x4265[11]] = 101 - SPEED;
}
function updateElements() {
  clearContainer();
  TOTAL_ELEMENTS = document[_0x4265[10]](_0x4265[13])[_0x4265[8]];
  document[_0x4265[10]](_0x4265[14])[_0x4265[11]] = TOTAL_ELEMENTS;
  CURRENT_SET = generateRandomSet();
  insertBars(CURRENT_SET);
}
function generateRandomSet() {
  let _0xb40dx5 = new Set();
  while (_0xb40dx5[_0x4265[18]] < TOTAL_ELEMENTS) {
    _0xb40dx5[_0x4265[17]](Math[_0x4265[16]](Math[_0x4265[15]]() * 99) + 1);
  }
  return _0xb40dx5;
}
function clearContainer() {
  container[_0x4265[11]] = _0x4265[19];
}
function insertBars(_0xb40dx5) {
  const _0xb40dx8 = CONTAINER_WIDTH / TOTAL_ELEMENTS;
  const _0xb40dx9 = Array[_0x4265[20]](_0xb40dx5);
  for (let _0xb40dxa = 0; _0xb40dxa < _0xb40dx9[_0x4265[21]]; ++_0xb40dxa) {
    let _0xb40dxb = document[_0x4265[23]](_0x4265[22]);
    _0xb40dxb[_0x4265[26]](_0x4265[24], _0x4265[25]);
    _0xb40dxb[_0x4265[26]](
      _0x4265[27],
      _0x4265[28] + _0xb40dx8 + _0x4265[29] + _0xb40dx9[_0xb40dxa] + _0x4265[30]
    );
    _0xb40dxb[_0x4265[11]] = _0xb40dx9[_0xb40dxa];
    container[_0x4265[31]](_0xb40dxb);
  }
}
function disableInput(_0xb40dxd = true) {
  $(_0x4265[34])[_0x4265[33]](_0x4265[32], _0xb40dxd);
  $(_0x4265[35])[_0x4265[33]](_0x4265[32], _0xb40dxd);
  $(_0x4265[36])[_0x4265[33]](_0x4265[32], _0xb40dxd);
  $(_0x4265[37])[_0x4265[33]](_0x4265[32], _0xb40dxd);
  $(_0x4265[6])[_0x4265[33]](_0x4265[32], true)[_0x4265[39]](_0x4265[38]);
  if (_0xb40dxd) {
    $(_0x4265[34])[_0x4265[39]](_0x4265[38]);
    $(_0x4265[6])[_0x4265[33]](_0x4265[32], false)[_0x4265[40]](_0x4265[38]);
    return;
  }
  $(_0x4265[34])[_0x4265[40]](_0x4265[38]);
}
function reset() {
  stopAnimation();
  updateSpeed();
  updateElements();
}
function runAlgo() {
  if (SPEED <= 0) {
    console[_0x4265[42]](_0x4265[41]);
    return;
  }
  const _0xb40dx10 = $(_0x4265[46])[_0x4265[45]](_0x4265[44])[_0x4265[43]]();
  const _0xb40dx11 = $(_0x4265[37])[_0x4265[45]](_0x4265[44])[_0x4265[43]]();
  let _0xb40dx12 = JSON[_0x4265[48]](JSON[_0x4265[47]](_0xb40dx14()));
  const _0xb40dx13 = _0xb40dx16(_0xb40dx10, _0xb40dx11, _0xb40dx12);
  if (_0xb40dx13) {
    disableInput();
    animate(_0xb40dx13);
  }
  function _0xb40dx14() {
    let _0xb40dx15 = Array();
    for (let _0xb40dxa = 0; _0xb40dxa < bars[_0x4265[21]]; ++_0xb40dxa) {
      _0xb40dx15[_0x4265[49]](parseInt(bars[_0xb40dxa][_0x4265[11]]));
    }
    return _0xb40dx15;
  }
  function _0xb40dx16(_0xb40dx10, _0xb40dx11, _0xb40dx17) {
    switch (_0xb40dx10) {
      case _0x4265[36]: {
        return Algorithms[_0x4265[36]](_0xb40dx17, _0xb40dx11);
      }
      default: {
        return false;
      }
    }
  }
}
