class Frame {
  constructor(e, h) {
    this.elements = [];
    this.highlights = [];
    this.information = "";

    if (e != undefined && e.length) {
      this.elements = e;
    }

    if (h != undefined && h.length) {
      this.highlights = h;
    }
  }

  addHighlights(highlights) {
    for (const e of highlights) {
      this.highlights.push(e);
    }
  }

  addElements(elements) {
    for (const e of elements) {
      this.elements.push(e);
    }
  }
}

class Animation {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    const temp = JSON.parse(JSON.stringify(frame)); // Only store a copy
    this.frames.push(temp);
  }

  getFrames() {
    return this.frames;
  }
}

class Algorithms {
  static insertion(e, order) {
    let elements = e;
    let solution = new Animation();

    for (let i = 1; i < elements.length; ++i) {
      let key = elements[i];
      let j = i - 1;

      solution.addFrame(new Frame([], [j, j + 1]));

      while (
        j >= 0 &&
        (order == "desc" ? elements[j] < key : elements[j] > key)
      ) {
        solution.addFrame(new Frame([], [j, j + 1]));
        elements[j + 1] = elements[j];
        solution.addFrame(new Frame([j, j + 1], [j, j + 1]));

        j = j - 1;
      }
      elements[j + 1] = key;
    }

    return solution;
  }
}
