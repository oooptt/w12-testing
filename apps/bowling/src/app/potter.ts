// potter.ts

export class Potter {
  private bookcase: Array<number> = [0, 0, 0, 0, 0];
  private allbook = 0;
  buy(books: Array<number>) {
    books.forEach(element => {
      switch (element) {
        case 0: {
          this.bookcase[0]++;
          break;
        }
        case 1: {
          this.bookcase[1]++;
          break;
        }
        case 2: {
          this.bookcase[2]++;
          break;
        }
        case 3: {
          this.bookcase[3]++;
          break;
        }
        case 4: {
          this.bookcase[4]++;
          break;
        }
      }
      this.allbook++;
    })
  }

  get price() {
    let price = 0;
    while (this.allbook > 0) {
      if (this.allbook == 8) {
        let pair_num = 0;
        for (let index = 0; index < this.allbook; index++) {
          if (this.bookcase[index] == 2)
            pair_num++;
        }
        if (pair_num == 3) {
          price += 8 * 0.8 * 4 * 2;
          return price;
        }
      }

      let round = 0;
      for (let index = 0; index < 5; index++) {
        if (this.bookcase[index] > 0) {
          this.allbook--;
          this.bookcase[index]--;
          round++;
        }
      }

      switch (round) {
        case 1:
          price += 8;
          break;
        case 2:
          price += 8 * 0.95 * 2;
          break;
        case 3:
          price += 8 * 0.9 * 3;
          break;
        case 4:
          price += 8 * 0.8 * 4;
          break;
        case 5:
          price += 8 * 0.75 * 5;
          break;
      }
    }

    return price;
  }


  // private rolls: number[] = [];
  // private currentRoll = 0;
  // potter(pins: number) {
  //   this.rolls[this.currentRoll++] = pins;
  // }
  // 
  // get score() {
  //   let score = 0;
  //   let frameIndex = 0;
  //   for (let frame = 0; frame < 10; frame++) {
  //     if (this.isStrike(frameIndex)) {
  //       score += 10 + this.strikeBouns(frameIndex);
  //       frameIndex++;
  //       continue;
  //     }
  //     if (this.isSpare(frameIndex)) {
  //       score += 10 + this.spareBouns(frameIndex);
  //     } else {
  //       score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  //     }
  //     frameIndex += 2;
  //   }
  //   return score;
  // }

  // private isStrike(frameIndex: number) {
  //   return this.rolls[frameIndex] === 10;
  // }

  // private isSpare(frameIndex: number) {
  //   return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  // }

  // private strikeBouns(frameIndex: number) {
  //   return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  // }

  // private spareBouns(frameIndex: number) {
  //   return this.rolls[frameIndex + 2];
  // }
}
