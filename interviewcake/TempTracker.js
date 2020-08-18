class TempTracker {
  // insert()—records a new temperature
  // getMax()—returns the highest temp we've seen so far
  // getMin()—returns the lowest temp we've seen so far
  // getMean()—returns the mean of all temps we've seen so far
  // getMode()—returns a mode of all temps we've seen so far

  constructor() {
    this.min = null;
    this.max = null;
    this.mean = null;
    this.mode = null;
    this.sum = 0;
    this.items = 0;
  }

  insert(record) {
    if (this.min == null || this.min > record) {
      this.min = record;
    }

    if (this.max == null || this.max < record) {
      this.max = record;
    }

    this.items++;
    this.sum += record;
    this.mean = this.sum / this.items;

    // this.mode[record] = this.mode[record] ? this.mode[record] + 1 : 1;

    // if (this.records.length === 1) {
    //   this.max = record;
    //   this.min = record;
    //   this.mean = record;
    // } else {
    //   this.max = Math.max(record, this.max);
    //   this.min = Math.min(record, this.min);
    //   this.mean = this.records.reduce((a, b) => a + b) / this.records.length;
    //   const maxMode = Math.max(...Object.values(this.mode));
    //   for (const key in this.mode) {
    //     if (this.mode.hasOwnProperty(key)) {
    //       const value = this.mode[key];

    //       if (value === maxMode) {
    //         this.maxMode = key;
    //         break;
    //       }
    //     }
    //   }
    // }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}

const tracker = new TempTracker();

tracker.insert(1);
tracker.insert(2);
tracker.insert(3);
tracker.insert(3);
tracker.insert(3);
tracker.insert(4);
tracker.insert(4);
tracker.insert(4);

console.log(tracker.getMax(), tracker.getMin(), tracker.getMean(), tracker.getMode());
